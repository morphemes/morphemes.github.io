(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 970,
	height: 90,
	fps: 20,
	color: "#0099D6",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/970x90_Canvas_atlas_.png", id:"970x90_Canvas_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"970x90_Canvas_atlas_", frames: [[206,92,20,18],[0,0,250,90],[0,92,100,30],[102,92,102,23]]}
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
	this.spriteSheet = ss["970x90_Canvas_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg = function() {
	this.spriteSheet = ss["970x90_Canvas_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.btn = function() {
	this.spriteSheet = ss["970x90_Canvas_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.spriteSheet = ss["970x90_Canvas_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.text_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F69234").s().p("EgshAHCIAAuDMBZCAAAIAAODg");
	this.shape.setTransform(285,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,570,90);


(lib.text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIAMQgFgEAAgIQABgHADgDQADgFAGAAQAGAAAEAFQAEADgBAHQAAAHgDAEQgEAFgGAAQgFgBgDgDg");
	this.shape.setTransform(506.5,53.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAiBbIAAhTQAAgOgHgIQgIgIgPAAQgSAAgJAMQgKAKAAAYIAABDIgTAAIAAi1IATAAIAAA4IgBAQIACAAQAFgJALgFQALgGALAAQAYAAAMALQALAMAAAWIAABUg");
	this.shape_1.setTransform(496,45.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgSAoIAAhKIgTAAIAAgJIATgJIAIgbIAKAAIAAAeIAlAAIAAAPIglAAIAABKQAAALAFAGQAGAHAJAAIAKgBIAIgCIAAAPIgJADIgLABQgkAAAAgog");
	this.shape_2.setTransform(484.3,46.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAgBAIgYhKIgIgfIAAAAIgHAgIgZBJIgWAAIgjh/IAUAAIATBIQAHAZABAJIABAAIAEgRIAFgRIAXhIIATAAIAXBIQAHAUACAOIABAAIADgNIAYhdIAUAAIgjB/g");
	this.shape_3.setTransform(470.8,47.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgdA6QgOgIgIgPQgGgPAAgUQAAgeAPgRQAQgSAaAAQAbAAAPASQAQASABAdQgBAfgQASQgPARgbAAQgRAAgMgIgAgcgkQgKANABAXQgBAYAKANQALANARAAQATAAAJgNQALgNAAgYQAAgXgLgNQgJgNgTAAQgSAAgKANg");
	this.shape_4.setTransform(454.7,47.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgkBBIAAh/IARAAIACAZIABAAQAHgNAJgHQAJgHAMAAQAJAAAGABIgCATIgOgCQgQAAgJAMQgLANAAATIAABDg");
	this.shape_5.setTransform(443.9,47.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgwBBQgWgYAAgpQAAgZALgUQALgUAUgLQAUgLAZAAQAcAAAXALIgHARQgYgKgVAAQgdAAgSATQgSATAAAfQAAAiARASQARASAfAAQASAAARgEIAAg1IgmAAIAAgQIA6AAIAABSQgOAEgOACQgOADgSAAQglAAgWgXg");
	this.shape_6.setTransform(429.3,45.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAiBBIAAhRQAAgQgHgHQgIgIgPAAQgSAAgJALQgKALAAAZIAABBIgTAAIAAh/IAQAAIADASIABAAQAGgJALgGQAKgFAMAAQAXAAAMALQALAMAAAYIAABSg");
	this.shape_7.setTransform(407.2,47.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgdA6QgOgIgIgPQgGgPAAgUQAAgeAPgRQAQgSAaAAQAbAAAQASQAQASAAAdQAAAfgQASQgQARgbAAQgRAAgMgIgAgbgkQgLANABAXQgBAYALANQAKANARAAQATAAAJgNQAKgNAAgYQAAgXgKgNQgJgNgTAAQgSAAgJANg");
	this.shape_8.setTransform(392.5,47.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgrA6IAAgSQAJAFAKACQALADAJAAQAOAAAIgFQAIgFAAgKQAAgHgGgFQgHgGgRgHQgRgFgIgFQgHgFgFgGQgDgGAAgJQAAgQAMgJQANgJAUAAQAWAAAUAIIgHAQQgUgIgPAAQgNAAgGAFQgIAEABAIQgBAFADADQADAEAFADQAHAEAOAGQAXAHAIAIQAIAIAAANQAAASgOAJQgNAKgWAAQgZAAgOgIg");
	this.shape_9.setTransform(373.4,47.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgoA2QgMgMAAgYIAAhSIAUAAIAABSQAAAPAHAIQAHAIAPgBQASAAAKgLQAJgLAAgZIAAhBIATAAIAAB/IgQAAIgCgSIgBAAQgGAKgLAFQgLAFgLAAQgYAAgLgLg");
	this.shape_10.setTransform(360.1,48.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgdAxQgQgRAAggQAAgeAQgRQAPgSAaAAQAKAAAKACQAIACAGADIgGAQIgOgEIgOgCQglAAAAAwQAAAYAJAMQAKANARAAQAQAAARgHIAAARQgNAHgUAAQgZAAgPgRg");
	this.shape_11.setTransform(347.4,47.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgeA6QgNgIgIgPQgHgPAAgUQAAgeAQgRQAQgSAaAAQAaAAARASQAPASAAAdQAAAfgPASQgQARgbAAQgRAAgNgIgAgbgkQgLANAAAXQAAAYALANQAJANASAAQASAAAKgNQALgNgBgYQABgXgLgNQgJgNgTAAQgSAAgJANg");
	this.shape_12.setTransform(334.2,47.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AguBVIAAipIBdAAIAAASIhJAAIAAA+IBFAAIAAAQIhFAAIAABJg");
	this.shape_13.setTransform(321.6,45.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgoA2QgMgMAAgYIAAhSIAUAAIAABSQAAAPAHAIQAHAIAPgBQASAAAKgLQAJgLAAgZIAAhBIATAAIAAB/IgQAAIgCgSIgBAAQgGAKgLAFQgLAFgLAAQgYAAgLgLg");
	this.shape_14.setTransform(300.8,48.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgdA6QgOgIgIgPQgGgPAAgUQAAgeAPgRQAQgSAaAAQAbAAAQASQAQASAAAdQAAAfgQASQgQARgbAAQgRAAgMgIgAgbgkQgLANABAXQgBAYALANQAKANARAAQATAAAJgNQAKgNAAgYQAAgXgKgNQgJgNgTAAQgSAAgJANg");
	this.shape_15.setTransform(286.3,47.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgJBVIAAhBIg5hoIAWAAIAsBUIAthUIAWAAIg6BnIAABCg");
	this.shape_16.setTransform(273.5,45.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgkAxQgRgSAAgeQAAgdAQgTQAPgSAYAAQAYAAAOAQQAOAQAAAaIAAAKIhXAAQABAXALALQALAMARAAQAVAAAUgJIAAASQgKAEgJACQgJACgNAAQgbAAgQgRgAgVgnQgKAKgBASIBBAAQAAgSgIgKQgIgKgQAAQgNAAgJAKg");
	this.shape_17.setTransform(253.9,47.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgIBbIAAi1IARAAIAAC1g");
	this.shape_18.setTransform(244.1,45.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgJBYIAAh/IASAAIAAB/gAgGhAQgEgDAAgGQAAgIAEgCQACgEAEAAQAEAAADAEQAEACAAAIQAAAGgEADQgDAEgEgBQgEABgCgEg");
	this.shape_19.setTransform(238.1,45.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAiBbIAAhTQAAgOgHgIQgIgIgPAAQgSAAgJAMQgKAKAAAYIAABDIgTAAIAAi1IATAAIAAA4IgBAQIACAAQAFgJALgFQALgGALAAQAYAAAMALQALAMAAAWIAABUg");
	this.shape_20.setTransform(227.7,45.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAqBVIgjhwIgFgUIgCgOQgCAQgGASIghBwIgTAAIgvipIAWAAIAbBoQAGAWACASQADgVAHgVIAehmIATAAIAgBnQAGASAEAXQACgRAGgXIAbhoIAVAAIguCpg");
	this.shape_21.setTransform(209.2,45.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgkAxQgRgSAAgeQAAgdAQgTQAPgSAYAAQAYAAAOAQQAOAQAAAaIAAAKIhXAAQABAXALALQALAMARAAQAVAAAUgJIAAASQgKAEgJACQgJACgNAAQgbAAgQgRgAgVgnQgKAKgBASIBBAAQAAgSgIgKQgIgKgQAAQgNAAgJAKg");
	this.shape_22.setTransform(185.2,47.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgdAxQgQgRAAggQAAgeAQgRQAPgSAbAAQAJAAAKACQAIACAGADIgGAQIgOgEIgNgCQgmAAAAAwQAAAYAJAMQAKANARAAQAQAAARgHIAAARQgNAHgTAAQgbAAgOgRg");
	this.shape_23.setTransform(173,47.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAiBBIAAhRQAAgQgHgHQgIgIgPAAQgSAAgJALQgKALAAAZIAABBIgTAAIAAh/IAQAAIADASIABAAQAGgJALgGQAKgFAMAAQAXAAAMALQALAMAAAYIAABSg");
	this.shape_24.setTransform(159.7,47.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgnA4QgLgKAAgSQAAglA8gCIAWgBIAAgIQAAgOgGgIQgHgHgPAAQgNAAgVAKIgFgPQAJgFAMgDQALgDAJAAQAXAAALAKQALALAAAWIAABWIgOAAIgFgTIAAAAQgKAMgKAFQgJAEgMAAQgTAAgLgKgAAMABQgVABgLAHQgJAGgBANQAAALAHAGQAGAFALAAQARAAAKgKQAKgKAAgSIAAgLg");
	this.shape_25.setTransform(145.2,48);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgjBBIAAh/IAQAAIACAZIABAAQAHgNAJgHQAJgHAMAAQAJAAAHABIgDATIgOgCQgQAAgJAMQgLANAAATIAABDg");
	this.shape_26.setTransform(135.4,47.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgoA2QgMgMAAgYIAAhSIAUAAIAABSQAAAPAHAIQAHAIAPgBQASAAAKgLQAJgLAAgZIAAhBIATAAIAAB/IgQAAIgCgSIgBAAQgGAKgLAFQgLAFgLAAQgYAAgLgLg");
	this.shape_27.setTransform(122.1,48.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgsA6IAAgSQAJAFALACQALADAKAAQANAAAIgFQAIgFAAgKQAAgHgGgFQgHgGgQgHQgTgFgHgFQgHgFgEgGQgEgGAAgJQAAgQANgJQANgJAUAAQAVAAATAIIgHAQQgTgIgQAAQgLAAgIAFQgGAEgBAIQAAAFADADQACAEAHADQAFAEAPAGQAXAHAIAIQAIAIAAANQAAASgNAJQgNAKgXAAQgaAAgOgIg");
	this.shape_28.setTransform(109.2,47.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAiBBIAAhRQAAgQgHgHQgIgIgPAAQgSAAgJALQgKALAAAZIAABBIgTAAIAAh/IAQAAIADASIABAAQAGgJALgGQAKgFAMAAQAXAAAMALQALAMAAAYIAABSg");
	this.shape_29.setTransform(96.1,47.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgIBVIAAipIASAAIAACpg");
	this.shape_30.setTransform(85.3,45.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAiBbIAAhTQAAgOgHgIQgIgIgPAAQgSAAgJAMQgKAKAAAYIAABDIgTAAIAAi1IATAAIAAA4IgBAQIACAAQAFgJALgFQALgGALAAQAYAAAMALQALAMAAAWIAABUg");
	this.shape_31.setTransform(68.4,45.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgSAoIAAhKIgSAAIAAgJIASgJIAIgbIAKAAIAAAeIAlAAIAAAPIglAAIAABKQAAALAFAGQAGAHAJAAIAKgBIAHgCIAAAPIgJADIgLABQgjAAAAgog");
	this.shape_32.setTransform(56.7,46.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgIBbIAAi1IARAAIAAC1g");
	this.shape_33.setTransform(49.5,45.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgnA4QgLgKAAgSQAAglA8gCIAWgBIAAgIQAAgOgGgIQgHgHgPAAQgNAAgVAKIgFgPQAJgFALgDQAMgDAJAAQAXAAALAKQALALAAAWIAABWIgOAAIgFgTIAAAAQgKAMgKAFQgJAEgMAAQgTAAgLgKgAAMABQgVABgLAHQgJAGgBANQAAALAHAGQAGAFAMAAQAQAAAKgKQAKgKAAgSIAAgLg");
	this.shape_34.setTransform(39.4,48);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgkAxQgRgSAAgeQAAgdAQgTQAPgSAYAAQAYAAAOAQQAOAQAAAaIAAAKIhXAAQABAXALALQALAMARAAQAVAAAUgJIAAASQgKAEgJACQgJACgNAAQgbAAgQgRgAgVgnQgKAKgBASIBBAAQAAgSgIgKQgIgKgQAAQgNAAgJAKg");
	this.shape_35.setTransform(26.5,47.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAtBVIAAhQIhYAAIAABQIgVAAIAAipIAVAAIAABJIBYAAIAAhJIAUAAIAACpg");
	this.shape_36.setTransform(10.9,45.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgjBBIAAh/IAQAAIACAYIABAAQAHgMAJgHQAJgHAMAAQAJAAAGABIgCASIgOgBQgQAAgJANQgLAMAAATIAABDg");
	this.shape_37.setTransform(506.6,21.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgoA1QgMgKAAgZIAAhSIAUAAIAABRQAAAQAHAIQAHAIAPAAQASAAAKgMQAJgKAAgaIAAhBIATAAIAAB+IgQAAIgCgRIgBAAQgGAKgLAFQgLAFgLAAQgYAAgLgMg");
	this.shape_38.setTransform(493.4,21.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgeA6QgNgIgHgPQgIgPAAgUQAAgeAQgRQAQgSAaAAQAaAAAQASQARASgBAdQABAfgRASQgPARgbAAQgQAAgOgIgAgcgkQgJANgBAXQABAYAJANQAKANASAAQASAAALgNQAJgNABgYQgBgXgJgNQgLgNgSAAQgSAAgKANg");
	this.shape_39.setTransform(478.9,21.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgJBVIAAhBIg5hoIAWAAIAsBUIAthUIAWAAIg6BnIAABCg");
	this.shape_40.setTransform(466.1,19.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgkAxQgRgSAAgeQAAgdAQgTQAPgSAYAAQAYAAAOAQQAOAQAAAaIAAAKIhXAAQABAXALALQALAMARAAQAVAAAUgJIAAASQgKAEgJACQgJACgNAAQgbAAgQgRgAgVgnQgKAKgBASIBBAAQAAgSgIgKQgIgKgQAAQgNAAgJAKg");
	this.shape_41.setTransform(446.5,21.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgIBbIAAi1IARAAIAAC1g");
	this.shape_42.setTransform(436.7,18.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgpBLQgOgSAAggQAAgdAOgRQAOgTAZABQAZgBAOAUIABAAIgBgJIAAgJIAAg1IATAAIAAC0IgQAAIgDgRIAAAAQgOAUgZAAQgZAAgOgRgAgZgKQgKAMAAAYQAAAYAJANQAJANARAAQASAAAKgLQAJgLAAgYIAAgFQAAgZgJgLQgKgMgSAAQgRAAgIANg");
	this.shape_43.setTransform(426,18.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAiBBIAAhRQAAgQgHgHQgIgJgPAAQgSAAgJALQgKALAAAZIAABCIgTAAIAAh/IAQAAIADASIABAAQAGgKALgEQAKgGAMAAQAXAAAMALQALALAAAZIAABSg");
	this.shape_44.setTransform(411.6,21.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgnA4QgLgKAAgSQAAglA8gCIAWAAIAAgIQAAgPgHgIQgGgHgOAAQgPAAgTAKIgHgPQAKgFALgDQAMgDAJAAQAXAAALAKQALAKAAAXIAABVIgPAAIgDgSIgBAAQgKANgJADQgKAFgMAAQgUAAgKgKgAAMABQgVABgKAGQgLAHABANQAAALAGAFQAGAGALAAQARAAALgKQAJgKABgSIAAgMg");
	this.shape_45.setTransform(397.1,21.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAsBVIAAhQIhYAAIAABQIgUAAIAAipIAUAAIAABJIBYAAIAAhJIAVAAIAACpg");
	this.shape_46.setTransform(382,19.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAiBBIAAhRQAAgQgHgHQgIgJgPAAQgSAAgJALQgKALAAAZIAABCIgTAAIAAh/IAQAAIADASIABAAQAGgKALgEQAKgGAMAAQAXAAAMALQALALAAAZIAABSg");
	this.shape_47.setTransform(359.6,21.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgnA4QgLgKAAgSQAAglA8gCIAWAAIAAgIQAAgPgHgIQgGgHgOAAQgPAAgUAKIgGgPQAKgFAMgDQAKgDAKAAQAXAAALAKQALAKAAAXIAABVIgOAAIgFgSIAAAAQgKANgJADQgKAFgMAAQgUAAgKgKgAAMABQgVABgLAGQgKAHAAANQABALAGAFQAGAGAMAAQAQAAALgKQAKgKgBgSIAAgMg");
	this.shape_48.setTransform(345.1,21.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgrBBQgUgXAAgqQgBgZALgUQAJgUATgLQATgLAXAAQAbAAAUAKIgIARQgUgJgTAAQgbAAgQATQgQATAAAfQAAAhAQATQAQASAbAAQASAAAWgHIAAASQgRAHgaAAQgkAAgVgXg");
	this.shape_49.setTransform(331.7,19.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAiBbIAAhTQAAgOgHgIQgIgIgPAAQgSAAgJAMQgKAKAAAYIAABDIgTAAIAAi1IATAAIAAA4IgBAQIACAAQAFgJALgFQALgGALAAQAYAAAMALQALAMAAAWIAABUg");
	this.shape_50.setTransform(310.2,18.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgSAoIAAhKIgSAAIAAgJIASgJIAIgbIAKAAIAAAeIAlAAIAAAPIglAAIAABKQAAALAFAGQAGAHAJAAIAKgBIAHgCIAAAPIgJADIgLABQgjAAAAgog");
	this.shape_51.setTransform(298.5,19.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgIBbIAAi1IARAAIAAC1g");
	this.shape_52.setTransform(291.3,18.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgnA4QgLgKAAgSQAAglA8gCIAWAAIAAgIQAAgPgGgIQgHgHgPAAQgNAAgVAKIgFgPQAJgFALgDQALgDAKAAQAXAAALAKQALAKAAAXIAABVIgOAAIgEgSIgBAAQgKANgKADQgJAFgMAAQgTAAgLgKgAAMABQgVABgKAGQgLAHAAANQAAALAHAFQAGAGALAAQARAAAKgKQAKgKAAgSIAAgMg");
	this.shape_53.setTransform(281.2,21.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgkAxQgRgSAAgeQAAgdAQgTQAPgSAYAAQAYAAAOAQQAOAQAAAaIAAAKIhXAAQABAXALALQALAMARAAQAVAAAUgJIAAASQgKAEgJACQgJACgNAAQgbAAgQgRgAgVgnQgKAKgBASIBBAAQAAgSgIgKQgIgKgQAAQgNAAgJAKg");
	this.shape_54.setTransform(268.2,21.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AAtBVIAAhQIhYAAIAABQIgVAAIAAipIAVAAIAABJIBYAAIAAhJIAUAAIAACpg");
	this.shape_55.setTransform(252.6,19.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgkAxQgRgSAAgeQAAgdAQgTQAPgSAYAAQAYAAAOAQQAOAQAAAaIAAAKIhXAAQABAXALALQALAMARAAQAVAAAUgJIAAASQgKAEgJACQgJACgNAAQgbAAgQgRgAgVgnQgKAKgBASIBBAAQAAgSgIgKQgIgKgQAAQgNAAgJAKg");
	this.shape_56.setTransform(237.1,21.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgQBVQgEgEAAgJQAAgQAOAAQAGAAACAEQAEAFAAAHQAAAIgEAEQgCAEgGAAQgGAAgEgDgAgOAmIAAgHQAAgOAEgIQAEgJAKgIQAPgOAFgGQAEgHAAgKQAAgMgIgGQgIgHgMAAQgJAAgJADQgJACgLAFIgHgPQAWgMAXAAQAWAAAMALQAMALAAAUQAAAJgCAGQgCAHgFAFQgEAGgPAMQgMAJgDAHQgDAHAAALIAAAEg");
	this.shape_57.setTransform(218.8,19.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgrA6IAAgSQAIAFALACQAKADAKAAQAOAAAIgFQAIgFAAgKQAAgHgGgFQgHgGgRgHQgSgFgHgFQgIgFgEgGQgDgGAAgJQAAgQAMgJQANgJAUAAQAWAAAUAIIgHAQQgUgIgPAAQgNAAgGAFQgIAEABAIQgBAFADADQADAEAGADQAFAEAPAGQAXAHAIAIQAIAIAAANQAAASgOAJQgNAKgWAAQgZAAgOgIg");
	this.shape_58.setTransform(208.2,21.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgrA6IAAgSQAIAFALACQAKADAKAAQAOAAAIgFQAIgFAAgKQAAgHgGgFQgHgGgRgHQgSgFgHgFQgIgFgDgGQgEgGAAgJQAAgQANgJQAMgJAVAAQAUAAAUAIIgGAQQgUgIgPAAQgMAAgIAFQgGAEAAAIQAAAFACADQADAEAGADQAGAEAOAGQAXAHAIAIQAIAIAAANQAAASgOAJQgNAKgWAAQgZAAgOgIg");
	this.shape_59.setTransform(196.7,21.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgkAxQgRgSAAgeQAAgdAQgTQAPgSAYAAQAYAAAOAQQAOAQAAAaIAAAKIhXAAQABAXALALQALAMARAAQAVAAAUgJIAAASQgKAEgJACQgJACgNAAQgbAAgQgRgAgVgnQgKAKgBASIBBAAQAAgSgIgKQgIgKgQAAQgNAAgJAKg");
	this.shape_60.setTransform(184.2,21.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AAiBBIAAhRQAAgQgHgHQgIgJgPAAQgSAAgJALQgKALAAAZIAABCIgTAAIAAh/IAQAAIADASIABAAQAGgKALgEQAKgGAMAAQAXAAAMALQALALAAAZIAABSg");
	this.shape_61.setTransform(170.1,21.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgJBXIAAh+IASAAIAAB+gAgGhAQgEgDAAgHQAAgGAEgEQADgCADAAQAEAAADACQAEAEAAAGQAAAHgEADQgDAEgEAAQgDAAgDgEg");
	this.shape_62.setTransform(159.7,18.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgrA6IAAgSQAIAFALACQAKADAKAAQAOAAAIgFQAIgFAAgKQAAgHgGgFQgHgGgRgHQgSgFgHgFQgIgFgEgGQgDgGAAgJQAAgQAMgJQANgJAUAAQAWAAAUAIIgHAQQgUgIgPAAQgNAAgGAFQgIAEABAIQgBAFADADQADAEAFADQAGAEAPAGQAXAHAIAIQAIAIAAANQAAASgOAJQgNAKgWAAQgZAAgOgIg");
	this.shape_63.setTransform(151,21.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgoA1QgMgKAAgZIAAhSIAUAAIAABRQAAAQAHAIQAHAIAPAAQASAAAKgMQAJgKAAgaIAAhBIATAAIAAB+IgQAAIgCgRIgBAAQgGAKgLAFQgLAFgLAAQgYAAgLgMg");
	this.shape_64.setTransform(137.7,21.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("Ag6BVIAAipIAxAAQAgAAAPAKQAPAKAAAWQAAAQgIAKQgJAJgRADIAAABQAoAFAAAjQAAAWgPANQgQANgcAAgAgmBEIAjAAQAUAAAKgIQAKgIAAgRQAAgQgKgHQgLgIgUAAIgiAAgAgmgLIAhAAQATAAAJgGQAKgHAAgQQAAgOgLgGQgKgHgUAAIgeAAg");
	this.shape_65.setTransform(123.2,19.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgnA4QgLgKAAgSQAAglA8gCIAWAAIAAgIQAAgPgGgIQgHgHgPAAQgNAAgVAKIgFgPQAJgFALgDQALgDAKAAQAXAAALAKQALAKAAAXIAABVIgPAAIgDgSIgBAAQgKANgKADQgJAFgMAAQgTAAgLgKgAAMABQgVABgKAGQgLAHAAANQAAALAHAFQAGAGALAAQARAAAKgKQAKgKAAgSIAAgMg");
	this.shape_66.setTransform(101.6,21.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgtBVQgOgKAAgRQAAgMAIgIQAHgJANgDQgFgCgDgFQgDgEAAgHQAAgHAEgDQADgFAJgFQgLgEgFgKQgHgKAAgNQAAgVANgLQANgMAWAAQAIAAAJADIAsAAIAAAMIgXADIAFALQADAGAAAJQAAASgNAMQgNALgVAAIgKgBQgMAHAAAIQAAAFADACQAFADALAAIAUAAQAVAAALAJQAMAIgBARQABAWgSALQgRALgeAAQgZAAgOgJgAghAoQgHAGAAAMQAAAKAIAGQAKAFAQAAQAWAAAMgHQAMgIAAgMQAAgLgHgEQgGgEgSAAIgVAAQgNAAgIAHgAgWhHQgIAHAAAPQAAANAIAHQAHAHAOAAQAbAAAAgbQAAgdgbAAQgOAAgHAHg");
	this.shape_67.setTransform(82.5,24);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AAiBBIAAhRQAAgQgHgHQgIgJgPAAQgSAAgJALQgKALAAAZIAABCIgTAAIAAh/IAQAAIADASIABAAQAGgKALgEQAKgGAMAAQAXAAAMALQALALAAAZIAABSg");
	this.shape_68.setTransform(68.7,21.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgJBXIAAh+IASAAIAAB+gAgHhAQgDgDAAgHQAAgGADgEQAEgCADAAQAEAAADACQAEAEAAAGQAAAHgEADQgDAEgEAAQgDAAgEgEg");
	this.shape_69.setTransform(58.3,18.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgSAoIAAhKIgTAAIAAgJIATgJIAIgbIAKAAIAAAeIAlAAIAAAPIglAAIAABKQAAALAFAGQAGAHAJAAIAKgBIAIgCIAAAPIgJADIgLABQgkAAAAgog");
	this.shape_70.setTransform(50.9,19.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgkBBIAAh/IAQAAIADAYIABAAQAHgMAJgHQAJgHAMAAQAJAAAHABIgDASIgOgBQgQAAgJANQgLAMAAATIAABDg");
	this.shape_71.setTransform(42.7,21.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgnA4QgLgKAAgSQAAglA8gCIAWAAIAAgIQAAgPgGgIQgHgHgPAAQgNAAgVAKIgFgPQAJgFAMgDQALgDAJAAQAXAAALAKQALAKAAAXIAABVIgOAAIgFgSIAAAAQgKANgKADQgJAFgMAAQgUAAgKgKgAAMABQgVABgLAGQgJAHgBANQABALAGAFQAGAGAMAAQAQAAAKgKQALgKgBgSIAAgMg");
	this.shape_72.setTransform(29.9,21.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgSAoIAAhKIgTAAIAAgJIATgJIAIgbIAKAAIAAAeIAlAAIAAAPIglAAIAABKQAAALAFAGQAGAHAJAAIAKgBIAIgCIAAAPIgJADIgMABQgjAAAAgog");
	this.shape_73.setTransform(19.3,19.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("Ag0BQIAAgTQAKAEANADQAMACAMAAQASAAAKgHQAKgIAAgNQAAgJgDgGQgEgGgIgFQgJgEgPgGQgYgHgKgMQgKgLAAgTQAAgUAPgMQAPgMAWAAQAaAAAVAKIgGARQgVgJgUAAQgOAAgJAHQgJAHAAAMQAAAJADAGQAEAFAHAFQAIAFAOAFQAbAIAKALQAKALAAASQAAAWgQANQgQANgaAAQgfAAgQgIg");
	this.shape_74.setTransform(8.6,19.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,553,63.4);


(lib.pink = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F69234").s().p("AgxHCIAAuDIBiAAIAAODg");
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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:-2},0).wait(1).to({y:2},0).wait(1).to({scaleX:9.7,scaleY:3,x:-855.2,y:-49},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,30);


(lib.bg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,250,90);


(lib.arr_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.arr();
	this.instance.setTransform(-9,19,1,1,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9,-1,18,20);


// stage content:
(lib._970x90_Canvas = function(mode,startPosition,loop) {
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
	this.clickTag_mc.setTransform(853,49);
	this.clickTag_mc.alpha = 0;
	new cjs.ButtonHelper(this.clickTag_mc, 0, 1, 2, false, new lib.cta(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickTag_mc).wait(69).to({x:857},0).to({alpha:1},6).to({x:851},5).wait(1));

	// logo
	this.instance = new lib.logo_1();
	this.instance.setTransform(485,44.5,1,1,0,0,0,51,11.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).wait(15).to({x:-62,alpha:0},10,cjs.Ease.get(1)).to({_off:true},1).wait(34).to({_off:false,x:908,y:24.5},0).to({x:903,alpha:1},6).wait(6));

	// pink
	this.instance_1 = new lib.pink();
	this.instance_1.setTransform(485,45,97,1,0,0,0,5,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({scaleX:11.9},10,cjs.Ease.get(1)).to({scaleX:12.4},5,cjs.Ease.get(1)).to({scaleX:1,x:5},10,cjs.Ease.get(1)).wait(47));

	// bg image
	this.instance_2 = new lib.bg_1();
	this.instance_2.setTransform(-75,32,1,1,0,0,0,125,32);
	this.instance_2._off = true;
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 246, 219, 0)];
	this.instance_2.cache(-2,-2,254,94);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(34).to({_off:false},0).to({x:140},8,cjs.Ease.get(1)).to({x:135},4,cjs.Ease.get(1)).wait(35));

	// text
	this.instance_3 = new lib.text();
	this.instance_3.setTransform(421,48.5,1,1,0,0,0,143,37.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(59).to({_off:false},0).to({alpha:1},5).wait(17));

	// text bg
	this.instance_4 = new lib.text_bg();
	this.instance_4.setTransform(7.1,45,1,1,0,0,0,168,45);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(46).to({_off:false},0).to({x:433},8,cjs.Ease.get(1)).to({x:428},5,cjs.Ease.get(1)).wait(22));

	// arr
	this.instance_5 = new lib.arr_1();
	this.instance_5.setTransform(830,45,1,1,0,0,0,0,9);
	this.instance_5._off = true;
	this.instance_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 246, 219, 0)];
	this.instance_5.cache(-11,-3,22,24);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(64).to({_off:false},0).to({x:838},5).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(485,45,970,90);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;