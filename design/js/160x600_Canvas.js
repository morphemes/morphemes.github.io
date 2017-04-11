(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 160,
	height: 600,
	fps: 20,
	color: "#0099D6",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/160x600_Canvas_atlas_.png", id:"160x600_Canvas_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"160x600_Canvas_atlas_", frames: [[104,324,20,18],[0,0,160,290],[0,292,116,30],[0,324,102,23]]}
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
	this.spriteSheet = ss["160x600_Canvas_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg = function() {
	this.spriteSheet = ss["160x600_Canvas_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.btn = function() {
	this.spriteSheet = ss["160x600_Canvas_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.spriteSheet = ss["160x600_Canvas_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.text_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D5E9E1").s().p("AsfR+MAAAgj7IY/AAMAAAAj7g");
	this.shape.setTransform(80,115);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,230);


(lib.text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D616F").s().p("AgGAJQgEgDAAgGQAAgFADgCQADgEAEAAQAFAAADAEQADACAAAFQAAAFgDAEQgDADgFAAQgDAAgDgDg");
	this.shape.setTransform(86.6,196.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4D616F").s().p("AgjAuIAAgPQAIAEAJACQAHACAJAAQAJAAAHgDQAHgEgBgIQAAgGgEgEQgGgFgMgFQgPgEgGgEQgGgDgDgGQgDgFAAgGQAAgNAKgHQAKgHAQAAQARAAAQAGIgGANQgQgGgMAAQgJAAgGADQgFADAAAHQAAAEACACQACADAFADQAEADAMAEQARAGAHAGQAGAGAAALQAAAOgKAHQgKAIgSAAQgUAAgMgGg");
	this.shape_1.setTransform(79.7,192);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4D616F").s().p("AAbAzIAAhAQgBgMgFgGQgGgGgMAAQgOAAgIAIQgHAJAAAUIAAAzIgPAAIAAhjIAMAAIADANIABAAQAEgHAJgEQAIgEAJAAQATAAAIAJQAKAIAAAUIAABAg");
	this.shape_2.setTransform(69.4,191.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4D616F").s().p("AgXAuQgLgHgFgMQgGgMAAgPQAAgYAMgNQANgOAUAAQAVAAANAOQAMAOAAAXQAAAYgMAOQgNAOgVAAQgMAAgLgGgAgVgcQgIAKAAASQAAATAIAKQAHAKAOAAQAPAAAIgKQAHgKAAgTQAAgSgHgKQgIgKgPAAQgOAAgHAKg");
	this.shape_3.setTransform(57.7,192);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4D616F").s().p("AgGBFIAAhjIANAAIAABjgAgFgyQgCgDAAgFQAAgFACgDQADgCACAAQAEAAACACQADADAAAFQAAAFgDADQgCACgEAAQgCAAgDgCg");
	this.shape_4.setTransform(49.6,190.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4D616F").s().p("AgjAuIAAgPQAIAEAIACQAIACAIAAQAKAAAHgDQAGgEABgIQAAgGgGgEQgEgFgOgFQgOgEgGgEQgGgDgCgGQgDgFgBgGQAAgNALgHQAJgHAQAAQAQAAAQAGIgFANQgPgGgNAAQgJAAgFADQgGADAAAHQAAAEACACQACADAFADQAEADAMAEQARAGAHAGQAHAGgBALQABAOgLAHQgKAIgSAAQgUAAgMgGg");
	this.shape_5.setTransform(42.7,192);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4D616F").s().p("AgGBFIAAhjIANAAIAABjgAgFgyQgCgDAAgFQAAgFACgDQADgCACAAQAEAAACACQADADAAAFQAAAFgDADQgCACgEAAQgCAAgDgCg");
	this.shape_6.setTransform(35.7,190.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4D616F").s().p("AgXAnQgMgOAAgZQAAgXAMgOQANgOAUAAQAIAAAHABQAHACAEACIgEANIgLgDIgLgCQgdAAAAAmQAAATAHAKQAIAKANAAQANAAANgGIAAAOQgKAFgQAAQgUAAgMgNg");
	this.shape_7.setTransform(29,192);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4D616F").s().p("AgcAmQgNgNAAgZQAAgWAMgPQAMgOATAAQASAAALAMQALANAAAUIAAAIIhDAAQAAASAJAJQAIAKAOAAQARAAAQgHIAAAOIgQAFQgIABgKAAQgUAAgNgOgAgQgeQgIAIgBAOIAzAAQAAgPgGgIQgHgHgMAAQgKAAgHAIg");
	this.shape_8.setTransform(19,192);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4D616F").s().p("AggA7QgLgOAAgZQAAgXALgOQALgOAUAAQATAAALAPIABAAIgBgHIAAgHIAAgqIAPAAIAACPIgMAAIgCgOIgBAAQgLAQgTAAQgUAAgLgOgAgUgHQgHAIAAATQAAAUAHAKQAHAKANAAQAPAAAHgJQAHgIAAgUIAAgDQAAgUgHgJQgHgJgPAAQgNAAgHALg");
	this.shape_9.setTransform(7.5,190);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4D616F").s().p("AgcAmQgNgNAAgZQAAgWAMgPQAMgOATAAQASAAALAMQALANAAAUIAAAIIhDAAQAAASAJAJQAIAKAOAAQARAAAPgHIAAAOIgPAFQgIABgKAAQgUAAgNgOgAgQgeQgIAIgBAOIAzAAQAAgPgGgIQgHgHgMAAQgKAAgHAIg");
	this.shape_10.setTransform(83,170.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4D616F").s().p("AgXAnQgMgOAAgZQAAgXAMgOQANgOAUAAQAIAAAHABQAHACAEACIgEANIgLgDIgLgCQgdAAAAAmQAAATAHAKQAIAKANAAQANAAANgGIAAAOQgKAFgQAAQgUAAgMgNg");
	this.shape_11.setTransform(73.3,170.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4D616F").s().p("AAaAzIAAhAQAAgMgFgGQgGgGgMAAQgOAAgIAIQgHAJAAAUIAAAzIgPAAIAAhjIAMAAIADANIAAAAQAGgHAIgEQAJgEAIAAQASAAAKAJQAJAIAAAUIAABAg");
	this.shape_12.setTransform(62.9,170.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4D616F").s().p("AgfAsQgJgHAAgPQAAgdAwgBIARgBIAAgGQAAgMgFgGQgFgFgMAAQgKAAgQAHIgFgLQAHgEAJgDQAJgCAHAAQASAAAJAIQAKAIgBASIAABDIgLAAIgDgOIgBAAQgIAJgHAEQgHADgKAAQgPAAgJgIgAAKABQgRABgIAFQgIAFAAAKQAAAJAFAEQAFAEAJAAQANAAAHgHQAJgIAAgPIAAgJg");
	this.shape_13.setTransform(51.4,170.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4D616F").s().p("AgcAzIAAhjIANAAIACASIAAAAQAGgKAHgFQAHgFAJAAIANABIgDAOIgLgBQgMAAgHAKQgJAKAAAPIAAA0g");
	this.shape_14.setTransform(43.6,170.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#4D616F").s().p("AggAqQgJgJAAgTIAAhAIAQAAIAABAQAAAMAFAGQAGAGAMAAQAOAAAHgJQAIgIAAgUIAAgzIAPAAIAABjIgNAAIgCgNIgBAAQgEAHgJAEQgIAEgJAAQgTAAgJgJg");
	this.shape_15.setTransform(33.2,170.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4D616F").s().p("AgiAuIAAgPQAHAEAIACQAJACAHAAQAKAAAHgDQAGgEABgIQAAgGgGgEQgFgFgNgFQgOgEgGgEQgGgDgCgGQgDgFAAgGQAAgNAKgHQAJgHAQAAQAQAAAQAGIgFANQgQgGgMAAQgJAAgFADQgGADAAAHQAAAEACACQACADAFADQAEADALAEQASAGAHAGQAHAGAAALQAAAOgLAHQgLAIgRAAQgUAAgLgGg");
	this.shape_16.setTransform(23,170.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#4D616F").s().p("AAaAzIAAhAQABgMgHgGQgFgGgMAAQgOAAgHAIQgIAJAAAUIAAAzIgPAAIAAhjIANAAIACANIAAAAQAFgHAJgEQAIgEAJAAQATAAAJAJQAJAIAAAUIAABAg");
	this.shape_17.setTransform(12.7,170.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#4D616F").s().p("AgGBFIAAhjIANAAIAABjgAgFgyQgDgDABgFQgBgFADgDQADgCACAAQADAAADACQACADABAFQgBAFgCADQgDACgDAAQgCAAgDgCg");
	this.shape_18.setTransform(4.4,168.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#4D616F").s().p("AAbBIIAAhCQAAgKgHgHQgFgGgMAAQgOAAgHAJQgIAIAAATIAAA1IgPAAIAAiPIAPAAIAAAsIAAANIABAAQAEgHAIgEQAJgFAIAAQATAAAJAJQAKAJAAARIAABDg");
	this.shape_19.setTransform(84,146.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#4D616F").s().p("AgOAgIAAg7IgPAAIAAgHIAPgHIAGgVIAIAAIAAAYIAdAAIAAALIgdAAIAAA6QAAAJAEAFQAEAFAHAAIAIAAIAHgBIAAALQgDACgFAAIgJABQgbAAAAgfg");
	this.shape_20.setTransform(74.7,147.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#4D616F").s().p("AgGBIIAAiPIANAAIAACPg");
	this.shape_21.setTransform(69,146.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#4D616F").s().p("AgeAsQgJgHAAgPQAAgdAvgBIARgBIAAgGQAAgMgFgGQgFgFgLAAQgLAAgQAHIgFgLQAHgEAKgDQAIgCAIAAQARAAAKAIQAIAIABASIAABDIgMAAIgDgOIgBAAQgIAJgHAEQgIADgJAAQgPAAgIgIgAAJABQgQABgIAFQgIAFAAAKQAAAJAFAEQAFAEAJAAQANAAAHgHQAJgIAAgPIAAgJg");
	this.shape_22.setTransform(61,148.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#4D616F").s().p("AgcAmQgNgNAAgZQAAgWAMgPQAMgOATAAQASAAAMAMQALANgBAUIAAAIIhEAAQABASAIAJQAJAKAOAAQAQAAARgHIAAAOIgQAFQgHABgLAAQgVAAgMgOgAgRgeQgGAIgCAOIAzAAQAAgPgGgIQgHgHgMAAQgKAAgIAIg");
	this.shape_23.setTransform(50.7,148.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#4D616F").s().p("AAbBIIAAhCQgBgKgFgHQgGgGgMAAQgOAAgIAJQgHAIAAATIAAA1IgPAAIAAiPIAPAAIAAAsIgBANIACAAQAEgHAJgEQAIgFAIAAQATAAAJAJQAKAJAAARIAABDg");
	this.shape_24.setTransform(39.7,146.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#4D616F").s().p("AgjBDQgMgIAAgNQABgKAGgGQAFgHAMgCQgEgCgDgEQgDgEAAgFQAAgFADgCQADgEAGgFQgHgDgFgHQgGgIAAgKQABgRAJgJQALgJASAAQAGAAAGACIAkAAIAAAJIgTADQACADACAFQADAGAAAGQAAAPgLAJQgKAJgQAAIgJgBQgJAGAAAFQAAAFADABQADADAJAAIAQAAQAQAAAKAGQAIAIAAANQAAAQgOAKQgNAIgYAAQgUAAgKgHgAgZAfQgHAFAAAJQAAAJAIAEQAGAFANgBQASAAAJgFQAJgGAAgKQAAgIgEgDQgGgEgOAAIgRAAQgKAAgFAFgAgRg4QgGAGAAAMQAAAKAGAGQAGAFAKAAQAVAAAAgWQAAgXgVAAQgKAAgGAGg");
	this.shape_25.setTransform(23.6,150.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#4D616F").s().p("AgGBFIAAhjIANAAIAABjgAgFgyQgDgDABgFQgBgFADgDQACgCADAAQAEAAACACQACADABAFQgBAFgCADQgCACgEAAQgDAAgCgCg");
	this.shape_26.setTransform(16,146.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#4D616F").s().p("AgOBFQgIgEgGgHIgBAAIgDANIgLAAIAAiPIAPAAIAAAjIgBAWIABAAQALgQATAAQAUAAALAOQALAOAAAXQAAAZgLAOQgLAOgUAAQgIAAgIgEgAgVgJQgHAJAAAUQAAAVAHAKQAHAJAOAAQAOAAAHgLQAHgKAAgTQAAgUgHgIQgHgKgOAAQgOAAgHAJg");
	this.shape_27.setTransform(8.1,146.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#4D616F").s().p("AgcAzIAAhjIANAAIACASIAAAAQAGgKAHgFQAHgFAJAAIANABIgDAOIgLgBQgMAAgHAKQgJAKAAAPIAAA0g");
	this.shape_28.setTransform(119.7,126.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#4D616F").s().p("AggAqQgJgJAAgTIAAhAIAQAAIAABAQAAAMAFAGQAGAGAMAAQAOAAAHgJQAIgIAAgUIAAgzIAPAAIAABjIgNAAIgCgNIgBAAQgEAHgJAEQgIAEgJAAQgTAAgJgJg");
	this.shape_29.setTransform(109.3,126.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#4D616F").s().p("AgXAuQgLgHgFgMQgGgMAAgPQAAgYAMgNQANgOAUAAQAVAAANAOQAMAOAAAXQAAAYgMAOQgNAOgVAAQgMAAgLgGgAgVgcQgIAKAAASQAAATAIAKQAHAKAOAAQAPAAAIgKQAHgKAAgTQAAgSgHgKQgIgKgPAAQgOAAgHAKg");
	this.shape_30.setTransform(97.7,126.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#4D616F").s().p("AgtBIIAAgNQAFABAHAAQAQABAGgTIAGgOIgphkIAQAAIAXA6QAHARAAAKIABAAIAFgPIAZhGIAQAAIgrBxQgFASgJAHQgIAHgNAAIgOgBg");
	this.shape_31.setTransform(87.2,128.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#4D616F").s().p("AAbBIIAAhCQAAgKgHgHQgFgGgMAAQgOAAgHAJQgIAIAAATIAAA1IgPAAIAAiPIAPAAIAAAsIAAANIABAAQAEgHAIgEQAJgFAIAAQATAAAJAJQAKAJAAARIAABDg");
	this.shape_32.setTransform(71.8,124.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#4D616F").s().p("AgOAgIAAg7IgPAAIAAgHIAPgGIAGgWIAIAAIAAAYIAdAAIAAALIgdAAIAAA6QAAAKAEAEQAEAFAHAAIAIAAIAHgBIAAALQgDACgFAAIgIABQgcAAAAgfg");
	this.shape_33.setTransform(62.5,125.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#4D616F").s().p("AgGBFIAAhjIANAAIAABjgAgFgyQgCgDgBgFQABgFACgDQADgCACAAQADAAADACQADADgBAFQABAFgDADQgDACgDAAQgCAAgDgCg");
	this.shape_34.setTransform(56.8,124.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#4D616F").s().p("AAZAyIgTg5IgGgZIAAAAIgFAZIgUA5IgRAAIgchjIAQAAIAPA4QAFAUABAHIABAAIADgOIAEgNIATg4IAOAAIASA4QAGAQABALIABAAIACgLIAUhIIAPAAIgcBjg");
	this.shape_35.setTransform(47,126.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#4D616F").s().p("AggAqQgJgJAAgTIAAhAIAQAAIAABAQAAAMAFAGQAGAGAMAAQAOAAAHgJQAIgIAAgUIAAgzIAPAAIAABjIgNAAIgCgNIgBAAQgEAHgJAEQgIAEgJAAQgTAAgJgJg");
	this.shape_36.setTransform(28.8,126.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#4D616F").s().p("AgXAuQgLgHgFgMQgGgMAAgPQAAgYAMgNQANgOAUAAQAVAAANAOQAMAOAAAXQAAAYgMAOQgNAOgVAAQgMAAgLgGgAgVgcQgIAKAAASQAAATAIAKQAHAKAOAAQAPAAAIgKQAHgKAAgTQAAgSgHgKQgIgKgPAAQgOAAgHAKg");
	this.shape_37.setTransform(17.3,126.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#4D616F").s().p("AgtBIIAAgNQAFABAHAAQAQABAGgTIAGgOIgphkIAQAAIAXA6QAHARAAAKIABAAIAFgPIAZhGIAQAAIgrBxQgFASgJAHQgIAHgNAAIgOgBg");
	this.shape_38.setTransform(6.8,128.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#4D616F").s().p("AgrBKIAAiRIAMAAIACANIABAAQAGgHAIgEQAIgEAIAAQAUAAALAOQALANAAAZQAAAYgLAOQgLAOgUgBQgIAAgIgDQgIgEgGgIIgBAAIABARIAAAqgAgVgzQgHAIAAATIAAADQAAAVAHAJQAHAIAOABQANAAAIgLQAHgJAAgTQAAgSgHgLQgIgKgNAAQgOAAgHAJg");
	this.shape_39.setTransform(103.5,106.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#4D616F").s().p("AgGBIIAAiPIANAAIAACPg");
	this.shape_40.setTransform(95,102.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#4D616F").s().p("AgcAmQgOgNAAgZQAAgWANgPQAMgOASAAQAUAAALAMQAKANABAUIAAAIIhFAAQABASAJAJQAJAKANAAQAQAAAQgHIAAAOIgPAFQgIABgJAAQgWAAgMgOgAgQgeQgIAIgBAOIAzAAQAAgPgHgIQgGgHgMAAQgKAAgHAIg");
	this.shape_41.setTransform(87.3,104.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#4D616F").s().p("AAaBIIAAhCQAAgKgFgHQgGgGgMAAQgOAAgIAJQgHAIAAATIAAA1IgPAAIAAiPIAPAAIAAAsIgBANIABAAQAFgHAJgEQAIgFAJAAQASAAAKAJQAJAJAAARIAABDg");
	this.shape_42.setTransform(76.3,102.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#4D616F").s().p("AgXAuQgLgHgFgMQgGgMAAgPQAAgYAMgNQANgOAUAAQAVAAANAOQAMAOAAAXQAAAYgMAOQgNAOgVAAQgMAAgLgGgAgVgcQgIAKAAASQAAATAIAKQAHAKAOAAQAPAAAIgKQAHgKAAgTQAAgSgHgKQgIgKgPAAQgOAAgHAKg");
	this.shape_43.setTransform(59.6,104.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#4D616F").s().p("AgOAgIAAg7IgOAAIAAgHIAOgGIAGgWIAIAAIAAAXIAdAAIAAAMIgdAAIAAA6QAAAJAEAFQAEAFAIAAIAIgBIAFgBIAAAMQgCACgEAAIgJABQgcAAAAgfg");
	this.shape_44.setTransform(50.5,103.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#4D616F").s().p("AgcAmQgNgNAAgZQAAgWAMgPQAMgOATAAQASAAALAMQALANAAAUIAAAIIhDAAQAAASAJAJQAIAKAOAAQARAAAQgHIAAAOIgQAFQgIABgKAAQgUAAgNgOgAgQgeQgIAIgBAOIAzAAQAAgPgGgIQgHgHgMAAQgKAAgHAIg");
	this.shape_45.setTransform(37,104.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#4D616F").s().p("AgcAzIAAhjIANAAIACASIAAAAQAGgKAHgFQAHgFAJAAIANABIgDAOIgLgBQgMAAgHAKQgJAKAAAPIAAA0g");
	this.shape_46.setTransform(28.8,104.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#4D616F").s().p("AgcAmQgNgNAAgZQAAgWAMgPQAMgOATAAQASAAALAMQALANAAAUIAAAIIhDAAQAAASAJAJQAIAKAOAAQARAAAQgHIAAAOIgQAFQgIABgKAAQgUAAgNgOgAgQgeQgIAIgBAOIAzAAQAAgPgGgIQgHgHgMAAQgKAAgHAIg");
	this.shape_47.setTransform(19,104.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#4D616F").s().p("AAbBIIAAhCQAAgKgHgHQgFgGgMAAQgOAAgHAJQgIAIAAATIAAA1IgPAAIAAiPIAPAAIAAAsIAAANIABAAQAEgHAIgEQAJgFAIAAQATAAAJAJQAKAJAAARIAABDg");
	this.shape_48.setTransform(7.9,102.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#4D616F").s().p("AgcAmQgNgNAAgZQAAgWAMgPQAMgOATAAQASAAALAMQALANAAAUIAAAIIhDAAQAAASAJAJQAIAKAOAAQARAAAQgHIAAAOIgQAFQgIABgKAAQgUAAgNgOgAgQgeQgIAIgBAOIAzAAQAAgPgGgIQgHgHgMAAQgKAAgHAIg");
	this.shape_49.setTransform(89.2,82.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#4D616F").s().p("AgcAzIAAhjIANAAIACASIAAAAQAGgKAHgFQAHgFAJAAIANABIgDAOIgLgBQgMAAgHAKQgJAKAAAPIAAA0g");
	this.shape_50.setTransform(81,82.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#4D616F").s().p("AgeAsQgJgHAAgPQAAgdAvgBIARgBIAAgGQAAgMgFgGQgFgFgLAAQgLAAgQAHIgFgLQAHgEAKgDQAIgCAIAAQARAAAKAIQAIAIABASIAABDIgMAAIgDgOIgBAAQgIAJgHAEQgIADgJAAQgPAAgIgIgAAJABQgQABgIAFQgIAFAAAKQAAAJAFAEQAFAEAJAAQANAAAHgHQAJgIAAgPIAAgJg");
	this.shape_51.setTransform(70.9,82.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#4D616F").s().p("AgiAuIAAgPQAHAEAJACQAIACAHAAQAKAAAHgDQAGgEAAgIQAAgGgEgEQgGgFgNgFQgOgEgGgEQgGgDgDgGQgCgFAAgGQgBgNALgHQAKgHAPAAQAQAAARAGIgGANQgQgGgMAAQgJAAgGADQgFADAAAHQAAAEACACQACADAFADQAEADALAEQATAGAGAGQAGAGABALQAAAOgLAHQgLAIgRAAQgUAAgLgGg");
	this.shape_52.setTransform(56.5,82.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#4D616F").s().p("AgOAgIAAg6IgOAAIAAgIIAOgHIAHgVIAHAAIAAAXIAdAAIAAANIgdAAIAAA5QAAAJADAFQAFAFAIAAIAIgBIAFgBIAAAMQgCABgFABIgJABQgbAAAAgfg");
	this.shape_53.setTransform(48.5,81.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#4D616F").s().p("AAbAzIAAhAQAAgMgHgGQgFgGgMAAQgOAAgHAIQgIAJAAAUIAAAzIgPAAIAAhjIANAAIACANIABAAQAEgHAJgEQAJgEAIAAQASAAAKAJQAJAIAAAUIAABAg");
	this.shape_54.setTransform(39.5,82.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#4D616F").s().p("AgcAmQgNgNAAgZQAAgWAMgPQAMgOATAAQASAAALAMQAMANgBAUIAAAIIhEAAQABASAIAJQAKAKANAAQARAAAQgHIAAAOIgQAFQgHABgLAAQgVAAgMgOgAgRgeQgGAIgCAOIAzAAQAAgPgGgIQgHgHgMAAQgKAAgIAIg");
	this.shape_55.setTransform(28.3,82.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#4D616F").s().p("AgjBCQgMgGAAgOQABgJAGgIQAFgGAMgDQgEgBgDgEQgDgDAAgFQAAgGADgCQADgFAGgDQgHgEgFgIQgGgHAAgKQABgRAJgJQALgJASAAQAGAAAGACIAkAAIAAAKIgTACQACADACAFQADAFAAAHQAAAPgLAJQgKAJgQAAIgJgBQgJAFAAAGQAAAEADACQADACAJAAIAQAAQAQABAKAGQAIAIAAAMQAAASgOAIQgNAJgYAAQgUAAgKgIgAgZAfQgHAFAAAJQAAAJAIAEQAGAEAOABQARAAAJgHQAJgFAAgKQAAgJgEgDQgGgDgOAAIgRAAQgKAAgFAFgAgRg4QgGAGAAALQAAALAGAFQAGAGAKAAQAVAAAAgWQAAgXgVAAQgKAAgGAGg");
	this.shape_56.setTransform(17.7,85);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#4D616F").s().p("AgeAsQgJgHAAgPQAAgdAvgBIARgBIAAgGQAAgMgFgGQgFgFgLAAQgLAAgQAHIgFgLQAHgEAKgDQAIgCAIAAQARAAAKAIQAIAIABASIAABDIgMAAIgDgOIgBAAQgIAJgHAEQgIADgJAAQgPAAgIgIgAAJABQgQABgIAFQgIAFAAAKQAAAJAFAEQAFAEAJAAQANAAAHgHQAJgIAAgPIAAgJg");
	this.shape_57.setTransform(7,82.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#4D616F").s().p("AggA7QgLgOAAgZQAAgXALgOQALgOAUAAQATAAALAPIABAAIgBgHIAAgHIAAgqIAPAAIAACPIgMAAIgCgOIgBAAQgLAQgTAAQgUAAgLgOgAgUgHQgHAIAAATQAAAUAHAKQAHAKANAAQAPAAAHgJQAHgIAAgUIAAgDQAAgUgHgJQgHgJgPAAQgNAAgHALg");
	this.shape_58.setTransform(68.1,58.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#4D616F").s().p("AgcAmQgNgNAAgZQAAgWAMgPQAMgOATAAQASAAALAMQALANAAAUIAAAIIhDAAQAAASAJAJQAIAKAOAAQARAAAQgHIAAAOIgQAFQgIABgKAAQgUAAgNgOgAgQgeQgIAIgBAOIAzAAQAAgPgGgIQgHgHgMAAQgKAAgHAIg");
	this.shape_59.setTransform(57.3,60.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#4D616F").s().p("AgiAuIAAgPQAHAEAJACQAIACAHAAQAKAAAHgDQAGgEAAgIQAAgGgEgEQgGgFgNgFQgOgEgGgEQgGgDgDgGQgCgFAAgGQgBgNALgHQAKgHAPAAQAQAAARAGIgGANQgQgGgMAAQgJAAgGADQgFADAAAHQAAAEACACQACADAFADQAEADALAEQATAGAGAGQAGAGABALQAAAOgLAHQgLAIgRAAQgUAAgLgGg");
	this.shape_60.setTransform(47.5,60.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#4D616F").s().p("AAaAzIAAhAQAAgMgFgGQgGgGgMAAQgOAAgIAIQgHAJAAAUIAAAzIgPAAIAAhjIANAAIACANIAAAAQAGgHAIgEQAJgEAIAAQASAAAJAJQAKAIAAAUIAABAg");
	this.shape_61.setTransform(37.2,60.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#4D616F").s().p("AgcAmQgOgNAAgZQAAgWANgPQAMgOASAAQAUAAAKAMQAMANAAAUIAAAIIhEAAQAAASAJAJQAJAKANAAQAQAAAQgHIAAAOIgPAFQgIABgJAAQgWAAgMgOgAgQgeQgHAIgCAOIAzAAQAAgPgHgIQgGgHgMAAQgKAAgHAIg");
	this.shape_62.setTransform(26,60.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#4D616F").s().p("AgXAnQgMgOAAgZQAAgXAMgOQANgOAUAAQAIAAAHABQAHACAEACIgEANIgLgDIgLgCQgdAAAAAmQAAATAHAKQAIAKANAAQANAAANgGIAAAOQgKAFgQAAQgUAAgMgNg");
	this.shape_63.setTransform(16.3,60.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#4D616F").s().p("AgGBFIAAhjIANAAIAABjgAgFgyQgCgDgBgFQABgFACgDQACgCADAAQAEAAACACQADADgBAFQABAFgDADQgCACgEAAQgDAAgCgCg");
	this.shape_64.setTransform(9.2,59);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#4D616F").s().p("AgGBIIAAiPIANAAIAACPg");
	this.shape_65.setTransform(4.4,58.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#4D616F").s().p("AgcAzIAAhjIANAAIACASIAAAAQAGgKAHgFQAHgFAJAAIANABIgDAOIgLgBQgMAAgHAKQgJAKAAAPIAAA0g");
	this.shape_66.setTransform(116,39);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#4D616F").s().p("AggAqQgJgJAAgTIAAhAIAQAAIAABAQAAAMAFAGQAGAGAMAAQAOAAAHgJQAIgIAAgUIAAgzIAPAAIAABjIgNAAIgCgNIgBAAQgEAHgJAEQgIAEgJAAQgTAAgJgJg");
	this.shape_67.setTransform(105.6,39.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#4D616F").s().p("AgtAzQgQgTAAggQAAggAQgSQARgTAcAAQAdABAQASQARATAAAfQAAAggRATQgQASgdABQgdAAgQgTgAghgoQgLAOAAAaQAAAbALAPQANAOAUgBQAWABALgOQAMgPAAgbQAAgagLgOQgMgOgWAAQgVAAgMAOg");
	this.shape_68.setTransform(92.5,37.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#4D616F").s().p("AgMBDQgDgDgBgHQAAgMAMAAQAEAAACADQADADAAAGQAAAGgDADQgCADgEAAQgGAAgCgCgAgLAeIAAgGQAAgKADgHQADgHAIgGQAMgLADgFQAEgFAAgIQAAgKgGgEQgGgGgKAAQgHAAgHACQgHABgJAFIgGgMQASgKASABQARAAAJAIQAKAJAAAPQAAAHgBAGQgCAFgDAFQgEAEgMAJQgJAHgDAGQgCAEAAAKIAAADg");
	this.shape_69.setTransform(75.9,37.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#4D616F").s().p("AggA7QgLgOAAgZQAAgXALgOQALgOAUAAQATAAALAPIABAAIgBgHIAAgHIAAgqIAPAAIAACPIgMAAIgCgOIgBAAQgLAQgTAAQgUAAgLgOgAgUgHQgHAIAAATQAAAUAHAKQAHAKANAAQAPAAAHgJQAHgIAAgUIAAgDQAAgUgHgJQgHgJgPAAQgNAAgHALg");
	this.shape_70.setTransform(65.9,37);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#4D616F").s().p("AgcAmQgNgNAAgZQAAgWAMgPQAMgOATAAQASAAALAMQALANAAAUIAAAIIhDAAQAAASAJAJQAIAKAOAAQARAAAQgHIAAAOIgQAFQgIABgKAAQgUAAgNgOgAgQgeQgIAIgBAOIAzAAQAAgPgGgIQgHgHgMAAQgKAAgHAIg");
	this.shape_71.setTransform(55.1,39.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#4D616F").s().p("AggA7QgLgOAAgZQAAgXALgOQALgOAUAAQATAAALAPIABAAIgBgHIAAgHIAAgqIAPAAIAACPIgMAAIgCgOIgBAAQgLAQgTAAQgUAAgLgOgAgUgHQgHAIAAATQAAAUAHAKQAHAKANAAQAPAAAHgJQAHgIAAgUIAAgDQAAgUgHgJQgHgJgPAAQgNAAgHALg");
	this.shape_72.setTransform(43.6,37);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#4D616F").s().p("AgGBFIAAhjIANAAIAABjgAgFgyQgCgDAAgFQAAgFACgDQADgCACAAQAEAAACACQADADAAAFQAAAFgDADQgCACgEAAQgCAAgDgCg");
	this.shape_73.setTransform(35.7,37.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#4D616F").s().p("AgXAnQgMgOAAgZQAAgXAMgOQANgOAUAAQAIAAAHABQAHACAEACIgEANIgLgDIgLgCQgdAAAAAmQAAATAHAKQAIAKANAAQANAAANgGIAAAOQgKAFgQAAQgUAAgMgNg");
	this.shape_74.setTransform(29,39.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#4D616F").s().p("AgcAmQgNgNAAgZQAAgWAMgPQAMgOATAAQASAAALAMQALANAAAUIAAAIIhDAAQAAASAJAJQAIAKAOAAQARAAAQgHIAAAOIgQAFQgIABgKAAQgUAAgNgOgAgQgeQgIAIgBAOIAzAAQAAgPgGgIQgHgHgMAAQgKAAgHAIg");
	this.shape_75.setTransform(19,39.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#4D616F").s().p("AggA7QgLgOAAgZQAAgXALgOQALgOAUAAQATAAALAPIABAAIgBgHIAAgHIAAgqIAPAAIAACPIgMAAIgCgOIgBAAQgLAQgTAAQgUAAgLgOgAgUgHQgHAIAAATQAAAUAHAKQAHAKANAAQAPAAAHgJQAHgIAAgUIAAgDQAAgUgHgJQgHgJgPAAQgNAAgHALg");
	this.shape_76.setTransform(7.5,37);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#4D616F").s().p("AgOAgIAAg7IgPAAIAAgHIAPgGIAGgWIAIAAIAAAXIAdAAIAAAMIgdAAIAAA6QAAAKAEAEQAEAFAHAAIAJgBIAGAAIAAALQgDACgEAAIgJABQgcAAAAgfg");
	this.shape_77.setTransform(99.8,16.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#4D616F").s().p("AgDAYIgEgvIAPAAIgDAvg");
	this.shape_78.setTransform(94.4,11.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#4D616F").s().p("AAaAzIAAhAQAAgMgFgGQgGgGgMAAQgOAAgIAIQgHAJAAAUIAAAzIgPAAIAAhjIAMAAIADANIAAAAQAGgHAIgEQAJgEAIAAQASAAAJAJQAKAIAAAUIAABAg");
	this.shape_79.setTransform(86.7,17.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#4D616F").s().p("AgcAmQgOgNAAgZQAAgWANgPQAMgOASAAQAUAAAKAMQAMANAAAUIAAAIIhEAAQAAASAJAJQAJAKANAAQAQAAAQgHIAAAOIgPAFQgIABgJAAQgWAAgMgOgAgQgeQgHAIgCAOIAzAAQAAgPgHgIQgGgHgMAAQgKAAgHAIg");
	this.shape_80.setTransform(75.5,17.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#4D616F").s().p("AgHAyIgnhjIAQAAIAXA6QAHAVAAAGIAAAAIAGgUIAYhBIARAAIgmBjg");
	this.shape_81.setTransform(65.4,17.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#4D616F").s().p("AgfAsQgJgHAAgPQAAgdAwgBIARgBIAAgGQAAgMgFgGQgFgFgMAAQgKAAgQAHIgFgLQAIgEAIgDQAKgCAGAAQATAAAIAIQAKAIgBASIAABDIgLAAIgDgOIgBAAQgIAJgHAEQgHADgKAAQgPAAgJgIgAAKABQgRABgIAFQgIAFAAAKQAAAJAFAEQAFAEAJAAQANAAAIgHQAIgIAAgPIAAgJg");
	this.shape_82.setTransform(55.1,17.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#4D616F").s().p("AAaBIIAAhCQAAgKgFgHQgGgGgMAAQgOAAgIAJQgHAIAAATIAAA1IgPAAIAAiPIAPAAIAAAsIgBANIABAAQAFgHAJgEQAIgFAJAAQASAAAKAJQAJAJAAARIAABDg");
	this.shape_83.setTransform(44.4,15.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#4D616F").s().p("AgGBIIAAiPIANAAIAACPg");
	this.shape_84.setTransform(31.2,15.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#4D616F").s().p("AgGBIIAAiPIANAAIAACPg");
	this.shape_85.setTransform(26.4,15.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#4D616F").s().p("AgGBFIAAhjIANAAIAABjgAgFgyQgDgDAAgFQAAgFADgDQACgCADAAQADAAADACQACADAAAFQAAAFgCADQgDACgDAAQgDAAgCgCg");
	this.shape_86.setTransform(21.6,15.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#4D616F").s().p("AgOAgIAAg7IgOAAIAAgHIAOgGIAGgWIAIAAIAAAXIAdAAIAAAMIgdAAIAAA6QAAAKADAEQAFAFAIAAIAIgBIAFAAIAAALQgCACgEAAIgJABQgcAAAAgfg");
	this.shape_87.setTransform(15.8,16.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#4D616F").s().p("AgpA/IAAgPQAIADAKACQAKACAJAAQAOAAAJgGQAHgGAAgKQAAgHgDgFQgDgEgGgEQgHgEgLgFQgTgFgIgJQgIgJgBgPQAAgQAMgJQAMgJASAAQAUAAARAHIgFAOQgRgHgQAAQgLAAgGAFQgIAGABAJQgBAHADAFQACAEAHAEQAGAEALAEQAVAGAIAJQAIAIAAAOQAAASgNAKQgNAKgUAAQgYAAgNgGg");
	this.shape_88.setTransform(7.3,15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,137,204.7);


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
	this.shape.setTransform(93.8,16.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTAmQgJgFgFgKQgFgKAAgNQAAgUALgLQAKgMARAAQASAAAKAMQALAMAAATQAAAUgLAMQgKAMgSAAQgKAAgJgGgAgSgYQgGAJAAAPQAAAQAGAIQAHAJALAAQAMAAAHgJQAGgIAAgQQAAgPgGgIQgHgJgMAAQgLAAgHAIg");
	this.shape_1.setTransform(83,16.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAdA4Ig8hdIgBAAIABAeIAAA/IgMAAIAAhvIAPAAIA8BdIABAAIgBgOIAAgQIAAg/IAMAAIAABvg");
	this.shape_2.setTransform(72.2,14.8);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7,p:{y:14.7}},{t:this.shape_6,p:{y:18}},{t:this.shape_5,p:{y:18}},{t:this.shape_4,p:{y:14.4}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:83,y:16.2}},{t:this.shape,p:{x:93.8,y:16.2}}]}).to({state:[{t:this.shape_7,p:{y:12.7}},{t:this.shape_6,p:{y:16}},{t:this.shape_5,p:{y:16}},{t:this.shape_4,p:{y:12.4}},{t:this.shape_9},{t:this.shape_8},{t:this.shape_1,p:{x:80.8,y:14.2}},{t:this.shape,p:{x:91.5,y:14.2}}]},1).to({state:[{t:this.shape_7,p:{y:16.7}},{t:this.shape_6,p:{y:20}},{t:this.shape_5,p:{y:20}},{t:this.shape_4,p:{y:16.4}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_1,p:{x:80.8,y:18.2}},{t:this.shape,p:{x:91.5,y:18.2}}]},1).to({state:[]},1).wait(1));

	// Layer 1
	this.instance = new lib.btn();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:-2},0).wait(1).to({y:2},0).wait(1).to({scaleX:1.38,scaleY:20,x:-22,y:-551.9},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,116,30);


(lib.bg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,290);


(lib.arr_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.arr();
	this.instance.setTransform(-10,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,0,20,18);


// stage content:
(lib._160x600_Canvas = function(mode,startPosition,loop) {
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
	this.clickTag_mc.setTransform(22,551);
	this.clickTag_mc.alpha = 0;
	new cjs.ButtonHelper(this.clickTag_mc, 0, 1, 2, false, new lib.cta(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickTag_mc).to({alpha:1},5).wait(65));

	// logo
	this.instance = new lib.logo_1();
	this.instance.setTransform(80,311.5,1,1,0,0,0,51,11.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(32).to({_off:false},0).to({y:266.5,alpha:1},6).to({y:273.5},4).wait(28));

	// text
	this.instance_1 = new lib.text();
	this.instance_1.setTransform(66.5,416.5,1,1,0,0,0,52,106.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(38).to({_off:false},0).to({alpha:1},9).wait(23));

	// text bg
	this.instance_2 = new lib.text_bg();
	this.instance_2.setTransform(60,115,1,1,0,0,0,60,115);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).to({y:425,alpha:1},10,cjs.Ease.get(-1)).to({y:415},4).wait(37));

	// arr
	this.instance_3 = new lib.arr_1();
	this.instance_3.setTransform(80,521,1,1,0,0,0,0,9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(48).to({_off:false},0).to({y:538},5).to({y:534},3).wait(14));

	// bg image
	this.instance_4 = new lib.bg_1();
	this.instance_4.setTransform(60,455,1,1,0,0,0,60,145);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).to({y:145,alpha:1},10,cjs.Ease.get(1)).to({y:155},4).wait(47));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(102,849,116,34);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;