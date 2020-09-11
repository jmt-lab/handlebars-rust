use serde_json::value::Value as Json;

use crate::context::Context;
use crate::error::RenderError;
use crate::helpers::HelperDef;
use crate::json::value::ScopedJson;
use crate::registry::Registry;
use crate::render::{Helper, RenderContext};

#[derive(Clone, Copy)]
pub struct LookupHelper;

impl HelperDef for LookupHelper {
    fn call_inner<'reg: 'rc, 'rc: 'blk, 'blk>(
        &self,
        h: &Helper<'reg, 'rc>,
        r: &'reg Registry<'reg>,
        _: &'rc Context,
        _: &mut RenderContext<'reg, 'rc, 'blk>,
    ) -> Result<Option<ScopedJson<'reg, 'rc>>, RenderError> {
        let collection_value = h
            .param(0)
            .ok_or_else(|| RenderError::new("Param not found for helper \"lookup\""))?;
        let index = h
            .param(1)
            .ok_or_else(|| RenderError::new("Insufficient params for helper \"lookup\""))?;

        let value = match *collection_value.value() {
            Json::Array(ref v) => index
                .value()
                .as_u64()
                .and_then(|u| v.get(u as usize))
                .map(|i| ScopedJson::Derived(i.clone())),
            Json::Object(ref m) => index
                .value()
                .as_str()
                .and_then(|k| m.get(k))
                .map(|i| ScopedJson::Derived(i.clone())),
            _ => None,
        };
        if r.strict_mode() && value.is_none() {
            Err(RenderError::strict_error(None))
        } else {
            Ok(value)
        }
    }
}

pub static LOOKUP_HELPER: LookupHelper = LookupHelper;

#[cfg(test)]
mod test {
    use crate::registry::Registry;

    use std::collections::BTreeMap;

    #[test]
    fn test_lookup() {
        let mut handlebars = Registry::new();
        assert!(handlebars
            .register_template_string("t0", "{{#each v1}}{{lookup ../v2 @index}}{{/each}}")
            .is_ok());
        assert!(handlebars
            .register_template_string("t1", "{{#each v1}}{{lookup ../v2 1}}{{/each}}")
            .is_ok());
        assert!(handlebars
            .register_template_string("t2", "{{lookup kk \"a\"}}")
            .is_ok());

        let mut m: BTreeMap<String, Vec<u16>> = BTreeMap::new();
        m.insert("v1".to_string(), vec![1u16, 2u16, 3u16]);
        m.insert("v2".to_string(), vec![9u16, 8u16, 7u16]);

        let m2 = btreemap! {
            "kk".to_string() => btreemap!{"a".to_string() => "world".to_string()}
        };

        let r0 = handlebars.render("t0", &m);
        assert_eq!(r0.ok().unwrap(), "987".to_string());

        let r1 = handlebars.render("t1", &m);
        assert_eq!(r1.ok().unwrap(), "888".to_string());

        let r2 = handlebars.render("t2", &m2);
        assert_eq!(r2.ok().unwrap(), "world".to_string());
    }

    #[test]
    fn test_strict_lookup() {
        let mut hbs = Registry::new();

        assert_eq!(
            hbs.render_template("{{lookup kk 1}}", &json!({"kk": []}))
                .unwrap(),
            ""
        );

        hbs.set_strict_mode(true);

        assert!(hbs
            .render_template("{{lookup kk 1}}", &json!({"kk": []}))
            .is_err());
    }
}
