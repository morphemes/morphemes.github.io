(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 336,
	height: 280,
	fps: 20,
	color: "#0099D6",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/336x280_Canvas_atlas_.png", id:"336x280_Canvas_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"336x280_Canvas_atlas_", frames: [[222,122,20,18],[0,0,336,120],[0,122,116,30],[118,122,102,23]]}
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
	this.spriteSheet = ss["336x280_Canvas_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg = function() {
	this.spriteSheet = ss["336x280_Canvas_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.btn = function() {
	this.spriteSheet = ss["336x280_Canvas_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.spriteSheet = ss["336x280_Canvas_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.text_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8CC63E").s().p("A6PHCIAAuDMA0eAAAIAAODg");
	this.shape.setTransform(168,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,336,90);


(lib.text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGAJQgEgCAAgHQAAgFADgDQADgDAEAAQAFAAADADQADADAAAFQAAAGgDADQgDADgFAAQgDAAgDgDg");
	this.shape.setTransform(196.5,65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgtBHIAAgMQAFABAHAAQAQAAAGgSIAGgOIgphkIAQAAIAXA6QAHARAAAKIABAAIAFgOIAZhHIAQAAIgrByQgFARgJAHQgIAHgNAAIgOgCg");
	this.shape_1.setTransform(189.9,63.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGBIIAAiPIANAAIAACPg");
	this.shape_2.setTransform(182.8,58.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgGBFIAAhjIANAAIAABjgAgFgyQgCgDgBgFQABgFACgDQACgCADAAQAEAAACACQADADgBAFQABAFgDADQgCACgEAAQgDAAgCgCg");
	this.shape_3.setTransform(178,59);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgjAuIAAgPQAIAEAJACQAHACAJAAQAKAAAGgDQAHgEgBgIQAAgGgEgEQgFgFgNgFQgPgEgGgEQgGgDgDgGQgDgFAAgGQAAgNAKgHQAKgHAQAAQARAAAQAGIgGANQgPgGgNAAQgJAAgGADQgFADAAAHQAAAEACACQACADAFADQAFADALAEQARAGAHAGQAGAGAAALQAAAOgKAHQgKAIgSAAQgUAAgMgGg");
	this.shape_4.setTransform(171.1,60.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgfAsQgIgHgBgPQABgdAvgBIARgBIAAgGQAAgMgFgGQgFgFgMAAQgKAAgQAHIgFgLQAIgEAIgDQAKgCAGAAQATAAAIAIQAJAIAAASIAABDIgLAAIgDgOIgBAAQgHAJgIAEQgHADgKAAQgPAAgJgIgAAKABQgRABgIAFQgIAFAAAKQAAAJAFAEQAFAEAJAAQAMAAAJgHQAIgIAAgPIAAgJg");
	this.shape_5.setTransform(160.9,60.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AglBDIAAiFIBLAAIAAAOIg6AAIAAArIA1AAIAAAMIg1AAIAAAyIA6AAIAAAOg");
	this.shape_6.setTransform(151.1,59.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgtBHIAAgMQAFABAHAAQAQAAAGgSIAGgOIgphkIAQAAIAXA6QAHARAAAKIABAAIAFgOIAZhHIAQAAIgrByQgFARgJAHQgIAHgNAAIgOgCg");
	this.shape_7.setTransform(135.7,63.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AggAqQgJgJAAgTIAAhAIAQAAIAABAQAAAMAFAGQAGAGAMAAQAOAAAHgJQAIgIAAgUIAAgzIAPAAIAABjIgNAAIgCgNIgBAAQgEAHgJAEQgIAEgJAAQgTAAgJgJg");
	this.shape_8.setTransform(125.1,61);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AguBDIAAiFIAnAAQAZAAAMAIQAMAIAAARQAAAMgGAIQgIAIgNACIAAABQAgADAAAcQgBASgLAKQgNAKgWAAgAgeA2IAcAAQAPAAAIgHQAJgGgBgNQABgNgJgGQgIgGgQAAIgbAAgAgegIIAaAAQAPAAAIgGQAHgFAAgMQAAgMgIgFQgJgFgPAAIgYAAg");
	this.shape_9.setTransform(113.6,59.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgzA7QgLgJAAgSQgBgLAHgKQAGgJARgIQgIgJgCgEQgDgEgCgGQgCgFAAgFQAAgOAJgHQAKgJAQABQAOgBAIAJQAIAHAAAOQAAAKgGAIQgGAJgOAIIAlAiQAFgFADgIQADgHACgKIAQAAQgHAbgMANIAcAbIgWAAIgRgQQgLAKgMAEQgJAFgOAAQgTAAgLgLgAgmAMQgEAFgCAEQgCAFgBAGQABALAGAGQAIAGAMAAQAUAAAPgOIgmgnQgLAGgEAEgAgegzQgEAFAAAHQAAAHACAFQAEAGAIAIQAMgHAFgGQADgFAAgJQAAgGgDgFQgFgFgIAAQgIAAgGAFg");
	this.shape_10.setTransform(95.7,59.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgcAmQgOgNAAgZQAAgWANgPQAMgOASAAQAUAAALAMQAKANABAUIAAAIIhFAAQABASAIAJQAKAKANAAQARAAAPgHIAAAOIgPAFQgHABgKAAQgWAAgMgOgAgRgeQgGAIgCAOIAzAAQAAgPgHgIQgGgHgMAAQgKAAgIAIg");
	this.shape_11.setTransform(78,60.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgcAzIAAhjIANAAIACASIAAAAQAGgKAHgFQAHgFAJAAIANABIgDAOIgLgBQgMAAgHAKQgJAKAAAPIAAA0g");
	this.shape_12.setTransform(69.8,60.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgfAsQgIgHgBgPQABgdAvgBIARgBIAAgGQAAgMgFgGQgFgFgMAAQgKAAgQAHIgFgLQAIgEAIgDQAKgCAGAAQATAAAIAIQAJAIAAASIAABDIgLAAIgDgOIgBAAQgHAJgIAEQgHADgKAAQgPAAgJgIgAAKABQgRABgIAFQgIAFAAAKQAAAJAFAEQAFAEAJAAQAMAAAJgHQAIgIAAgPIAAgJg");
	this.shape_13.setTransform(59.7,60.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgrBKIAAiRIAMAAIACAOIABAAQAGgIAIgFQAIgDAIAAQAUAAALAOQALAOAAAZQAAAXgLANQgLAPgUAAQgIgBgIgEQgIgDgGgHIgBAAIABARIAAApgAgVg0QgHAJAAATIAAAEQAAAUAHAIQAHAKAOgBQANAAAIgKQAHgJAAgSQAAgUgHgKQgIgKgNAAQgOAAgHAIg");
	this.shape_14.setTransform(49.2,63.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AA4AzIAAhAQAAgMgFgGQgFgGgLAAQgPAAgGAIQgHAIAAARIAAA3IgNAAIAAhAQAAgMgGgGQgFgGgLAAQgPAAgGAJQgHAIAAAUIAAAzIgPAAIAAhjIANAAIACANIAAAAQAFgHAIgEQAIgEAKAAQAXAAAGARIAAAAQAFgIAJgFQAIgEAMAAQAQAAAKAJQAIAIAAAUIAABAg");
	this.shape_15.setTransform(34.4,60.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgXAuQgLgHgFgMQgGgMAAgPQAAgYAMgNQANgOAUAAQAVAAANAOQAMAOAAAXQAAAYgMAOQgNAOgVAAQgMAAgLgGgAgVgcQgIAKAAASQAAATAIAKQAHAKAOAAQAPAAAIgKQAHgKAAgTQAAgSgHgKQgIgKgPAAQgOAAgHAKg");
	this.shape_16.setTransform(19.7,60.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AghAzQgRgSAAghQAAgUAIgPQAIgQAPgJQAPgIASAAQAVAAAQAHIgHAOQgPgHgQAAQgUAAgNAPQgNAPAAAYQAAAaANAPQAMAOAVAAQAOAAATgFIAAAOQgOAFgVAAQgcAAgQgSg");
	this.shape_17.setTransform(8.3,59.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgGAKQgEgEAAgGQAAgEADgEQADgDAEAAQAFAAADADQADAEAAAEQAAAGgDADQgDADgFAAQgDAAgDgCg");
	this.shape_18.setTransform(223.6,43.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgiAuIAAgPQAHAEAIACQAJACAHAAQAKAAAHgDQAGgEAAgIQABgGgGgEQgFgFgNgFQgOgEgGgEQgGgDgCgGQgDgFAAgGQAAgNAKgHQAKgHAPAAQARAAAPAGIgFANQgQgGgMAAQgJAAgFADQgGADAAAHQAAAEACACQACADAFADQAEADALAEQATAGAGAGQAHAGAAALQAAAOgLAHQgLAIgRAAQgUAAgLgGg");
	this.shape_19.setTransform(216.6,39.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgcAzIAAhjIANAAIACASIAAAAQAGgKAHgFQAHgFAJAAIANABIgDAOIgLgBQgMAAgHAKQgJAKAAAPIAAA0g");
	this.shape_20.setTransform(208.8,39);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgeAsQgJgHAAgPQAAgdAvgBIARgBIAAgGQAAgMgFgGQgFgFgLAAQgLAAgQAHIgFgLQAHgEAKgDQAIgCAIAAQARAAAKAIQAIAIABASIAABDIgMAAIgDgOIgBAAQgIAJgHAEQgIADgJAAQgPAAgIgIgAAJABQgQABgIAFQgIAFAAAKQAAAJAFAEQAFAEAJAAQANAAAHgHQAJgIAAgPIAAgJg");
	this.shape_21.setTransform(198.7,39.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgcAmQgNgNAAgZQAAgWAMgPQAMgOATAAQASAAAMAMQALANgBAUIAAAIIhEAAQABASAIAJQAJAKAOAAQAQAAARgHIAAAOIgQAFQgHABgKAAQgWAAgMgOgAgRgeQgGAIgCAOIAzAAQAAgPgGgIQgHgHgMAAQgKAAgIAIg");
	this.shape_22.setTransform(188.4,39.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgHBDIAAg0IgthRIASAAIAiBCIAkhCIARAAIguBRIAAA0g");
	this.shape_23.setTransform(178.7,37.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgpA9IAAgPQAGAEAKADQAJACAKAAQAPAAAIgIQAKgIgBgOQABgbgiAAQgIAAgPACIgIgEIAFg/IBCAAIAAAOIg0AAIgEApQALgDAKAAQAUAAAMALQAMAJAAASQAAAVgNAMQgNAMgWAAQgXAAgMgHg");
	this.shape_24.setTransform(163.1,37.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAJBDIAAheIABgXIgFAEIgUASIgIgLIAigbIANAAIAACFg");
	this.shape_25.setTransform(151,37.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgcAzIAAhjIANAAIACASIAAAAQAGgKAHgFQAHgFAJAAIANABIgDAOIgLgBQgMAAgHAKQgJAKAAAPIAAA0g");
	this.shape_26.setTransform(138.7,39);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgcAmQgOgNAAgZQAAgWANgPQAMgOASAAQAUAAALAMQAKANABAUIAAAIIhFAAQABASAIAJQAKAKANAAQARAAAPgHIAAAOIgPAFQgHABgKAAQgWAAgMgOgAgRgeQgGAIgCAOIAzAAQAAgPgHgIQgGgHgMAAQgKAAgIAIg");
	this.shape_27.setTransform(128.8,39.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgHAyIgnhjIAQAAIAXA6QAHAVAAAGIAAAAIAHgUIAXhBIARAAIgmBjg");
	this.shape_28.setTransform(118.7,39.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgsAzQgRgTAAggQAAggARgSQAQgTAcAAQAdABARASQAQATAAAfQAAAggQATQgRASgdABQgcAAgQgTgAghgoQgLAOAAAaQAAAbALAPQAMAOAVgBQAWABAMgOQALgPAAgbQAAgagLgOQgMgOgWAAQgUAAgNAOg");
	this.shape_29.setTransform(106.6,37.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgcAzIAAhjIANAAIACASIAAAAQAGgKAHgFQAHgFAJAAIANABIgDAOIgLgBQgMAAgHAKQgJAKAAAPIAAA0g");
	this.shape_30.setTransform(91,39);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgXAuQgLgHgFgMQgGgMAAgPQAAgYAMgNQANgOAUAAQAVAAANAOQAMAOAAAXQAAAYgMAOQgNAOgVAAQgMAAgLgGgAgVgcQgIAKAAASQAAATAIAKQAHAKAOAAQAPAAAIgKQAHgKAAgTQAAgSgHgKQgIgKgPAAQgOAAgHAKg");
	this.shape_31.setTransform(80.7,39.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AglBDIAAiFIBKAAIAAAOIg5AAIAAAxIA2AAIAAAMIg2AAIAAA6g");
	this.shape_32.setTransform(70.9,37.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgcAmQgNgNAAgZQAAgWAMgPQAMgOATAAQASAAALAMQALANAAAUIAAAIIhDAAQAAASAJAJQAIAKAOAAQARAAAQgHIAAAOIgQAFQgIABgKAAQgUAAgNgOgAgQgeQgIAIgBAOIAzAAQAAgPgGgIQgHgHgMAAQgKAAgHAIg");
	this.shape_33.setTransform(55,39.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAbAzIAAhAQAAgMgHgGQgFgGgMAAQgOAAgHAIQgIAJAAAUIAAAzIgPAAIAAhjIAMAAIADANIABAAQAEgHAJgEQAIgEAJAAQATAAAIAJQAKAIAAAUIAABAg");
	this.shape_34.setTransform(43.9,39);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgGBFIAAhjIANAAIAABjgAgFgyQgCgDAAgFQAAgFACgDQADgCACAAQAEAAACACQADADAAAFQAAAFgDADQgCACgEAAQgCAAgDgCg");
	this.shape_35.setTransform(35.6,37.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgGBIIAAiPIANAAIAACPg");
	this.shape_36.setTransform(30.8,36.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAaAzIAAhAQAAgMgFgGQgGgGgMAAQgOAAgIAIQgHAJAAAUIAAAzIgPAAIAAhjIANAAIACANIAAAAQAGgHAIgEQAJgEAIAAQATAAAJAJQAJAIAAAUIAABAg");
	this.shape_37.setTransform(22.7,39);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgtAzQgQgTAAggQAAggAQgSQARgTAcAAQAdABARASQAQATAAAfQAAAggQATQgRASgdABQgcAAgRgTgAgggoQgMAOAAAaQAAAbAMAPQAMAOAUgBQAWABALgOQAMgPAAgbQAAgagLgOQgLgOgXAAQgVAAgLAOg");
	this.shape_38.setTransform(9.4,37.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgcAmQgOgNAAgZQAAgWANgPQAMgOASAAQAUAAALAMQAKANABAUIAAAIIhFAAQABASAIAJQAKAKANAAQARAAAPgHIAAAOIgPAFQgHABgKAAQgWAAgMgOgAgRgeQgGAIgCAOIAzAAQAAgPgHgIQgGgHgMAAQgKAAgIAIg");
	this.shape_39.setTransform(288.1,17.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgXAnQgMgOAAgZQAAgXAMgOQANgOAUAAQAIAAAHABQAHACAEACIgEANIgLgDIgLgCQgdAAAAAmQAAATAHAKQAIAKANAAQANAAANgGIAAAOQgKAFgQAAQgUAAgMgNg");
	this.shape_40.setTransform(278.4,17.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAbAzIAAhAQAAgMgHgGQgFgGgMAAQgOAAgHAIQgIAJAAAUIAAAzIgPAAIAAhjIAMAAIADANIABAAQAEgHAJgEQAIgEAJAAQATAAAIAJQAKAIAAAUIAABAg");
	this.shape_41.setTransform(268,17.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgfAsQgIgHgBgPQABgdAvgBIARgBIAAgGQAAgMgFgGQgFgFgMAAQgKAAgQAHIgFgLQAIgEAJgDQAIgCAIAAQARAAAKAIQAIAIABASIAABDIgMAAIgDgOIgBAAQgHAJgIAEQgIADgJAAQgPAAgJgIgAAJABQgQABgIAFQgIAFAAAKQAAAJAFAEQAFAEAJAAQAMAAAJgHQAIgIAAgPIAAgJg");
	this.shape_42.setTransform(256.5,17.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgcAzIAAhjIANAAIACASIAAAAQAGgKAHgFQAHgFAJAAIANABIgDAOIgLgBQgMAAgHAKQgJAKAAAPIAAA0g");
	this.shape_43.setTransform(248.8,17.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AggAqQgJgJAAgTIAAhAIAQAAIAABAQAAAMAFAGQAGAGAMAAQAOAAAHgJQAIgIAAgUIAAgzIAPAAIAABjIgNAAIgCgNIgBAAQgEAHgJAEQgIAEgJAAQgTAAgJgJg");
	this.shape_44.setTransform(238.4,17.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgiAuIAAgPQAHAEAJACQAHACAJAAQAJAAAHgDQAHgEgBgIQAAgGgEgEQgGgFgMgFQgPgEgGgEQgGgDgDgGQgCgFAAgGQgBgNAKgHQAKgHAQAAQARAAAQAGIgGANQgQgGgMAAQgJAAgGADQgFADAAAHQAAAEACACQACADAFADQAEADAMAEQARAGAHAGQAGAGAAALQABAOgLAHQgKAIgSAAQgUAAgLgGg");
	this.shape_45.setTransform(228.2,17.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAbAzIAAhAQgBgMgFgGQgGgGgMAAQgOAAgIAIQgHAJAAAUIAAAzIgPAAIAAhjIAMAAIADANIABAAQAEgHAJgEQAIgEAJAAQATAAAIAJQAKAIAAAUIAABAg");
	this.shape_46.setTransform(217.9,17.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgGBDIAAiFIANAAIAACFg");
	this.shape_47.setTransform(209.3,15.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAbBIIAAhCQAAgKgHgHQgFgGgMAAQgOAAgHAJQgIAIAAATIAAA1IgPAAIAAiPIAPAAIAAAsIAAANIABAAQAEgHAIgEQAJgFAIAAQATAAAJAJQAKAJAAARIAABDg");
	this.shape_48.setTransform(196,15.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgOAgIAAg7IgPAAIAAgHIAPgGIAGgWIAIAAIAAAXIAdAAIAAAMIgdAAIAAA6QAAAKAEAEQAEAFAHAAIAIgBIAHAAIAAALQgDACgEAAIgKABQgbAAAAgfg");
	this.shape_49.setTransform(186.7,16.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgGBIIAAiPIANAAIAACPg");
	this.shape_50.setTransform(181,15.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgeAsQgJgHAAgPQAAgdAvgBIARgBIAAgGQAAgMgFgGQgFgFgLAAQgLAAgQAHIgFgLQAHgEAKgDQAIgCAIAAQARAAAKAIQAIAIABASIAABDIgMAAIgDgOIgBAAQgIAJgHAEQgIADgJAAQgPAAgIgIgAAJABQgQABgIAFQgIAFAAAKQAAAJAFAEQAFAEAJAAQANAAAHgHQAJgIAAgPIAAgJg");
	this.shape_51.setTransform(173,17.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgcAmQgNgNAAgZQAAgWAMgPQAMgOATAAQASAAAMAMQALANgBAUIAAAIIhEAAQABASAIAJQAJAKAOAAQAQAAARgHIAAAOIgQAFQgHABgLAAQgVAAgMgOgAgRgeQgGAIgCAOIAzAAQAAgPgGgIQgHgHgMAAQgKAAgIAIg");
	this.shape_52.setTransform(162.8,17.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAjBDIAAhAIhFAAIAABAIgQAAIAAiFIAQAAIAAA5IBFAAIAAg5IAQAAIAACFg");
	this.shape_53.setTransform(150.4,15.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgjBDQgLgIAAgNQAAgJAFgHQAGgHALgCQgEgCgCgEQgDgDAAgGQAAgFADgDQADgDAHgFQgJgCgFgJQgEgHAAgKQAAgRAKgJQAJgJATAAQAGAAAGACIAjAAIAAAKIgTACQADADADAGQACAEAAAHQgBAPgKAJQgKAJgQAAIgIgBQgKAGAAAFQAAAFADACQADABAJAAIAQAAQARAAAIAIQAJAGAAANQAAARgNAKQgOAIgYAAQgUAAgKgHgAgZAfQgGAFgBAKQABAIAGAEQAIAFAMAAQASgBAJgFQAKgGAAgKQgBgJgFgCQgFgEgOAAIgQAAQgLAAgFAFgAgRg4QgGAGAAALQAAALAGAGQAGAFALAAQAUAAAAgWQAAgXgUAAQgMAAgFAGg");
	this.shape_54.setTransform(133.2,19.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AAaAzIAAhAQAAgMgFgGQgGgGgMAAQgOAAgIAIQgHAJAAAUIAAAzIgPAAIAAhjIAMAAIADANIAAAAQAGgHAIgEQAJgEAIAAQASAAAJAJQAKAIAAAUIAABAg");
	this.shape_55.setTransform(122.4,17.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgGBFIAAhjIANAAIAABjgAgFgyQgCgDgBgFQABgFACgDQACgCADAAQAEAAACACQADADgBAFQABAFgDADQgCACgEAAQgDAAgCgCg");
	this.shape_56.setTransform(114.1,15.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgGBIIAAiPIANAAIAACPg");
	this.shape_57.setTransform(109.3,15.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgGBIIAAiPIANAAIAACPg");
	this.shape_58.setTransform(104.5,15.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgcAmQgOgNAAgZQAAgWANgPQAMgOASAAQAUAAALAMQAKANABAUIAAAIIhFAAQABASAIAJQAKAKANAAQAQAAAQgHIAAAOIgPAFQgIABgJAAQgWAAgMgOgAgRgeQgHAIgBAOIAzAAQAAgPgHgIQgGgHgMAAQgKAAgIAIg");
	this.shape_59.setTransform(96.8,17.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgpA/IAAgPQAIADAKACQAKACAJAAQAOAAAJgGQAHgGAAgKQAAgHgDgFQgDgEgGgEQgHgEgLgFQgTgFgIgJQgJgJAAgPQABgQAMgJQALgJASAAQAUAAARAHIgFAOQgRgHgQAAQgKAAgHAFQgIAGAAAJQABAHACAFQACAEAHAEQAGAEALAEQAVAGAIAJQAIAIAAAOQAAASgNAKQgNAKgUAAQgYAAgNgGg");
	this.shape_60.setTransform(86.2,15.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgGAzQgEgDAAgHQAAgHADgCQADgEAEAAQAFAAADAEQADACAAAHQAAAFgDAEQgDADgFAAQgDAAgDgCgAgGgdQgEgEAAgGQAAgNAKAAQALAAAAANQAAAGgDADQgDADgFAAQgDABgDgDg");
	this.shape_61.setTransform(73.5,17.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AAaBIIAAhCQABgKgHgHQgFgGgMAAQgOAAgHAJQgIAIAAATIAAA1IgPAAIAAiPIAPAAIAAAsIAAANIAAAAQAFgHAIgEQAJgFAJAAQASAAAKAJQAJAJAAARIAABDg");
	this.shape_62.setTransform(65.3,15.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgOAgIAAg7IgPAAIAAgHIAPgGIAHgWIAHAAIAAAXIAdAAIAAAMIgdAAIAAA6QAAAKADAEQAFAFAHAAIAIgBIAHAAIAAALQgDACgFAAIgJABQgbAAAAgfg");
	this.shape_63.setTransform(56,16.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgGBIIAAiPIANAAIAACPg");
	this.shape_64.setTransform(50.3,15.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgeAsQgKgHABgPQgBgdAwgBIARgBIAAgGQAAgMgFgGQgFgFgLAAQgLAAgQAHIgFgLQAHgEAKgDQAJgCAHAAQARAAAKAIQAJAIgBASIAABDIgLAAIgDgOIgBAAQgHAJgIAEQgHADgKAAQgPAAgIgIgAAKABQgRABgIAFQgIAFAAAKQAAAJAFAEQAFAEAJAAQANAAAHgHQAJgIAAgPIAAgJg");
	this.shape_65.setTransform(42.3,17.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgcAmQgNgNAAgZQAAgWAMgPQAMgOATAAQASAAALAMQALANAAAUIAAAIIhDAAQAAASAJAJQAIAKAOAAQARAAAQgHIAAAOIgQAFQgIABgKAAQgUAAgNgOgAgQgeQgIAIgBAOIAzAAQAAgPgGgIQgHgHgMAAQgKAAgHAIg");
	this.shape_66.setTransform(32,17.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AAjBDIAAhAIhFAAIAABAIgQAAIAAiFIAQAAIAAA5IBFAAIAAg5IAQAAIAACFg");
	this.shape_67.setTransform(19.7,15.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgcAmQgNgNAAgZQAAgWAMgPQAMgOATAAQASAAALAMQALANAAAUIAAAIIhDAAQAAASAJAJQAIAKAOAAQARAAAQgHIAAAOIgQAFQgIABgKAAQgUAAgNgOgAgQgeQgIAIgBAOIAzAAQAAgPgGgIQgHgHgMAAQgKAAgHAIg");
	this.shape_68.setTransform(7.4,17.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,305,73.6);


(lib.logo_color = function(mode,startPosition,loop) {
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
	this.shape.setTransform(91.5,16.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTAmQgJgFgFgKQgFgKAAgNQAAgUALgLQAKgMARAAQASAAAKAMQALAMAAATQAAAUgLAMQgKAMgSAAQgKAAgJgGgAgSgYQgGAJAAAPQAAAQAGAIQAHAJALAAQAMAAAHgJQAGgIAAgQQAAgPgGgIQgHgJgMAAQgLAAgHAIg");
	this.shape_1.setTransform(80.8,16.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAWArIAAg1QAAgLgFgFQgEgFgLAAQgLAAgGAHQgHAHAAARIAAArIgMAAIAAhUIAKAAIACAMIABAAQAEgGAHgEQAHgDAHAAQAPAAAIAIQAIAGAAARIAAA2g");
	this.shape_2.setTransform(71.1,16.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AglA8IAAgKIAJABQANgBAGgPIAFgLIgjhVIAOAAIATAxQAGAPAAAHIAAAAIAFgLIAVg8IAOAAIglBgQgEAPgHAFQgHAHgLgBQgGAAgFgBg");
	this.shape_3.setTransform(58,18.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgFA8IAAh3IALAAIAAB3g");
	this.shape_4.setTransform(51.9,14.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgkA+IAAh6IALAAIABAMIAAAAQAFgHAHgDQAHgDAHAAQARAAAJALQAJAMAAAVQAAATgJAMQgJALgRAAQgHAAgHgDQgHgDgFgGIAAAAIAAAOIAAAjgAgRgrQgGAHgBAQIAAADQAAARAHAHQAGAHALAAQALAAAHgJQAFgHAAgPQAAgQgFgJQgHgIgLAAQgMAAgFAHg");
	this.shape_5.setTransform(45.3,18);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgkA+IAAh6IALAAIABAMIAAAAQAFgHAHgDQAHgDAGAAQARAAAKALQAJAMAAAVQAAATgJAMQgKALgRAAQgGAAgHgDQgHgDgFgGIAAAAIAAAOIAAAjgAgRgrQgGAHgBAQIAAADQAAARAHAHQAGAHALAAQALAAAHgJQAFgHABgPQgBgQgFgJQgHgIgLAAQgMAAgFAHg");
	this.shape_6.setTransform(35.5,18);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAkA5IgOglIgsAAIgOAlIgNAAIAthxIAJAAIAtBxgAgEgZIgNAhIAjAAIgNghIgFgQIgEAQg");
	this.shape_7.setTransform(25.2,14.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAWArIAAg2QAAgKgFgFQgEgFgLAAQgLAAgGAHQgHAIAAAQIAAArIgMAAIAAhUIAKAAIACAMIABAAQAEgGAHgEQAHgDAHAAQAPAAAIAIQAIAHAAAQIAAA2g");
	this.shape_8.setTransform(71.1,14.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AglA8IAAgLIAJACQANAAAGgPIAFgMIgjhVIAOAAIATAxQAGAPAAAHIAAAAIAFgLIAVg8IAOAAIglBgQgEAPgHAFQgHAHgLAAQgGgBgFgBg");
	this.shape_9.setTransform(58,16.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAWArIAAg1QAAgLgFgFQgEgFgLAAQgLAAgGAHQgHAHAAARIAAArIgMAAIAAhUIAKAAIACAMIABAAQAEgGAHgDQAHgEAHAAQAPAAAIAHQAIAIAAAQIAAA2g");
	this.shape_10.setTransform(71.1,18.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AglA8IAAgKIAJAAQANAAAGgPIAFgMIgjhUIAOAAIATAxQAGAPAAAIIAAAAIAFgMIAVg8IAOAAIglBgQgEAOgHAHQgHAFgLAAQgGABgFgCg");
	this.shape_11.setTransform(58,20.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7,p:{y:14.7}},{t:this.shape_6,p:{y:18}},{t:this.shape_5,p:{y:18}},{t:this.shape_4,p:{y:14.4}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{y:16.2}},{t:this.shape,p:{y:16.2}}]}).to({state:[{t:this.shape_7,p:{y:12.7}},{t:this.shape_6,p:{y:16}},{t:this.shape_5,p:{y:16}},{t:this.shape_4,p:{y:12.4}},{t:this.shape_9},{t:this.shape_8},{t:this.shape_1,p:{y:14.2}},{t:this.shape,p:{y:14.2}}]},1).to({state:[{t:this.shape_7,p:{y:16.7}},{t:this.shape_6,p:{y:20}},{t:this.shape_5,p:{y:20}},{t:this.shape_4,p:{y:16.4}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_1,p:{y:18.2}},{t:this.shape,p:{y:18.2}}]},1).to({state:[]},1).wait(1));

	// Layer 1
	this.instance = new lib.btn();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:-2},0).wait(1).to({y:2},0).wait(1).to({scaleX:2.9,scaleY:9.33,x:-110,y:-237},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,116,30);


(lib.bg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,336,120);


(lib.arrow_color = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.arr();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20,18);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo_color("synched",0);
	this.instance.setTransform(51,11.5,1,1,0,0,0,51,11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,102,23);


(lib.arr_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.arrow_color("synched",0);
	this.instance.setTransform(0,9,1,1,0,0,0,10,9);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 140, 198, 62, 0)];
	this.instance.cache(-2,-2,24,22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,0,20,18);


// stage content:
(lib._336x280_Canvas = function(mode,startPosition,loop) {
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
	this.frame_69 = function() {
		/* stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(69).call(this.frame_69).wait(1));

	// cta_clicktag
	this.clickTag_mc = new lib.cta();
	this.clickTag_mc.setTransform(110,236);
	this.clickTag_mc.alpha = 0;
	new cjs.ButtonHelper(this.clickTag_mc, 0, 1, 2, false, new lib.cta(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickTag_mc).to({alpha:1},5).wait(65));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F69234").s().p("A6PAxIAAhiMA0eAAAIAABig");
	this.shape.setTransform(168,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(70));

	// logo
	this.instance = new lib.logo_1();
	this.instance.setTransform(171,23.5,1,1,0,0,0,51,11.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(32).to({_off:false},0).to({y:42.5,alpha:1},6).to({y:37.5},4).wait(28));

	// text
	this.instance_1 = new lib.text();
	this.instance_1.setTransform(161,172.5,1,1,0,0,0,143,37.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(38).to({_off:false},0).to({y:175.5,alpha:1},9).wait(23));

	// text bg
	this.instance_2 = new lib.text_bg();
	this.instance_2.setTransform(168,100,1,1,0,0,0,168,45);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).to({y:185,alpha:1},10,cjs.Ease.get(-1)).to({y:175},4).wait(37));

	// arr
	this.instance_3 = new lib.arr_1();
	this.instance_3.setTransform(168,211,1,1,0,0,0,0,9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(48).to({_off:false},0).to({y:226},5).to({y:222},3).wait(14));

	// bg image
	this.instance_4 = new lib.bg_1();
	this.instance_4.setTransform(125,222,1,1,0,0,0,125,32);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).to({y:32,alpha:1},10,cjs.Ease.get(1)).to({y:42},4).wait(47));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(168,140,336,268);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;