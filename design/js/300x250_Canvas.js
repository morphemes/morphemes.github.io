(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 20,
	color: "#0099D6",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/300x250_Canvas_atlas_.png", id:"300x250_Canvas_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"300x250_Canvas_atlas_", frames: [[118,127,20,18],[0,0,300,100],[0,102,116,30],[118,102,102,23]]}
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
	this.spriteSheet = ss["300x250_Canvas_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg = function() {
	this.spriteSheet = ss["300x250_Canvas_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.btn = function() {
	this.spriteSheet = ss["300x250_Canvas_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ehealth_green = function() {
	this.spriteSheet = ss["300x250_Canvas_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.text_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#8CC63E","#0099D6"],[0,1],0,39.7,0,-39.6).s().p("A3bGQIAAsfMAu2AAAIAAMfg");
	this.shape.setTransform(150,40);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,80);


(lib.text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgFA7QgDgDgBgGQAAgLAJAAQAFAAACADQADADAAAFQAAAFgDADQgCAEgFAAQgDgBgCgCgAgDAaIgEhXIAQAAIgFBXg");
	this.shape.setTransform(118,48.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgoBAIAAgLIAKABQAOAAAHgQIAFgNIglhZIAPAAIAUA0QAGAPAAAIIAAAAIAFgMIAWg/IAPAAIgnBlQgEAQgHAGQgIAHgLAAQgHAAgGgCg");
	this.shape_1.setTransform(111.4,52);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfApIAAgNQAHADAHACQAIACAHAAQAJAAAFgDQAGgEAAgGQAAgGgEgDQgFgEgLgFQgNgEgFgDQgGgEgCgEQgDgFAAgFQAAgMAJgGQAJgGAOgBQAPAAAOAHIgFAKQgOgFgLAAQgIAAgFADQgFADAAAGQAAADACACQACADAEACIAOAIQAQAEAGAFQAGAGAAAJQAAANgKAHQgJAHgPAAQgTAAgKgGg");
	this.shape_2.setTransform(103.2,49.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgbAoQgIgIAAgMQAAgaAqgBIAQgBIAAgFQAAgLgFgFQgFgFgKAAQgKAAgOAHIgEgLQAHgDAIgDQAIgCAGAAQAQAAAIAIQAIAHAAAQIAAA8IgKAAIgDgNIgBAAQgGAIgIADQgGAEgJAAQgNgBgHgGgAAIABQgOAAgIAFQgHAFAAAJQAAAIAFADQAFAEAHAAQALABAIgIQAHgHAAgNIAAgHg");
	this.shape_3.setTransform(94.1,49.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgZAiQgMgMAAgVQAAgUALgNQALgNAQgBQARABAKAKQAKAMAAATIAAAGIg9AAQAAAQAJAIQAHAIAMAAQAOAAAPgFIAAAMIgOAFIgQABQgRAAgMgNgAgOgbQgHAHgCANIAuAAQAAgNgFgHQgHgHgKAAQgJAAgGAHg");
	this.shape_4.setTransform(84.9,49.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgfA7QgKgGAAgMQgBgJAGgGQAGgGAJgCQgDgBgDgEQgCgDAAgFQAAgEACgCQADgEAGgDQgHgDgEgHQgFgHAAgJQAAgPAJgIQAJgIAQAAQAFAAAGABIAfAAIAAAJIgRACIAFAIQABAEABAGQAAAOgJAHQgKAIgOAAIgHAAQgJAEAAAGQAAADADACQADACAIAAIAOAAQAPAAAHAGQAJAGAAAMQAAAPgMAIQgNAIgVAAQgSAAgJgHgAgXAcQgFAEAAAJQAAAHAGAEQAHAEALAAQAQAAAIgGQAIgFAAgJQAAgHgFgDQgEgDgNAAIgOAAQgJAAgGAFgAgQgyQgEAFAAAKQAAAKAFAFQAFAFAKAAQASAAAAgUQAAgUgTAAQgJAAgGAFg");
	this.shape_5.setTransform(71,51.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAYAuIAAg5QAAgLgFgGQgFgFgLAAQgNAAgGAIQgGAHAAASIAAAuIgPAAIAAhZIAMAAIACAMIABAAQAEgGAHgEQAIgEAHAAQARAAAJAIQAHAIABARIAAA6g");
	this.shape_6.setTransform(61.2,49.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgGA+IAAhZIANAAIAABZgAgEgtQgDgCAAgEQAAgGADgBQACgDACAAQADAAADADQABABAAAGQAAAEgBACQgDADgDAAQgCAAgCgDg");
	this.shape_7.setTransform(53.8,48.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgmBCIAAiCIALAAIABANIABAAQAGgIAHgDQAHgDAHAAQASAAAKAMQAKAMAAAXQAAAUgKANQgLAMgRAAQgHAAgHgDQgHgEgGgGIgBAAIABAPIAAAlgAgSguQgHAIAAARIAAADQAAASAHAHQAGAIAMAAQAMAAAHgJQAGgIAAgQQAAgSgGgJQgHgJgMAAQgMAAgGAIg");
	this.shape_8.setTransform(46.7,51.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgnBCIAAiCIAMAAIACANIABAAQAEgIAIgDQAHgDAHAAQASAAAKAMQAJAMAAAXQAAAUgJANQgLAMgRAAQgHAAgHgDQgIgEgEgGIgBAAIABAPIAAAlgAgSguQgGAIAAARIAAADQAAASAGAHQAGAIANAAQALAAAHgJQAHgIAAgQQAAgSgHgJQgHgJgMAAQgMAAgGAIg");
	this.shape_9.setTransform(36.3,51.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgUApQgKgGgFgLQgFgKAAgOQAAgVALgMQALgNASAAQATAAALANQALANAAAUQAAAWgLAMQgLANgTAAQgLAAgJgGgAgTgZQgHAJAAAQQAAARAHAJQAHAJAMAAQANAAAHgJQAHgJAAgRQAAgQgHgJQgHgJgNAAQgMAAgHAJg");
	this.shape_10.setTransform(25.7,49.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAYBAIAAg7QAAgJgFgGQgFgFgLAAQgMAAgHAIQgGAHAAAQIAAAwIgPAAIAAh/IAPAAIAAAnIgBAMIABAAQADgHAIgDQAHgFAIAAQARABAJAHQAHAJABAPIAAA7g");
	this.shape_11.setTransform(15.4,48);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgfApIAAgNQAHADAHACQAIACAHAAQAJAAAFgDQAGgEAAgGQAAgGgEgDQgFgEgLgFQgNgEgFgDQgGgEgCgEQgDgFAAgFQAAgMAJgGQAJgGAOgBQAPAAAOAHIgFAKQgOgFgLAAQgIAAgFADQgFADAAAGQAAADACACQACADAEACIAOAIQAQAEAGAFQAGAGAAAJQAAANgKAHQgJAHgPAAQgTAAgKgGg");
	this.shape_12.setTransform(6.1,49.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgZAjQgMgNAAgWQAAgUALgNQALgMAQAAQARAAAKALQAKALAAASIAAAHIg8AAQAAAQAIAJQAHAHAMABQAPAAAOgHIAAANIgNAEIgQABQgTABgLgMgAgOgbQgHAHgBANIAtAAQAAgNgGgHQgFgHgLAAQgJAAgGAHg");
	this.shape_13.setTransform(251.4,32.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgUAjQgLgMAAgXQAAgVALgMQAKgMATAAIANABQAHABAEACIgFAMIgKgDIgKgCQgZABAAAhQAAARAHAJQAGAIALABQAMAAAMgGIAAANQgJAEgOAAQgSABgKgMg");
	this.shape_14.setTransform(242.8,32.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAYAuIAAg5QAAgLgFgGQgGgFgKAAQgNAAgGAIQgHAHABASIAAAuIgPAAIAAhZIAMAAIACAMIABAAQAEgGAIgEQAHgEAIAAQAQAAAJAIQAHAIAAARIAAA6g");
	this.shape_15.setTransform(233.3,32.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgcAnQgHgGAAgNQAAgZAqgCIAQAAIAAgGQgBgLgEgFQgFgFgKAAQgKAAgOAHIgEgKQAGgFAJgBQAIgCAGAAQAQgBAIAIQAIAHAAAQIAAA8IgLAAIgCgNIgBAAQgGAJgIADQgGACgJAAQgNABgIgIgAAIABQgOABgHAEQgIAEAAAKQAAAHAFAEQAEAFAJAAQAKgBAIgHQAHgHAAgMIAAgJg");
	this.shape_16.setTransform(223.1,32.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgZAuIAAhZIAMAAIABARIABAAQAFgJAGgFQAGgFAJAAIALABIgCANIgKgBQgLAAgGAJQgIAJAAANIAAAvg");
	this.shape_17.setTransform(216.1,32.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgcAmQgJgIAAgRIAAg6IAPAAIAAA5QgBALAGAGQAFAFAKAAQANAAAHgHQAGgIAAgSIAAguIAOAAIAABZIgLAAIgDgMIgBAAQgEAHgHADQgHAEgJAAQgQAAgIgIg");
	this.shape_18.setTransform(206.7,32.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgfApIAAgNQAHAEAHACQAIACAHAAQAJgBAFgDQAGgDAAgIQAAgFgEgEQgFgDgLgGQgNgDgFgDQgGgEgCgEQgDgEAAgHQAAgLAJgGQAJgHAOABQAPAAAOAFIgFAMQgOgGgLAAQgIAAgFADQgFADAAAFQAAAEACADQACACAEACIAOAHQAQAFAGAFQAGAGAAAJQAAANgKAHQgJAGgPAAQgTAAgKgFg");
	this.shape_19.setTransform(197.6,32.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAYAuIAAg5QAAgLgFgGQgGgFgKAAQgNAAgGAIQgGAHgBASIAAAuIgOAAIAAhZIAMAAIACAMIAAAAQAFgGAHgEQAIgEAHAAQARAAAJAIQAIAIAAARIAAA6g");
	this.shape_20.setTransform(188.3,32.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgFA+IAAhZIALAAIAABZgAgEgsQgCgDAAgFQAAgFACgCQACgCACAAQADAAACACQACACAAAFQAAAFgCADQgCABgDAAQgCAAgCgBg");
	this.shape_21.setTransform(180.9,31.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAYBAIAAg7QAAgJgFgFQgFgGgLAAQgMAAgHAIQgGAHgBARIAAAvIgNAAIAAh/IANAAIAAAnIgBALIABAAQAFgGAHgEQAIgDAHAAQARAAAIAIQAJAHgBAPIAAA8g");
	this.shape_22.setTransform(169.1,30.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgNAdIAAg1IgMAAIAAgGIAMgGIAHgTIAGAAIAAAVIAaAAIAAAKIgaAAIAAA0QAAAIADAFQAEAEAHAAIAHAAIAGgCIAAALIgHACIgIAAQgYAAgBgbg");
	this.shape_23.setTransform(160.8,31.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgGBAIAAh/IANAAIAAB/g");
	this.shape_24.setTransform(155.7,30.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgcAnQgHgGAAgNQAAgZAqgCIAPAAIAAgGQAAgLgEgFQgFgFgKAAQgJAAgPAHIgEgKQAHgFAIgBQAIgCAGAAQAQgBAIAIQAIAHAAAQIAAA8IgLAAIgCgNIgBAAQgHAJgGADQgHACgIAAQgOABgIgIgAAIABQgOABgHAEQgIAEAAAKQAAAHAFAEQAEAFAJAAQALgBAGgHQAIgHAAgMIAAgJg");
	this.shape_25.setTransform(148.6,32.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgZAjQgMgNAAgWQAAgUALgNQALgMAQAAQARAAAKALQAKALAAASIAAAHIg8AAQAAAQAIAJQAHAHAMABQAPAAAOgHIAAANIgNAEIgQABQgTABgLgMgAgOgbQgHAHgBANIAtAAQAAgNgGgHQgFgHgLAAQgJAAgGAHg");
	this.shape_26.setTransform(139.4,32.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAYBAIAAg7QAAgJgFgFQgGgGgKAAQgNAAgGAIQgHAHABARIAAAvIgOAAIAAh/IAOAAIAAAnIgCALIACAAQAEgGAHgEQAIgDAIAAQAQAAAJAIQAHAHAAAPIAAA8g");
	this.shape_27.setTransform(129.4,30.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgfApIAAgNQAHAEAHACQAIACAHAAQAJgBAFgDQAGgDAAgIQAAgFgEgEQgFgDgLgGQgNgDgFgDQgGgEgCgEQgDgEAAgHQAAgLAJgGQAJgHAOABQAPAAAOAFIgFAMQgOgGgLAAQgIAAgFADQgFADAAAFQAAAEACADQACACAEACIAOAHQAQAFAGAFQAGAGAAAJQAAANgKAHQgJAGgPAAQgTAAgKgFg");
	this.shape_28.setTransform(115.7,32.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgZAjQgMgNAAgWQAAgUALgNQAKgMARAAQARAAAKALQAKALAAASIAAAHIg8AAQAAAQAHAJQAIAHAMABQAOAAAPgHIAAANIgNAEIgQABQgTABgLgMgAgPgbQgGAHgBANIAtAAQAAgNgGgHQgFgHgLAAQgJAAgHAHg");
	this.shape_29.setTransform(106.9,32.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AATBAIgegrIgLAJIAAAiIgNAAIAAh/IANAAIAABCIAAAPIAAAAIALgOIAcgdIAQAAIgjAlIAmA0g");
	this.shape_30.setTransform(98.6,30.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgcAnQgHgGAAgNQAAgZAqgCIAQAAIAAgGQgBgLgEgFQgFgFgKAAQgKAAgOAHIgEgKQAGgFAJgBQAIgCAGAAQAQgBAIAIQAIAHAAAQIAAA8IgLAAIgCgNIgBAAQgGAJgIADQgGACgJAAQgNABgIgIgAAIABQgOABgHAEQgIAEAAAKQAAAHAFAEQAEAFAJAAQAKgBAIgHQAHgHAAgMIAAgJg");
	this.shape_31.setTransform(88.5,32.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAyAuIAAg5QABgLgFgGQgEgFgLAAQgMAAgHAHQgFAIgBAPIAAAxIgLAAIAAg5QgBgLgEgGQgEgFgKAAQgOAAgFAIQgHAHAAASIAAAuIgOAAIAAhZIAMAAIACAMIAAAAQAEgGAIgEQAHgEAIAAQAWAAAEAQIABAAQAEgIAIgEQAIgEAJAAQAQAAAIAIQAIAIAAARIAAA6g");
	this.shape_32.setTransform(76.2,32.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAYBAIAAg7QAAgJgFgFQgGgGgKAAQgNAAgGAIQgGAHgBARIAAAvIgOAAIAAh/IAOAAIAAAnIAAALIAAAAQAEgGAIgEQAHgDAIAAQARAAAIAIQAJAHAAAPIAAA8g");
	this.shape_33.setTransform(58.7,30.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgMAdIAAg1IgOAAIAAgGIAOgGIAGgTIAGAAIAAAVIAaAAIAAAKIgaAAIAAA0QAAAIAEAFQADAEAHAAIAHAAIAFgCIAAALIgGACIgIAAQgZAAABgbg");
	this.shape_34.setTransform(50.4,31.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgGBAIAAh/IANAAIAAB/g");
	this.shape_35.setTransform(45.3,30.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgcAnQgHgGAAgNQAAgZAqgCIAQAAIAAgGQgBgLgEgFQgFgFgKAAQgKAAgOAHIgEgKQAGgFAJgBQAIgCAGAAQAQgBAIAIQAIAHAAAQIAAA8IgLAAIgCgNIgBAAQgGAJgIADQgGACgJAAQgNABgIgIgAAIABQgOABgHAEQgIAEAAAKQAAAHAFAEQAEAFAJAAQAKgBAHgHQAIgHAAgMIAAgJg");
	this.shape_36.setTransform(38.1,32.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgZAjQgMgNAAgWQAAgUALgNQAKgMARAAQARAAAKALQAKALAAASIAAAHIg9AAQABAQAHAJQAIAHAMABQAOAAAPgHIAAANIgOAEIgPABQgSABgMgMgAgPgbQgGAHgCANIAuAAQAAgNgGgHQgFgHgLAAQgJAAgHAHg");
	this.shape_37.setTransform(28.9,32.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAfA8IAAg5Ig9AAIAAA5IgPAAIAAh3IAPAAIAAA0IA9AAIAAg0IAPAAIAAB3g");
	this.shape_38.setTransform(17.8,31.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgZAjQgMgNAAgWQAAgUALgNQALgMAQAAQARAAAKALQAKALAAASIAAAHIg8AAQgBAQAJAJQAHAHAMABQAPAAAOgHIAAANIgNAEIgRABQgRABgMgMgAgOgbQgHAHgBANIAtAAQAAgNgFgHQgHgHgKAAQgJAAgGAHg");
	this.shape_39.setTransform(6.8,32.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgFAIQgEgDAAgFQABgEACgDQACgDAEAAQAEAAADADQACADAAAEQAAAFgCADQgDADgEAAQgDAAgCgDg");
	this.shape_40.setTransform(256.4,19.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgdA1QgJgMgBgXQABgUAJgNQALgMARAAQAQAAALANIABAAIgBgGIAAgHIAAglIANAAIAAB/IgKAAIgCgMIgBAAQgKAOgRAAQgRAAgLgMgAgRgGQgHAHAAARQAAASAGAIQAHAJALAAQANAAAGgHQAHgIAAgRIAAgDQAAgSgHgIQgGgIgNAAQgMAAgFAKg");
	this.shape_41.setTransform(248.7,13.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgZAiQgMgMAAgWQAAgTALgNQAKgNARgBQARABAKAKQAKAMAAATIAAAGIg9AAQABAQAHAIQAIAJAMgBQAOAAAPgFIAAAMIgOAEIgPACQgTAAgLgNgAgPgbQgGAHgCANIAuAAQAAgNgFgHQgHgHgKAAQgJAAgHAHg");
	this.shape_42.setTransform(239,15.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgZAuIAAhZIAMAAIABARIABAAQAFgJAGgFQAGgFAJAAIALABIgCANIgKgBQgLAAgGAJQgIAJAAANIAAAvg");
	this.shape_43.setTransform(231.6,15.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgcAmQgJgIAAgRIAAg6IAPAAIAAA5QAAALAEAGQAGAFAKAAQANAAAGgHQAHgIAAgSIAAguIAOAAIAABZIgMAAIgCgMIgBAAQgDAHgIADQgHAEgIAAQgRAAgIgIg");
	this.shape_44.setTransform(222.3,15.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgfApIAAgNQAHADAHACQAIACAHAAQAJABAFgEQAGgEAAgGQAAgGgEgDQgFgFgLgEQgNgEgFgDQgGgDgCgFQgDgFAAgFQAAgMAJgGQAJgGAOgBQAPAAAOAHIgFAKQgOgFgLAAQgIAAgFADQgFADAAAGQAAADACACQACADAEADIAOAHQAQAEAGAFQAGAGAAAJQAAANgKAHQgJAHgPAAQgTAAgKgGg");
	this.shape_45.setTransform(213.1,15.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAYAuIAAg5QAAgLgFgGQgFgFgLAAQgNAAgGAIQgGAHAAASIAAAuIgPAAIAAhZIAMAAIACAMIABAAQAEgGAHgEQAIgEAIAAQAQAAAJAIQAHAIABARIAAA6g");
	this.shape_46.setTransform(203.8,15.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgGA+IAAhZIAMAAIAABZgAgEgtQgDgCAAgEQAAgGADgBQACgDACAAQADAAADADQABABAAAGQAAAEgBACQgDACgDABQgCgBgCgCg");
	this.shape_47.setTransform(196.4,13.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAYAuIAAg5QAAgLgFgGQgFgFgLAAQgMAAgHAIQgGAHAAASIAAAuIgPAAIAAhZIAMAAIACAMIABAAQAEgGAHgEQAIgEAHAAQARAAAJAIQAHAIABARIAAA6g");
	this.shape_48.setTransform(189.1,15.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgcAmQgJgIAAgRIAAg6IAPAAIAAA5QAAALAEAGQAGAFAKAAQANAAAGgHQAHgIAAgSIAAguIAOAAIAABZIgMAAIgCgMIgBAAQgDAHgIADQgHAEgIAAQgRAAgIgIg");
	this.shape_49.setTransform(178.5,15.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgoBAIAAgLIAKABQAOAAAHgQIAFgNIglhZIAPAAIAUA0QAGAPAAAIIAAAAIAFgMIAWg/IAPAAIgnBlQgEAQgHAGQgIAHgLgBQgHAAgGgBg");
	this.shape_50.setTransform(164.7,17.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgcAoQgHgIAAgMQAAgaAqgBIAPgBIAAgFQABgLgFgFQgFgFgKAAQgJAAgPAHIgEgLQAHgEAIgCQAIgCAGAAQAQABAIAHQAIAHAAAQIAAA8IgKAAIgDgNIgBAAQgHAJgGACQgHADgIABQgOgBgIgGgAAIABQgOAAgIAFQgHAEAAAKQAAAIAFAEQAFADAHAAQAMABAGgIQAIgHAAgNIAAgIg");
	this.shape_51.setTransform(155.4,15.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgdA1QgJgMgBgXQABgUAJgNQALgMARAAQAQAAALANIABAAIgBgGIAAgHIAAglIANAAIAAB/IgKAAIgCgMIgBAAQgKAOgRAAQgRAAgLgMgAgRgGQgHAHAAARQAAASAGAIQAGAJAMAAQANAAAHgHQAGgIAAgRIAAgDQAAgSgGgIQgHgIgNAAQgMAAgFAKg");
	this.shape_52.setTransform(145.5,13.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgZAuIAAhZIAMAAIABARIABAAQAFgJAGgFQAGgFAJAAIALABIgCANIgKgBQgLAAgGAJQgIAJAAANIAAAvg");
	this.shape_53.setTransform(133.3,15.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgZAiQgMgMAAgWQAAgTALgNQALgNAQgBQARABAKAKQAKAMAAATIAAAGIg9AAQAAAQAIAIQAIAJAMgBQAOAAAPgFIAAAMIgOAEIgQACQgRAAgMgNgAgPgbQgGAHgCANIAuAAQAAgNgFgHQgHgHgKAAQgJAAgHAHg");
	this.shape_54.setTransform(124.5,15.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AAYBAIAAg7QAAgJgFgGQgGgFgKAAQgNAAgGAIQgGAHgBAQIAAAwIgOAAIAAh/IAOAAIAAAnIAAAMIAAAAQAEgHAIgDQAHgFAIAAQARAAAIAIQAJAJAAAPIAAA7g");
	this.shape_55.setTransform(114.5,13.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgMAdIAAg1IgOAAIAAgGIAOgGIAGgTIAGAAIAAAVIAaAAIAAAKIgaAAIAAA0QAAAIAEAFQADAEAHAAIAHAAIAFgCIAAALIgGACIgIAAQgZAAABgbg");
	this.shape_56.setTransform(106.2,14.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgUApQgKgGgFgLQgFgKAAgOQAAgVALgMQALgNASAAQATAAALANQALANAAAUQAAAWgLAMQgLANgTAAQgLAAgJgGgAgTgZQgHAJAAAQQAAARAHAJQAHAJAMAAQANAAAHgJQAHgJAAgRQAAgQgHgJQgHgJgNAAQgMAAgHAJg");
	this.shape_57.setTransform(98.1,15.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AAYAuIAAg5QAAgLgFgGQgGgFgKAAQgNAAgGAIQgHAHAAASIAAAuIgNAAIAAhZIALAAIACAMIAAAAQAFgGAIgEQAHgEAIAAQAQAAAIAIQAJAIgBARIAAA6g");
	this.shape_58.setTransform(87.8,15.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgbAoQgIgIAAgMQAAgaAqgBIAQgBIAAgFQAAgLgFgFQgFgFgKAAQgKAAgOAHIgEgLQAHgEAIgCQAIgCAGAAQAQABAIAHQAIAHAAAQIAAA8IgLAAIgCgNIgBAAQgGAJgIACQgGADgJABQgNgBgHgGgAAIABQgOAAgIAFQgHAEAAAKQAAAIAFAEQAEADAJAAQAKABAIgIQAHgHAAgNIAAgIg");
	this.shape_59.setTransform(77.5,15.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgUApQgKgGgFgLQgFgKAAgOQAAgVALgMQALgNASAAQATAAALANQALANAAAUQAAAWgLAMQgLANgTAAQgLAAgJgGgAgTgZQgHAJAAAQQAAARAHAJQAHAJAMAAQANAAAHgJQAHgJAAgRQAAgQgHgJQgHgJgNAAQgMAAgHAJg");
	this.shape_60.setTransform(63.5,15.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AggA7QgKgGABgMQAAgJAFgGQAFgGAKgCQgEgBgCgEQgCgDAAgFQAAgEADgCQACgEAGgDQgHgDgFgHQgEgHAAgJQAAgPAJgIQAJgIAQAAQAGAAAFABIAfAAIAAAJIgQACIAEAIQACAEgBAGQABAOgKAHQgIAIgPAAIgHAAQgJAEAAAGQAAADADACQADACAHAAIAPAAQAPAAAHAGQAIAGAAAMQAAAPgLAIQgNAIgVAAQgSAAgKgHgAgXAcQgFAEAAAJQAAAHAGAEQAGAEAMAAQAQAAAIgGQAIgFAAgJQAAgHgFgDQgEgDgNAAIgOAAQgKAAgFAFgAgPgyQgGAFAAAKQABAKAFAFQAGAFAJAAQASAAAAgUQAAgUgTAAQgJAAgFAFg");
	this.shape_61.setTransform(53.7,17.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgNAdIAAg1IgMAAIAAgGIAMgGIAHgTIAGAAIAAAVIAaAAIAAAKIgaAAIAAA0QAAAIADAFQAEAEAHAAIAHAAIAGgCIAAALIgHACIgIAAQgYAAgBgbg");
	this.shape_62.setTransform(41.7,14.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgDAWIgDgqIANAAIgDAqg");
	this.shape_63.setTransform(36.8,10.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AAYAuIAAg5QAAgLgFgGQgGgFgKAAQgNAAgGAIQgHAHABASIAAAuIgOAAIAAhZIALAAIACAMIABAAQAEgGAIgEQAHgEAIAAQAQAAAJAIQAHAIAAARIAAA6g");
	this.shape_64.setTransform(29.9,15.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgUApQgKgGgFgLQgFgKAAgOQAAgVALgMQALgNASAAQATAAALANQALANAAAUQAAAWgLAMQgLANgTAAQgLAAgJgGgAgTgZQgHAJAAAQQAAARAHAJQAHAJAMAAQANAAAHgJQAHgJAAgRQAAgQgHgJQgHgJgNAAQgMAAgHAJg");
	this.shape_65.setTransform(19.5,15.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgvA8IAAh3IAlAAQAaAAAQAQQAQAPAAAcQAAAcgQAQQgQAQgdAAgAggAwIARAAQAWAAAOgMQAMgNAAgXQAAgXgMgMQgMgMgVAAIgUAAg");
	this.shape_66.setTransform(8.5,14.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,286,61.5);


(lib.logo_color = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ehealth_green();

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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:-2},0).wait(1).to({y:2},0).wait(1).to({scaleX:2.59,scaleY:8.33,x:-93,y:-205},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,116,30);


(lib.bg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,100);


(lib.arrow_color = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.arr();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20,18);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo_color("synched",0);
	this.instance.setTransform(51,11.5,1,1,0,0,0,51,11.5);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 140, 198, 62, 0)];
	this.instance.cache(-2,-2,106,27);

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
(lib._300x250_Canvas = function(mode,startPosition,loop) {
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
	this.clickTag_mc.setTransform(92,206);
	this.clickTag_mc.alpha = 0;
	new cjs.ButtonHelper(this.clickTag_mc, 0, 1, 2, false, new lib.cta(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickTag_mc).to({alpha:1},5).wait(65));

	// logo
	this.instance = new lib.logo();
	this.instance.setTransform(107,45.5,1,1,0,0,0,51,11.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(32).to({_off:false},0).to({x:57},6).to({x:64},4).wait(28));

	// text
	this.instance_1 = new lib.text();
	this.instance_1.setTransform(71,222.5,1,1,0,0,0,52,106.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(38).to({_off:false},0).to({alpha:1},9).wait(23));

	// text bg
	this.instance_2 = new lib.text_bg();
	this.instance_2.setTransform(60,115,1,1,0,0,0,60,115);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).to({y:235,alpha:1},10,cjs.Ease.get(-1)).to({y:225},4).wait(37));

	// arr
	this.instance_3 = new lib.arr_1();
	this.instance_3.setTransform(150,181,1,1,0,0,0,0,9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(48).to({_off:false},0).to({y:196},5).to({y:192},3).wait(14));

	// bg image
	this.instance_4 = new lib.bg_1();
	this.instance_4.setTransform(125,222,1,1,0,0,0,125,32);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).to({y:32,alpha:1},10,cjs.Ease.get(1)).to({y:42},4).wait(47));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(242,329,116,34);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;