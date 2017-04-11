(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 20,
	color: "#0099D6",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/728x90_Canvas_atlas_.png", id:"728x90_Canvas_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"728x90_Canvas_atlas_", frames: [[206,92,20,18],[0,0,210,90],[0,92,100,30],[102,92,102,23]]}
];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.arr = function() {
	this.spriteSheet = ss["728x90_Canvas_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg = function() {
	this.spriteSheet = ss["728x90_Canvas_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.btn = function() {
	this.spriteSheet = ss["728x90_Canvas_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.spriteSheet = ss["728x90_Canvas_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.text_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EFEFEF").s().p("A9rHCIAAuDMA7WAAAIAAODg");
	this.shape.setTransform(190,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,380,90);


(lib.text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EA4398").s().p("AgGAJQgEgCAAgHQAAgFADgDQADgDAEAAQAFAAADADQADADAAAFQAAAGgDADQgDADgFAAQgDAAgDgDg");
	this.shape.setTransform(306.9,65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EA4398").s().p("AgjAuIAAgPQAIAEAIACQAJACAIAAQAKAAAGgDQAHgEAAgIQgBgGgEgEQgFgFgNgFQgPgEgGgEQgGgDgCgGQgEgFAAgGQABgNAJgHQALgHAPAAQARAAAPAGIgFANQgPgGgNAAQgJAAgGADQgFADAAAHQAAAEACACQACADAFADQAFADALAEQARAGAHAGQAGAGAAALQAAAOgKAHQgKAIgSAAQgUAAgMgGg");
	this.shape_1.setTransform(299.9,60.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EA4398").s().p("AggA7QgLgOAAgZQAAgXALgOQALgOAUAAQATAAALAPIABAAIgBgHIAAgHIAAgqIAPAAIAACPIgMAAIgCgOIgBAAQgLAQgTAAQgUAAgLgOgAgUgHQgHAIAAATQAAAUAHAKQAHAKANAAQAPAAAHgJQAHgIAAgUIAAgDQAAgUgHgJQgHgJgPAAQgNAAgHALg");
	this.shape_2.setTransform(289.2,58.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EA4398").s().p("AgcAmQgNgNAAgZQAAgWAMgPQAMgOATAAQASAAAMAMQALANgBAUIAAAIIhEAAQABASAIAJQAJAKAOAAQAQAAARgHIAAAOIgQAFQgHABgKAAQgWAAgMgOgAgRgeQgGAIgCAOIAzAAQAAgPgGgIQgHgHgMAAQgKAAgIAIg");
	this.shape_3.setTransform(278.4,60.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EA4398").s().p("AgcAmQgOgNAAgZQAAgWANgPQAMgOASAAQAUAAALAMQAKANABAUIAAAIIhFAAQABASAIAJQAKAKANAAQAQAAAQgHIAAAOIgPAFQgIABgJAAQgWAAgMgOgAgRgeQgHAIgBAOIAzAAQAAgPgHgIQgGgHgMAAQgKAAgIAIg");
	this.shape_4.setTransform(267.8,60.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EA4398").s().p("AAjBDIhIhwIgBAAIABAlIAABLIgPAAIAAiFIASAAIBIBvIABAAIgBgQIAAgUIAAhLIAOAAIAACFg");
	this.shape_5.setTransform(255.3,59.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EA4398").s().p("AgcAmQgNgNAAgZQAAgWAMgPQAMgOATAAQATAAAKAMQAMANAAAUIAAAIIhEAAQAAASAJAJQAIAKAOAAQAQAAAQgHIAAAOIgPAFQgIABgKAAQgUAAgNgOgAgQgeQgIAIgBAOIAzAAQAAgPgHgIQgGgHgMAAQgKAAgHAIg");
	this.shape_6.setTransform(237.9,60.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EA4398").s().p("AgXAnQgMgOAAgZQAAgXAMgOQANgOAUAAQAIAAAHABQAHACAEACIgEANIgLgDIgLgCQgdAAAAAmQAAATAHAKQAIAKANAAQANAAANgGIAAAOQgKAFgQAAQgUAAgMgNg");
	this.shape_7.setTransform(228.2,60.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EA4398").s().p("AAaAzIAAhAQAAgMgFgGQgGgGgMAAQgOAAgIAIQgHAJAAAUIAAAzIgPAAIAAhjIAMAAIADANIAAAAQAGgHAIgEQAJgEAIAAQASAAAJAJQAKAIAAAUIAABAg");
	this.shape_8.setTransform(217.8,60.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EA4398").s().p("AgfAsQgJgHAAgPQAAgdAwgBIARgBIAAgGQAAgMgFgGQgFgFgMAAQgKAAgQAHIgFgLQAIgEAIgDQAKgCAGAAQATAAAIAIQAKAIgBASIAABDIgLAAIgDgOIgBAAQgIAJgHAEQgHADgKAAQgPAAgJgIgAAKABQgRABgIAFQgIAFAAAKQAAAJAFAEQAFAEAJAAQANAAAIgHQAIgIAAgPIAAgJg");
	this.shape_9.setTransform(206.3,60.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EA4398").s().p("AgcAzIAAhjIANAAIACASIAAAAQAGgKAHgFQAHgFAJAAIANABIgDAOIgLgBQgMAAgHAKQgJAKAAAPIAAA0g");
	this.shape_10.setTransform(198.5,60.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EA4398").s().p("AggAqQgJgJAAgTIAAhAIAQAAIAABAQAAAMAFAGQAGAGAMAAQAOAAAHgJQAIgIAAgUIAAgzIAPAAIAABjIgNAAIgCgNIgBAAQgEAHgJAEQgIAEgJAAQgTAAgJgJg");
	this.shape_11.setTransform(188.1,61);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EA4398").s().p("AgiAuIAAgPQAHAEAIACQAJACAHAAQAKAAAHgDQAGgEAAgIQABgGgGgEQgFgFgNgFQgOgEgGgEQgGgDgDgGQgCgFAAgGQAAgNAKgHQAKgHAPAAQARAAAPAGIgFANQgQgGgMAAQgJAAgFADQgGADAAAHQAAAEACACQACADAFADQAEADALAEQATAGAGAGQAHAGAAALQAAAOgLAHQgLAIgRAAQgUAAgLgGg");
	this.shape_12.setTransform(177.9,60.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EA4398").s().p("AAaAzIAAhAQAAgMgFgGQgGgGgMAAQgOAAgIAIQgHAJAAAUIAAAzIgPAAIAAhjIANAAIACANIAAAAQAGgHAIgEQAJgEAIAAQATAAAJAJQAJAIAAAUIAABAg");
	this.shape_13.setTransform(167.6,60.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EA4398").s().p("AgHBDIAAiFIAOAAIAACFg");
	this.shape_14.setTransform(159.1,59.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EA4398").s().p("AAaBIIAAhCQAAgKgFgHQgGgGgMAAQgOAAgIAJQgHAIAAATIAAA1IgPAAIAAiPIAPAAIAAAsIgBANIABAAQAFgHAJgEQAIgFAJAAQASAAAJAJQAKAJAAARIAABDg");
	this.shape_15.setTransform(145.8,58.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EA4398").s().p("AgOAgIAAg6IgOAAIAAgIIAOgHIAGgVIAIAAIAAAYIAdAAIAAAMIgdAAIAAA5QAAAJAEAFQAEAFAIAAIAIAAIAFgCIAAAMQgCABgEABIgJABQgcAAAAgfg");
	this.shape_16.setTransform(136.5,59.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EA4398").s().p("AgGBIIAAiPIANAAIAACPg");
	this.shape_17.setTransform(130.8,58.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EA4398").s().p("AgfAsQgIgHgBgPQABgdAvgBIARgBIAAgGQAAgMgFgGQgFgFgMAAQgKAAgQAHIgFgLQAIgEAIgDQAKgCAGAAQATAAAIAIQAJAIAAASIAABDIgLAAIgDgOIgBAAQgHAJgIAEQgIADgJAAQgPAAgJgIgAAKABQgRABgIAFQgIAFAAAKQAAAJAFAEQAFAEAJAAQAMAAAJgHQAIgIAAgPIAAgJg");
	this.shape_18.setTransform(122.8,60.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EA4398").s().p("AgcAmQgOgNAAgZQAAgWANgPQAMgOASAAQAUAAALAMQAKANABAUIAAAIIhFAAQABASAIAJQAKAKANAAQAQAAAQgHIAAAOIgPAFQgIABgJAAQgWAAgMgOgAgRgeQgHAIgBAOIAzAAQAAgPgHgIQgGgHgMAAQgKAAgIAIg");
	this.shape_19.setTransform(112.5,60.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EA4398").s().p("AAkBDIAAhAIhGAAIAABAIgQAAIAAiFIAQAAIAAA5IBGAAIAAg5IAPAAIAACFg");
	this.shape_20.setTransform(100.2,59.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EA4398").s().p("AgcAzIAAhjIANAAIACASIAAAAQAGgKAHgFQAHgFAJAAIANABIgDAOIgLgBQgMAAgHAKQgJAKAAAPIAAA0g");
	this.shape_21.setTransform(85,60.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EA4398").s().p("AggAqQgJgJAAgTIAAhAIAQAAIAABAQAAAMAFAGQAGAGAMAAQAOAAAHgJQAIgIAAgUIAAgzIAPAAIAABjIgNAAIgCgNIgBAAQgEAHgJAEQgIAEgJAAQgTAAgJgJg");
	this.shape_22.setTransform(74.6,61);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EA4398").s().p("AgXAuQgLgHgFgMQgGgMAAgPQAAgYAMgNQANgOAUAAQAVAAANAOQAMAOAAAXQAAAYgMAOQgNAOgVAAQgMAAgLgGgAgVgcQgIAKAAASQAAATAIAKQAHAKAOAAQAPAAAIgKQAHgKAAgTQAAgSgHgKQgIgKgPAAQgOAAgHAKg");
	this.shape_23.setTransform(63.1,60.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#EA4398").s().p("AgHBDIAAg0IgthRIASAAIAiBCIAkhCIARAAIguBRIAAA0g");
	this.shape_24.setTransform(53,59.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#EA4398").s().p("AAaBIIAAhCQABgKgHgHQgFgGgMAAQgOAAgHAJQgIAIAAATIAAA1IgPAAIAAiPIAPAAIAAAsIAAANIAAAAQAFgHAJgEQAIgFAJAAQASAAAKAJQAJAJAAARIAABDg");
	this.shape_25.setTransform(37,58.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#EA4398").s().p("AgOAgIAAg6IgPAAIAAgIIAPgHIAHgVIAHAAIAAAYIAdAAIAAAMIgdAAIAAA5QAAAJADAFQAFAFAIAAIAHAAIAGgCIAAAMQgCABgFABIgJABQgbAAAAgfg");
	this.shape_26.setTransform(27.7,59.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EA4398").s().p("AgGBFIAAhjIANAAIAABjgAgFgyQgDgDAAgFQAAgFADgDQACgCADAAQADAAADACQACADAAAFQAAAFgCADQgDACgDAAQgDAAgCgCg");
	this.shape_27.setTransform(22,59);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#EA4398").s().p("AAhBDIgbhZIgFgPIgBgLQgBAMgFAPIgbBYIgPAAIgkiFIAQAAIAWBRQAFASABAOQADgRAFgQIAYhQIAPAAIAaBRQAEAOADASQACgNAFgTIAVhRIARAAIglCFg");
	this.shape_28.setTransform(10.8,59.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#EA4398").s().p("AgrBKIAAiRIAMAAIACAOIABAAQAGgIAIgFQAIgDAIAAQAUAAALAOQALANAAAaQAAAXgLANQgLAOgUABQgIAAgIgFQgIgDgGgIIgBAAIABARIAAAqgAgVg0QgHAKAAASIAAAEQAAAUAHAIQAHAJAOAAQANAAAIgKQAHgJAAgSQAAgUgHgJQgIgLgNAAQgOAAgHAIg");
	this.shape_29.setTransform(340.5,41.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#EA4398").s().p("AgGBIIAAiPIANAAIAACPg");
	this.shape_30.setTransform(332,36.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#EA4398").s().p("AgcAmQgNgNAAgZQgBgWANgPQAMgOATAAQASAAAMAMQALANgBAUIAAAIIhEAAQABASAIAJQAJAKAOAAQAQAAARgHIAAAOIgQAFQgHABgLAAQgVAAgMgOgAgRgeQgGAIgCAOIAzAAQAAgPgGgIQgHgHgMAAQgKAAgIAIg");
	this.shape_31.setTransform(324.3,39.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#EA4398").s().p("AAjBDIAAhAIhFAAIAABAIgQAAIAAiFIAQAAIAAA5IBFAAIAAg5IAQAAIAACFg");
	this.shape_32.setTransform(312,37.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#EA4398").s().p("AgXAuQgLgHgFgMQgGgMAAgPQAAgYAMgNQANgOAUAAQAVAAANAOQAMAOAAAXQAAAYgMAOQgNAOgVAAQgMAAgLgGgAgVgcQgIAKAAASQAAATAIAKQAHAKAOAAQAPAAAIgKQAHgKAAgTQAAgSgHgKQgIgKgPAAQgOAAgHAKg");
	this.shape_33.setTransform(294.2,39.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EA4398").s().p("AgOAgIAAg7IgPAAIAAgHIAPgGIAHgWIAHAAIAAAYIAdAAIAAALIgdAAIAAA6QAAAJADAFQAFAFAIAAIAHAAIAGgBIAAALQgCACgFAAIgJABQgbAAAAgfg");
	this.shape_34.setTransform(285.1,38);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#EA4398").s().p("AgcAmQgOgNAAgZQAAgWANgPQAMgOASAAQAUAAALAMQALANAAAUIAAAIIhFAAQABASAIAJQAKAKANAAQAQAAARgHIAAAOIgQAFQgHABgKAAQgWAAgMgOgAgRgeQgGAIgCAOIAzAAQAAgPgHgIQgGgHgMAAQgKAAgIAIg");
	this.shape_35.setTransform(271.6,39.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#EA4398").s().p("AgcAzIAAhjIANAAIACASIAAAAQAGgKAHgFQAHgFAJAAIANABIgDAOIgLgBQgMAAgHAKQgJAKAAAPIAAA0g");
	this.shape_36.setTransform(263.4,39);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#EA4398").s().p("AgcAmQgOgNAAgZQAAgWANgPQAMgOASAAQAUAAALAMQALANAAAUIAAAIIhFAAQABASAIAJQAKAKANAAQAQAAARgHIAAAOIgQAFQgHABgKAAQgWAAgMgOgAgRgeQgGAIgCAOIAzAAQAAgPgHgIQgGgHgMAAQgKAAgIAIg");
	this.shape_37.setTransform(253.6,39.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#EA4398").s().p("AAkBDIAAhAIhGAAIAABAIgQAAIAAiFIAQAAIAAA5IBGAAIAAg5IAPAAIAACFg");
	this.shape_38.setTransform(241.2,37.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#EA4398").s().p("AgiAuIAAgPQAHAEAJACQAIACAHAAQAKAAAHgDQAGgEAAgIQAAgGgEgEQgGgFgNgFQgOgEgGgEQgGgDgDgGQgCgFAAgGQgBgNALgHQAKgHAPAAQAQAAARAGIgGANQgQgGgMAAQgJAAgGADQgFADAAAHQAAAEACACQACADAFADQAEADALAEQATAGAGAGQAGAGABALQAAAOgLAHQgLAIgRAAQgUAAgLgGg");
	this.shape_39.setTransform(224.8,39.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#EA4398").s().p("AgHBDIAAiFIAOAAIAACFg");
	this.shape_40.setTransform(217.6,37.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#EA4398").s().p("AAaBIIAAhCQAAgKgFgHQgGgGgMAAQgOAAgIAJQgHAIAAATIAAA1IgPAAIAAiPIAPAAIAAAsIgBANIABAAQAFgHAJgEQAIgFAJAAQASAAAJAJQAKAJAAARIAABDg");
	this.shape_41.setTransform(204.3,36.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#EA4398").s().p("AgOAgIAAg7IgOAAIAAgHIAOgGIAGgWIAIAAIAAAYIAdAAIAAALIgdAAIAAA6QAAAJAEAFQAEAFAIAAIAIAAIAFgBIAAALQgCACgEAAIgJABQgcAAAAgfg");
	this.shape_42.setTransform(195,38);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#EA4398").s().p("AgGBIIAAiPIANAAIAACPg");
	this.shape_43.setTransform(189.3,36.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#EA4398").s().p("AgfAsQgIgHgBgPQABgdAvgBIARgBIAAgGQAAgMgFgGQgFgFgMAAQgKAAgQAHIgFgLQAIgEAIgDQAKgCAGAAQATAAAIAIQAJAIAAASIAABDIgLAAIgDgOIgBAAQgHAJgIAEQgIADgJAAQgPAAgJgIgAAKABQgRABgIAFQgIAFAAAKQAAAJAFAEQAFAEAJAAQAMAAAJgHQAIgIAAgPIAAgJg");
	this.shape_44.setTransform(181.3,39.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#EA4398").s().p("AgcAmQgOgNAAgZQAAgWANgPQAMgOASAAQAUAAALAMQAKANABAUIAAAIIhEAAQAAASAIAJQAKAKANAAQAQAAAQgHIAAAOIgPAFQgIABgJAAQgWAAgMgOgAgRgeQgHAIgBAOIAzAAQAAgPgHgIQgGgHgMAAQgKAAgIAIg");
	this.shape_45.setTransform(171,39.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#EA4398").s().p("AAkBDIAAhAIhGAAIAABAIgQAAIAAiFIAQAAIAAA5IBGAAIAAg5IAPAAIAACFg");
	this.shape_46.setTransform(158.7,37.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#EA4398").s().p("AgcAmQgOgNAAgZQAAgWANgPQAMgOASAAQAUAAALAMQAKANABAUIAAAIIhFAAQABASAIAJQAKAKANAAQARAAAPgHIAAAOIgPAFQgHABgKAAQgWAAgMgOgAgRgeQgGAIgCAOIAzAAQAAgPgHgIQgGgHgMAAQgKAAgIAIg");
	this.shape_47.setTransform(146.4,39.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#EA4398").s().p("AgGAKQgEgEAAgGQAAgEADgEQADgDAEAAQAFAAADADQADAEAAAEQAAAGgDADQgDADgFAAQgDAAgDgCg");
	this.shape_48.setTransform(133.5,43.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#EA4398").s().p("AgkBDQgLgIABgNQgBgKAHgGQAGgHAKgCQgEgCgCgEQgDgEAAgFQAAgFADgCQADgFAHgEQgIgDgGgHQgEgIAAgKQgBgRALgJQAJgJATAAQAGAAAHACIAjAAIAAAJIgUADQAEADABAGQACAFAAAGQAAAPgKAJQgKAJgQAAIgIgBQgKAFAAAGQAAAEADADQADACAJAAIAQAAQARgBAIAIQAJAGAAAOQAAAQgNAKQgOAIgYAAQgUAAgLgHgAgaAfQgFAFAAAJQAAAJAGAEQAIAFANgBQARAAAJgFQAKgGAAgKQAAgIgGgDQgFgEgOAAIgQAAQgLAAgGAFgAgSg4QgFAGAAAMQAAAKAGAGQAGAFALAAQAUAAAAgWQAAgXgUAAQgLAAgHAGg");
	this.shape_49.setTransform(125.8,41.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#EA4398").s().p("AAbAzIAAhAQgBgMgGgGQgFgGgMAAQgOAAgIAIQgHAJAAAUIAAAzIgPAAIAAhjIAMAAIADANIABAAQAEgHAJgEQAIgEAJAAQATAAAIAJQAKAIAAAUIAABAg");
	this.shape_50.setTransform(114.9,39);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#EA4398").s().p("AgGBFIAAhjIANAAIAABjgAgFgyQgDgDAAgFQAAgFADgDQACgCADAAQADAAADACQACADAAAFQAAAFgCADQgDACgDAAQgDAAgCgCg");
	this.shape_51.setTransform(106.6,37.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#EA4398").s().p("AA5AzIAAhAQgBgMgFgGQgFgGgLAAQgPAAgGAIQgHAIAAARIAAA3IgNAAIAAhAQgBgMgFgGQgFgGgLAAQgOAAgHAJQgHAIAAAUIAAAzIgPAAIAAhjIANAAIACANIAAAAQAFgHAIgEQAIgEAKAAQAXAAAGARIAAAAQAFgIAJgFQAIgEAMAAQAQAAAKAJQAIAIAAAUIAABAg");
	this.shape_52.setTransform(95.5,39);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#EA4398").s().p("AgGBIIAAiPIANAAIAACPg");
	this.shape_53.setTransform(84.2,36.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#EA4398").s().p("AgcAmQgNgNAAgZQAAgWAMgPQAMgOATAAQASAAAMAMQALANgBAUIAAAIIhEAAQABASAIAJQAKAKANAAQARAAAQgHIAAAOIgQAFQgHABgLAAQgVAAgMgOgAgRgeQgGAIgCAOIAzAAQAAgPgGgIQgHgHgMAAQgKAAgIAIg");
	this.shape_54.setTransform(76.5,39.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#EA4398").s().p("AAbBIIAAhCQgBgKgGgHQgFgGgMAAQgOAAgIAJQgHAIAAATIAAA1IgPAAIAAiPIAPAAIAAAsIAAANIABAAQAEgHAIgEQAJgFAIAAQATAAAJAJQAKAJAAARIAABDg");
	this.shape_55.setTransform(65.4,36.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#EA4398").s().p("AAZAyIgTg5IgGgZIAAAAIgFAZIgUA5IgRAAIgchjIAQAAIAPA4QAFAUABAHIABAAIADgOIAEgNIATg4IAOAAIASA4QAGAQABALIABAAIACgLIAUhIIAPAAIgcBjg");
	this.shape_56.setTransform(52.1,39.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#EA4398").s().p("AgcAzIAAhjIANAAIACASIAAAAQAGgKAHgFQAHgFAJAAIANABIgDAOIgLgBQgMAAgHAKQgJAKAAAPIAAA0g");
	this.shape_57.setTransform(41.5,39);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#EA4398").s().p("AgcAmQgNgNAAgZQAAgWAMgPQAMgOATAAQASAAALAMQALANAAAUIAAAIIhDAAQAAASAJAJQAIAKAOAAQARAAAPgHIAAAOIgPAFQgIABgKAAQgUAAgNgOgAgQgeQgIAIgBAOIAzAAQAAgPgGgIQgHgHgMAAQgKAAgHAIg");
	this.shape_58.setTransform(31.7,39.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#EA4398").s().p("AgIAyIgmhjIAQAAIAWA6QAIAVAAAGIAAAAIAGgUIAZhBIAQAAIgnBjg");
	this.shape_59.setTransform(21.6,39.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#EA4398").s().p("AgtAzQgQgTAAggQAAggAQgSQARgTAcAAQAdABARASQAQATAAAfQAAAggQATQgRASgdABQgcAAgRgTgAgggoQgMAOAAAaQAAAbAMAPQAMAOAUgBQAWABALgOQAMgPAAgbQAAgagLgOQgLgOgXAAQgVAAgLAOg");
	this.shape_60.setTransform(9.4,37.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#EA4398").s().p("AgcAmQgOgNAAgZQAAgWANgPQAMgOASAAQAUAAAKAMQAMANAAAUIAAAIIhEAAQAAASAJAJQAIAKAOAAQAQAAAQgHIAAAOIgPAFQgIABgKAAQgUAAgNgOgAgQgeQgIAIgBAOIAzAAQAAgPgHgIQgGgHgMAAQgKAAgHAIg");
	this.shape_61.setTransform(210.4,17.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#EA4398").s().p("AguBDIAAiFIAnAAQAZAAAMAIQAMAIAAARQAAAMgHAIQgGAIgOACIAAABQAgADAAAcQAAASgNAKQgMAKgWAAgAgeA2IAcAAQAPAAAJgHQAHgGABgNQgBgNgHgGQgJgGgQAAIgbAAgAgegIIAbAAQAOAAAIgGQAHgFAAgMQAAgMgJgFQgHgFgQAAIgYAAg");
	this.shape_62.setTransform(199.3,15.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#EA4398").s().p("AAaAzIAAhAQAAgMgFgGQgGgGgMAAQgOAAgIAIQgHAJAAAUIAAAzIgPAAIAAhjIAMAAIADANIAAAAQAGgHAIgEQAJgEAIAAQATAAAIAJQAKAIAAAUIAABAg");
	this.shape_63.setTransform(182.1,17.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#EA4398").s().p("AgfAsQgJgHABgPQgBgdAwgBIARgBIAAgGQAAgMgFgGQgFgFgLAAQgLAAgQAHIgFgLQAHgEAJgDQAJgCAHAAQASAAAJAIQAKAIgBASIAABDIgLAAIgDgOIgBAAQgIAJgHAEQgHADgKAAQgPAAgJgIgAAKABQgRABgIAFQgIAFAAAKQAAAJAFAEQAFAEAJAAQANAAAHgHQAJgIAAgPIAAgJg");
	this.shape_64.setTransform(170.6,17.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#EA4398").s().p("AghAzQgRgSAAghQAAgUAIgPQAIgQAPgJQAPgIASAAQAVAAAQAHIgHAOQgPgHgQAAQgUAAgNAPQgNAPAAAYQAAAaANAPQAMAOAVAAQAOAAATgFIAAAOQgOAFgVAAQgcAAgQgSg");
	this.shape_65.setTransform(160,15.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#EA4398").s().p("AggA7QgLgOAAgZQAAgXALgOQALgOAUAAQATAAALAPIABAAIgBgHIAAgHIAAgqIAPAAIAACPIgMAAIgCgOIgBAAQgLAQgTAAQgUAAgLgOgAgUgHQgHAIAAATQAAAUAHAKQAHAKANAAQAPAAAHgJQAHgIAAgUIAAgDQAAgUgHgJQgHgJgPAAQgNAAgHALg");
	this.shape_66.setTransform(142.7,15.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#EA4398").s().p("AgGBIIAAiPIANAAIAACPg");
	this.shape_67.setTransform(134.8,15.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#EA4398").s().p("AgGBFIAAhjIANAAIAABjgAgFgyQgDgDABgFQgBgFADgDQADgCACAAQADAAADACQACADABAFQgBAFgCADQgDACgDAAQgCAAgDgCg");
	this.shape_68.setTransform(130,15.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#EA4398").s().p("AAbBIIAAhCQAAgKgHgHQgFgGgMAAQgOAAgHAJQgIAIAAATIAAA1IgPAAIAAiPIAPAAIAAAsIAAANIABAAQAEgHAIgEQAJgFAIAAQATAAAKAJQAJAJAAARIAABDg");
	this.shape_69.setTransform(121.9,15.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#EA4398").s().p("AghAzQgRgSAAghQAAgUAIgPQAIgQAPgJQAPgIASAAQAVAAAQAHIgHAOQgPgHgQAAQgUAAgNAPQgNAPAAAYQAAAaANAPQAMAOAVAAQAOAAATgFIAAAOQgOAFgVAAQgcAAgQgSg");
	this.shape_70.setTransform(110.3,15.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#EA4398").s().p("AArBEIgRgrIg0AAIgQArIgQAAIA1iGIALAAIA1CGgAgEgeIgQAoIAqAAIgQgoIgGgTIgEATg");
	this.shape_71.setTransform(93.1,15.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#EA4398").s().p("AgkBDQgKgIgBgNQAAgJAHgHQAFgHAMgCQgEgCgDgEQgDgDAAgGQAAgFADgDQADgDAGgFQgIgCgEgJQgGgHABgKQgBgRAKgJQAKgJATAAQAGAAAHACIAjAAIAAAKIgTACQACADACAGQACAEAAAHQABAPgLAJQgKAJgQAAIgJgBQgJAGAAAFQAAAFADACQAEABAIAAIAQAAQARAAAJAIQAIAGAAANQAAARgOAKQgNAIgYAAQgUAAgLgHgAgaAfQgFAFAAAKQgBAIAIAEQAGAFAOAAQARgBAJgFQAJgGAAgKQABgJgGgCQgFgEgOAAIgRAAQgKAAgGAFgAgSg4QgFAGAAALQAAALAGAGQAGAFAKAAQAVAAAAgWQAAgXgVAAQgKAAgHAGg");
	this.shape_72.setTransform(76.9,19.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#EA4398").s().p("AAbAzIAAhAQAAgMgHgGQgFgGgMAAQgOAAgHAIQgIAJAAAUIAAAzIgPAAIAAhjIANAAIACANIABAAQAEgHAJgEQAJgEAIAAQASAAAKAJQAJAIAAAUIAABAg");
	this.shape_73.setTransform(66.1,17.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#EA4398").s().p("AgGBFIAAhjIANAAIAABjgAgFgyQgCgDAAgFQAAgFACgDQADgCACAAQAEAAACACQADADAAAFQAAAFgDADQgCACgEAAQgCAAgDgCg");
	this.shape_74.setTransform(57.8,15.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#EA4398").s().p("AgOAgIAAg7IgOAAIAAgHIAOgGIAGgWIAIAAIAAAXIAdAAIAAAMIgdAAIAAA6QAAAKAEAEQAEAFAHAAIAJgBIAGAAIAAALQgDACgEAAIgJABQgcAAAAgfg");
	this.shape_75.setTransform(52,16.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#EA4398").s().p("AgrBKIAAiRIAMAAIACAOIABAAQAGgJAIgDQAIgEAIAAQAUAAALAOQALANAAAZQAAAXgLAOQgLAOgUABQgIAAgIgEQgIgEgGgIIgBAAIABARIAAAqgAgVgzQgHAIAAATIAAADQAAAVAHAJQAHAIAOABQANAAAIgLQAHgJAAgTQAAgSgHgKQgIgLgNAAQgOAAgHAJg");
	this.shape_76.setTransform(43.2,19.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#EA4398").s().p("AgXAuQgLgHgFgMQgGgMAAgPQAAgYAMgNQANgOAUAAQAVAAANAOQAMAOAAAXQAAAYgMAOQgNAOgVAAQgMAAgLgGgAgVgcQgIAKAAASQAAATAIAKQAHAKAOAAQAPAAAIgKQAHgKAAgTQAAgSgHgKQgIgKgPAAQgOAAgHAKg");
	this.shape_77.setTransform(31.3,17.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#EA4398").s().p("AggA7QgLgOAAgZQAAgXALgOQALgOAUAAQATAAALAPIABAAIgBgHIAAgHIAAgqIAPAAIAACPIgMAAIgCgOIgBAAQgLAQgTAAQgUAAgLgOgAgUgHQgHAIAAATQAAAUAHAKQAHAKANAAQAPAAAHgJQAHgIAAgUIAAgDQAAgUgHgJQgHgJgPAAQgNAAgHALg");
	this.shape_78.setTransform(19.5,15.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#EA4398").s().p("AAsBEIgRgrIg1AAIgRArIgQAAIA2iGIAMAAIA1CGgAgFgeIgQAoIAqAAIgPgoIgGgTIgFATg");
	this.shape_79.setTransform(8,15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,354,73.6);


(lib.pink = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EA4398").s().p("AgxHCIAAuDIBiAAIAAODg");
	this.shape.setTransform(5,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,10,90);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,102,23);


(lib.cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAVAqIgQgwIgFgVIAAAAIgEAVIgRAwIgPAAIgXhTIAOAAIAMAvQAFARAAAGIABAAIADgMIADgLIAQgvIAMAAIAPAvIAGAWIABAAIABgIIARg9IANAAIgYBTg");
	this.shape.setTransform(86.6,16.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTAmQgJgFgFgKQgFgKAAgNQAAgUALgLQAKgMARAAQASAAAKAMQALAMAAATQAAAUgLAMQgKAMgSAAQgKAAgJgGgAgSgYQgGAJAAAPQAAAQAGAIQAHAJALAAQAMAAAHgJQAGgIAAgQQAAgPgGgIQgHgJgMAAQgLAAgHAIg");
	this.shape_1.setTransform(75.9,16.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAdA4Ig8hdIgBAAIABAeIAAA/IgMAAIAAhvIAPAAIA8BdIABAAIgBgOIAAgQIAAg/IAMAAIAABvg");
	this.shape_2.setTransform(65,14.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AglA8IAAgKIAJABQANgBAGgPIAFgLIgjhVIAOAAIATAxQAGAPAAAHIAAAAIAFgLIAVg8IAOAAIglBgQgEAPgHAFQgHAHgLgBQgGAAgFgBg");
	this.shape_3.setTransform(50.8,18.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgFA8IAAh3IALAAIAAB3g");
	this.shape_4.setTransform(44.8,14.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgkA+IAAh6IAKAAIACAMIABAAQAEgHAIgDQAGgDAHAAQAQAAAKALQAJAMAAAVQAAATgJAMQgKALgQAAQgHAAgGgDQgIgDgEgGIgBAAIABAOIAAAjgAgSgrQgFAHAAAQIAAADQAAARAFAHQAHAHALAAQALAAAGgJQAHgHgBgPQABgQgHgJQgGgIgLAAQgLAAgHAHg");
	this.shape_5.setTransform(38.1,18);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgkA+IAAh6IAKAAIACAMIABAAQAEgHAIgDQAGgDAHAAQAQAAAKALQAJAMAAAVQAAATgJAMQgKALgQAAQgHAAgGgDQgIgDgEgGIgBAAIABAOIAAAjgAgSgrQgFAHAAAQIAAADQAAARAFAHQAHAHALAAQALAAAGgJQAHgHgBgPQABgQgHgJQgGgIgLAAQgMAAgGAHg");
	this.shape_6.setTransform(28.3,18);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAkA5IgOglIgsAAIgOAlIgNAAIAthxIAJAAIAtBxgAgEgZIgNAhIAjAAIgNghIgFgQIgEAQg");
	this.shape_7.setTransform(18.1,14.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAdA4Ig8heIgBAAIABAgIAAA+IgMAAIAAhwIAPAAIA8BeIABAAIgBgOIAAgQIAAhAIAMAAIAABwg");
	this.shape_8.setTransform(65,12.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AglA8IAAgLIAJACQANAAAGgPIAFgMIgjhVIAOAAIATAxQAGAPAAAHIAAAAIAFgLIAVg8IAOAAIglBgQgEAPgHAFQgHAHgLAAQgGgBgFgBg");
	this.shape_9.setTransform(50.8,16.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AglA8IAAgKIAJAAQANAAAGgPIAFgMIgjhUIAOAAIATAxQAGAPAAAIIAAAAIAFgMIAVg8IAOAAIglBgQgEAOgHAHQgHAFgLAAQgGABgFgCg");
	this.shape_10.setTransform(50.8,20.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7,p:{y:14.7}},{t:this.shape_6,p:{y:18}},{t:this.shape_5,p:{y:18}},{t:this.shape_4,p:{y:14.4}},{t:this.shape_3},{t:this.shape_2,p:{y:14.8}},{t:this.shape_1,p:{y:16.2}},{t:this.shape,p:{y:16.2}}]}).to({state:[{t:this.shape_7,p:{y:12.7}},{t:this.shape_6,p:{y:16}},{t:this.shape_5,p:{y:16}},{t:this.shape_4,p:{y:12.4}},{t:this.shape_9},{t:this.shape_8},{t:this.shape_1,p:{y:14.2}},{t:this.shape,p:{y:14.2}}]},1).to({state:[{t:this.shape_7,p:{y:16.7}},{t:this.shape_6,p:{y:20}},{t:this.shape_5,p:{y:20}},{t:this.shape_4,p:{y:16.4}},{t:this.shape_10},{t:this.shape_2,p:{y:16.8}},{t:this.shape_1,p:{y:18.2}},{t:this.shape,p:{y:18.2}}]},1).to({state:[]},1).wait(1));

	// Layer 1
	this.instance = new lib.btn();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:-2},0).wait(1).to({y:2},0).wait(1).to({scaleX:7.28,scaleY:3,x:-614.9,y:-49},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,30);


(lib.bg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,210,90);


(lib.arr_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.arr();
	this.instance.setTransform(-9,19,1,1,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9,-1,18,20);


// stage content:
(lib._728x90_Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* import flash.events.MouseEvent;
		import flash.net.URLRequest;
		
		
		//clickTag_mc.buttonMode = true;
		clickTag_mc.addEventListener(
		   MouseEvent.CLICK,
		   function(event: MouseEvent) : void {
		     flash.net.navigateToURL(new URLRequest( root.loaderInfo.parameters.clickTAG), "_blank");
		     }
		   );*/
	}
	this.frame_80 = function() {
		/* stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(80).call(this.frame_80).wait(1));

	// cta_clicktag
	this.clickTag_mc = new lib.cta();
	this.clickTag_mc.setTransform(615,49);
	this.clickTag_mc.alpha = 0;
	new cjs.ButtonHelper(this.clickTag_mc, 0, 1, 2, false, new lib.cta(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickTag_mc).wait(69).to({alpha:1},6).wait(6));

	// logo
	this.instance = new lib.logo_1();
	this.instance.setTransform(364,44.5,1,1,0,0,0,51,11.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).wait(15).to({x:-62,alpha:0},10,cjs.Ease.get(1)).to({_off:true},1).wait(34).to({_off:false,x:666,y:24.5},0).to({alpha:1},6).wait(6));

	// pink
	this.instance_1 = new lib.pink();
	this.instance_1.setTransform(364,45,72.8,1,0,0,0,5,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({scaleX:11.9},10,cjs.Ease.get(1)).to({scaleX:12.4},5,cjs.Ease.get(1)).to({scaleX:1,x:5},10,cjs.Ease.get(1)).wait(47));

	// bg image
	this.instance_2 = new lib.bg_1();
	this.instance_2.setTransform(-75,32,1,1,0,0,0,125,32);
	this.instance_2._off = true;
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 246, 219, 0)];
	this.instance_2.cache(-2,-2,214,94);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(34).to({_off:false},0).to({x:140},8,cjs.Ease.get(1)).to({x:135},4,cjs.Ease.get(1)).wait(35));

	// text
	this.instance_3 = new lib.text();
	this.instance_3.setTransform(374,43.5,1,1,0,0,0,143,37.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(59).to({_off:false},0).to({y:44.5,alpha:1},5).wait(17));

	// text bg
	this.instance_4 = new lib.text_bg();
	this.instance_4.setTransform(7.1,45,1,1,0,0,0,168,45);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(46).to({_off:false},0).to({x:393},8,cjs.Ease.get(1)).to({x:388},5,cjs.Ease.get(1)).wait(22));

	// arr
	this.instance_5 = new lib.arr_1();
	this.instance_5.setTransform(591,45,1,1,0,0,0,0,9);
	this.instance_5._off = true;
	this.instance_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 246, 219, 0)];
	this.instance_5.cache(-11,-3,22,24);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(64).to({_off:false},0).to({x:601},5).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(364,45,728,90);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;