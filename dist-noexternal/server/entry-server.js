import { basename } from "node:path";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSuspense, ssrRenderVNode, renderToString } from "vue/server-renderer";
import { useSSRContext, resolveComponent, withCtx, createTextVNode, createVNode, resolveDynamicComponent, openBlock, createBlock, Suspense, createSSRApp } from "vue";
import { createRouter as createRouter$1, createMemoryHistory } from "vue-router";
const __ssr_vue_processAssetPath = (url) => "/test/" + url;
__ssr_vue_processAssetPath;
const App_vue_vue_type_style_index_0_lang = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_router_link = resolveComponent("router-link");
  const _component_router_view = resolveComponent("router-view");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_router_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home`);
      } else {
        return [
          createTextVNode("Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`| `);
  _push(ssrRenderComponent(_component_router_link, { to: "/about" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`About`);
      } else {
        return [
          createTextVNode("About")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_router_view, null, {
    default: withCtx(({ Component }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSuspense(_push2, {
          default: () => {
            _push2(`<div${_scopeId}>`);
            ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(Component), null, null), _parent2, _scopeId);
            _push2(`</div>`);
          },
          _: 2
        });
      } else {
        return [
          (openBlock(), createBlock(Suspense, null, {
            default: withCtx(() => [
              createVNode("div", null, [
                (openBlock(), createBlock(resolveDynamicComponent(Component)))
              ])
            ]),
            _: 2
          }, 1024))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const pages = /* @__PURE__ */ Object.assign({ "./pages/About.vue": () => import("./assets/About.61f93fb7.js"), "./pages/External.vue": () => import("./assets/External.5d3e349c.js"), "./pages/Home.vue": () => import("./assets/Home.2b918fbd.js"), "./pages/Store.vue": () => import("./assets/Store.f104975b.js") });
const routes = Object.keys(pages).map((path) => {
  const name = path.match(/\.\/pages(.*)\.vue$/)[1].toLowerCase();
  return {
    path: name === "/home" ? "/" : name,
    component: pages[path]
  };
});
function createRouter() {
  return createRouter$1({
    history: createMemoryHistory("/test/"),
    routes
  });
}
function createApp() {
  const app = createSSRApp(App);
  const router = createRouter();
  app.use(router);
  return { app, router };
}
async function render(url, manifest) {
  const { app, router } = createApp();
  await router.push(url);
  await router.isReady();
  const ctx = {};
  const html = await renderToString(app, ctx);
  const preloadLinks = renderPreloadLinks(ctx.modules, manifest);
  return [html, preloadLinks];
}
function renderPreloadLinks(modules, manifest) {
  let links = "";
  const seen = /* @__PURE__ */ new Set();
  modules.forEach((id) => {
    const files = manifest[id];
    if (files) {
      files.forEach((file) => {
        if (!seen.has(file)) {
          seen.add(file);
          const filename = basename(file);
          if (manifest[filename]) {
            for (const depFile of manifest[filename]) {
              links += renderPreloadLink(depFile);
              seen.add(depFile);
            }
          }
          links += renderPreloadLink(file);
        }
      });
    }
  });
  return links;
}
function renderPreloadLink(file) {
  if (file.endsWith(".js")) {
    return `<link rel="modulepreload" crossorigin href="${file}">`;
  } else if (file.endsWith(".css")) {
    return `<link rel="stylesheet" href="${file}">`;
  } else if (file.endsWith(".woff")) {
    return ` <link rel="preload" href="${file}" as="font" type="font/woff" crossorigin>`;
  } else if (file.endsWith(".woff2")) {
    return ` <link rel="preload" href="${file}" as="font" type="font/woff2" crossorigin>`;
  } else if (file.endsWith(".gif")) {
    return ` <link rel="preload" href="${file}" as="image" type="image/gif">`;
  } else if (file.endsWith(".jpg") || file.endsWith(".jpeg")) {
    return ` <link rel="preload" href="${file}" as="image" type="image/jpeg">`;
  } else if (file.endsWith(".png")) {
    return ` <link rel="preload" href="${file}" as="image" type="image/png">`;
  } else {
    return "";
  }
}
export {
  __ssr_vue_processAssetPath as _,
  _export_sfc as a,
  render
};
