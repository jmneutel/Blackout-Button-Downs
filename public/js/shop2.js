(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }

  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }

  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'spaghettistore.myshopify.com',
      apiKey: 'e77e769d66e054d06fb4e1da4c3ef551',
      appId: '6',
    });

    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('collection', {
        options: {
		  "toggle": {
		    "styles": {
		      "toggle": {
		        "background-color": "#2a9fd6",
		        ":hover": {
		          "background-color": "#268fc1"
		        },
		        ":focus": {
		          "background-color": "#268fc1"
		        }
		      }
		    }
		  },
		}
      }).then(function() {
      	$(".shopify-buy-frame--toggle.is-sticky").css("top", "5%");
      });
    });
  }
})();

