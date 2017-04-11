(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 970,
	height: 250,
	fps: 20,
	color: "#0099D6",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/970x250_Canvas_atlas_.png", id:"970x250_Canvas_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"970x250_Canvas_atlas_", frames: [[206,252,20,18],[0,0,460,250],[0,252,100,30],[102,252,102,23]]}
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
	this.spriteSheet = ss["970x250_Canvas_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg = function() {
	this.spriteSheet = ss["970x250_Canvas_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.btn = function() {
	this.spriteSheet = ss["970x250_Canvas_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.spriteSheet = ss["970x250_Canvas_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.text_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EFEFEF").s().p("A6jTiMAAAgnDMA1HAAAMAAAAnDg");
	this.shape.setTransform(170,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,340,250);


(lib.text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D616F").s().p("AgLAPQgFgFAAgKQAAgIAFgFQAEgFAHAAQAIAAAEAFQAFAFAAAIQAAAJgFAFQgEAFgIAAQgGAAgFgEg");
	this.shape.setTransform(243.5,179.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4D616F").s().p("AguA9QgUgWAAgmQAAglATgXQATgXAeAAQAeAAASAUQARAUAAAgIAAAOIhsAAQABAcANAPQAOAOAWAAQAaAAAagKIAAAVQgNAGgMACQgLADgRAAQghAAgVgWgAgbgxQgMANgCAWIBSAAQAAgXgKgMQgKgMgTAAQgSAAgLAMg");
	this.shape_1.setTransform(231.1,173.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4D616F").s().p("AgmA9QgTgVAAgnQABgnATgWQATgWAiAAQAMAAALADQAMACAGAEIgHAUIgSgFQgJgCgHAAQgwAAAAA8QABAeALAQQAMAPAWAAQAUAAAVgIIAAAVQgQAJgZAAQggAAgUgWg");
	this.shape_2.setTransform(215.8,173.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4D616F").s().p("AAqBRIAAhmQAAgTgJgKQgIgKgUAAQgXAAgLAOQgMAOAAAfIAABSIgYAAIAAieIATAAIAEAWIABAAQAIgMANgHQAOgGAOAAQAdAAAPAOQAPAOAAAfIAABmg");
	this.shape_3.setTransform(199.2,173.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4D616F").s().p("AgxBGQgOgMAAgXQAAgvBMgCIAbgBIAAgKQAAgSgIgKQgIgIgSgBQgSABgZAMIgIgTQAMgGAOgEQAOgDAMgBQAdAAAOANQAOANAAAcIAABrIgSAAIgFgWIgBAAQgMAPgMAFQgMAGgQgBQgYAAgNgMgAAPABQgbACgNAHQgMAJAAAQQAAAOAIAGQAHAIAPgBQAVAAANgMQAMgNAAgWIAAgPg");
	this.shape_4.setTransform(181,173.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4D616F").s().p("AgsBRIAAieIATAAIADAdIACAAQAIgPAMgJQALgIAPAAQALAAAIACIgCAWQgKgCgIAAQgTAAgNAQQgNAQAAAXIAABUg");
	this.shape_5.setTransform(168.8,173.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4D616F").s().p("AgzBDQgPgOAAgeIAAhnIAZAAIAABmQAAATAJAKQAJAKATAAQAXAAAMgOQALgOAAgfIAAhSIAZAAIAACeIgUAAIgEgVIgBAAQgIAMgNAGQgNAGgPAAQgeAAgOgOg");
	this.shape_6.setTransform(152.3,173.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4D616F").s().p("Ag3BJIAAgXQALAGAOADQANAEANAAQAQAAALgGQAKgHAAgMQAAgJgIgHQgIgHgWgJQgXgGgIgGQgKgHgFgHQgEgIAAgLQgBgUARgLQAPgMAbAAQAZAAAZALIgJAUQgYgKgUAAQgOAAgKAFQgIAFgBAKQAAAGAEAFQAEAFAGAEQAIAEASAHQAeAKAJAJQALALAAAQQAAAWgRANQgRAMgcAAQggAAgSgKg");
	this.shape_7.setTransform(136.1,173.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4D616F").s().p("AAqBRIAAhmQAAgTgJgKQgJgKgTAAQgXAAgMAOQgMAOABAfIAABSIgZAAIAAieIAUAAIAEAWIABAAQAIgMANgHQAOgGAOAAQAdAAAPAOQAOAOAAAfIAABmg");
	this.shape_8.setTransform(119.8,173.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4D616F").s().p("AgLBqIAAjUIAXAAIAADUg");
	this.shape_9.setTransform(106.3,170.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4D616F").s().p("AAqBxIAAhnQAAgSgJgKQgJgJgTgBQgXABgMAOQgMANABAeIAABTIgZAAIAAjhIAZAAIAABEIgBAVIABAAQAHgLANgHQANgGAQgBQAdABAPAOQAOAOAAAcIAABog");
	this.shape_10.setTransform(85.2,170.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4D616F").s().p("AgXAzIAAhdIgXAAIAAgMIAXgLIALgiIAMAAIAAAmIAuAAIAAATIguAAIAABcQAAAPAGAHQAHAIAMAAIANgBIAJgCIAAASQgEADgIABIgNABQgtAAAAgxg");
	this.shape_11.setTransform(70.5,171.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4D616F").s().p("AgLBxIAAjhIAXAAIAADhg");
	this.shape_12.setTransform(61.5,170.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4D616F").s().p("AgxBGQgOgMAAgXQAAgvBMgCIAbgBIAAgKQAAgSgIgKQgIgIgSgBQgSABgZAMIgIgTQAMgGAOgEQAOgDAMgBQAdAAAOANQAOANAAAcIAABrIgSAAIgFgWIgBAAQgMAPgMAFQgMAGgQgBQgYAAgNgMgAAPABQgbACgNAHQgMAJAAAQQAAAOAIAGQAHAIAPgBQAVAAANgMQAMgNAAgWIAAgPg");
	this.shape_13.setTransform(48.8,173.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4D616F").s().p("AguA9QgUgWAAgmQAAglATgXQATgXAeAAQAeAAASAUQARAUAAAgIAAAOIhsAAQABAcANAPQAOAOAWAAQAaAAAagKIAAAVQgNAGgMACQgLADgRAAQghAAgVgWgAgbgxQgMANgCAWIBSAAQAAgXgKgMQgKgMgTAAQgSAAgLAMg");
	this.shape_14.setTransform(32.6,173.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#4D616F").s().p("AA4BqIAAhkIhvAAIAABkIgZAAIAAjUIAZAAIAABbIBvAAIAAhbIAZAAIAADUg");
	this.shape_15.setTransform(13.1,170.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4D616F").s().p("AgtBRIAAieIAUAAIADAdIACAAQAIgPAMgJQAMgIAOAAQALAAAIACIgDAWQgKgCgHAAQgUAAgMAQQgOAQABAXIAABUg");
	this.shape_16.setTransform(206,136.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#4D616F").s().p("AgzBDQgPgOAAgeIAAhnIAZAAIAABmQAAATAJAKQAJAKATAAQAXAAAMgOQALgOAAgfIAAhSIAZAAIAACeIgUAAIgEgVIgBAAQgIAMgNAGQgNAGgPAAQgeAAgOgOg");
	this.shape_17.setTransform(189.5,136.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#4D616F").s().p("AgmBJQgQgLgJgSQgJgTAAgZQAAgmATgWQAUgWAhAAQAhAAAUAXQAUAWAAAlQAAAngUAWQgTAWgiAAQgVAAgRgKgAgjgtQgMAPAAAeQAAAeAMAQQAMAQAXAAQAXAAANgQQAMgQAAgeQAAgdgMgQQgNgQgXAAQgXAAgMAQg");
	this.shape_18.setTransform(171.3,136.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#4D616F").s().p("AgLBrIAAhSIhHiCIAbAAIA3BpIA4hpIAbAAIhHCAIAABUg");
	this.shape_19.setTransform(155.4,133.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#4D616F").s().p("AAqByIAAhpQAAgRgJgJQgIgLgUABQgXgBgLAOQgMAOgBAdIAABVIgXAAIAAjjIAXAAIAABFIgBAVIACAAQAHgMAOgGQANgHAPABQAdAAAPANQAOAOAAAdIAABpg");
	this.shape_20.setTransform(130.1,133.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#4D616F").s().p("AgXAzIAAheIgXAAIAAgMIAXgJIAKgjIANAAIAAAlIAuAAIAAATIguAAIAABdQAAAPAGAHQAHAIAMAAIANgBIAJgCIAAASIgLAEIgPABQgsAAAAgxg");
	this.shape_21.setTransform(115.4,134.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#4D616F").s().p("AgLBuIAAifIAWAAIAACfgAgIhQQgFgEAAgJQAAgIAFgDQADgFAFAAQAFAAAFAFQAEADAAAIQAAAJgEAEQgFADgFABQgFgBgDgDg");
	this.shape_22.setTransform(106.4,133.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#4D616F").s().p("AA0BrIgriOIgHgYIgCgSQgDAUgHAXIgqCNIgYAAIg5jUIAaAAIAiCCQAHAcADAWQAEgbAIgaIAmh/IAZAAIAoCAQAHAYAFAcQADgVAHgdIAiiCIAaAAIg5DUg");
	this.shape_23.setTransform(88.7,133.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#4D616F").s().p("AhFB1IAAjmIAUAAIADAWIABAAQAJgOANgFQAMgGAPAAQAfAAASAWQARAVAAAoQAAAlgSAWQgRAWgfAAQgOAAgNgGQgNgFgJgMIgBAAIABAaIAABCgAgihSQgKAOgBAdIAAAGQAAAhALANQALAPAXAAQAWAAALgRQAMgPAAgdQAAgegMgQQgLgRgWAAQgXAAgLAOg");
	this.shape_24.setTransform(58.3,140);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#4D616F").s().p("AgLByIAAjjIAWAAIAADjg");
	this.shape_25.setTransform(44.8,133.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#4D616F").s().p("AguA9QgUgWAAgmQAAglATgXQATgXAeAAQAeAAASAUQARAUAAAgIAAAOIhsAAQABAcANAPQAOAOAWAAQAaAAAagKIAAAVQgNAGgMACQgLADgRAAQghAAgVgWgAgbgxQgMANgCAWIBSAAQAAgXgKgMQgKgMgTAAQgSAAgLAMg");
	this.shape_26.setTransform(32.6,136.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#4D616F").s().p("AA4BrIAAhmIhvAAIAABmIgZAAIAAjUIAZAAIAABbIBvAAIAAhbIAZAAIAADUg");
	this.shape_27.setTransform(13.1,133.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#4D616F").s().p("AgmBJQgQgLgJgSQgJgTAAgZQAAgmATgWQAUgWAhAAQAhAAAUAXQAUAWAAAlQAAAngUAWQgTAWgiAAQgVAAgRgKgAgjgtQgMAPAAAeQAAAeAMAQQAMAQAXAAQAXAAANgQQAMgQAAgeQAAgdgMgQQgNgQgXAAQgXAAgMAQg");
	this.shape_28.setTransform(248.3,99.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#4D616F").s().p("AgLBqIAAi9IhEAAIAAgXICfAAIAAAXIhEAAIAAC9g");
	this.shape_29.setTransform(233,97.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#4D616F").s().p("AguA9QgUgWAAgmQAAglATgXQATgXAeAAQAeAAASAUQARAUAAAgIAAAOIhsAAQABAcANAPQAOAOAWAAQAaAAAagKIAAAVQgNAGgMACQgLADgRAAQghAAgVgWgAgbgxQgMANgCAWIBSAAQAAgXgKgMQgKgMgTAAQgSAAgLAMg");
	this.shape_30.setTransform(208.5,99.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#4D616F").s().p("AgtBRIAAieIAUAAIADAdIACAAQAIgPAMgJQAMgIAOAAQALAAAIACIgDAWQgKgCgHAAQgUAAgMAQQgOAQABAXIAABUg");
	this.shape_31.setTransform(195.6,99.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#4D616F").s().p("AguA9QgUgWAAgmQAAglATgXQATgXAeAAQAeAAASAUQARAUAAAgIAAAOIhsAAQABAcANAPQAOAOAWAAQAaAAAagKIAAAVQgNAGgMACQgLADgRAAQghAAgVgWgAgbgxQgMANgCAWIBSAAQAAgXgKgMQgKgMgTAAQgSAAgLAMg");
	this.shape_32.setTransform(180,99.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#4D616F").s().p("AA4BqIAAhkIhvAAIAABkIgZAAIAAjUIAZAAIAABcIBvAAIAAhcIAZAAIAADUg");
	this.shape_33.setTransform(160.5,97.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#4D616F").s().p("Ag3BJIAAgXQALAGAOADQANAEAMAAQASAAAKgGQAKgHAAgMQAAgJgIgHQgIgHgWgJQgXgGgIgGQgKgHgFgHQgFgIABgLQAAgUAPgLQARgMAZAAQAaAAAZALIgIAUQgZgKgUAAQgOAAgKAFQgIAFgBAKQABAGADAFQADAFAIAEQAHAEATAHQAcAKAKAJQAKALAAAQQABAWgSANQgQAMgcAAQggAAgSgKg");
	this.shape_34.setTransform(134.6,99.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#4D616F").s().p("AgLBqIAAjUIAXAAIAADUg");
	this.shape_35.setTransform(123.2,97.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#4D616F").s().p("AAqBxIAAhnQAAgSgJgKQgJgJgTgBQgXAAgMAPQgLANgBAeIAABTIgYAAIAAjhIAYAAIAABFIAAAUIABAAQAHgMANgGQAOgGAPgBQAdABAPAOQAOAOAAAcIAABog");
	this.shape_36.setTransform(102.1,96.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#4D616F").s().p("AgXAzIAAheIgXAAIAAgLIAXgKIAKgjIANAAIAAAmIAuAAIAAASIguAAIAABdQAAAPAGAHQAHAIAMAAIANgBIAJgCIAAATQgEABgHACIgPABQgsAAAAgxg");
	this.shape_37.setTransform(87.4,98);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#4D616F").s().p("AgLBxIAAjhIAXAAIAADhg");
	this.shape_38.setTransform(78.4,96.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#4D616F").s().p("AgxBGQgOgMAAgXQAAgvBMgCIAbAAIAAgLQAAgSgIgKQgIgIgSgBQgSAAgZANIgIgTQAMgGAOgEQAOgDAMgBQAdAAAOANQAOANAAAcIAABrIgSAAIgFgWIgBAAQgMAPgMAFQgMAGgQAAQgYAAgNgNgAAPACQgbABgNAIQgMAHAAARQAAANAIAIQAHAGAPAAQAVAAANgMQAMgMAAgXIAAgPg");
	this.shape_39.setTransform(65.7,99.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#4D616F").s().p("AguA9QgUgWAAgmQAAglATgXQATgXAeAAQAeAAASAUQARAUAAAgIAAAOIhsAAQABAcANAPQAOAOAWAAQAaAAAagKIAAAVQgNAGgMACQgLADgRAAQghAAgVgWgAgbgxQgMANgCAWIBSAAQAAgXgKgMQgKgMgTAAQgSAAgLAMg");
	this.shape_40.setTransform(49.5,99.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#4D616F").s().p("AA4BqIAAhkIhvAAIAABkIgZAAIAAjUIAZAAIAABcIBvAAIAAhcIAZAAIAADUg");
	this.shape_41.setTransform(29.9,97.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#4D616F").s().p("AguA9QgUgWAAgmQAAglATgXQATgXAeAAQAeAAASAUQARAUAAAgIAAAOIhsAAQABAcANAPQAOAOAWAAQAaAAAagKIAAAVQgNAGgMACQgLADgRAAQghAAgVgWgAgbgxQgMANgCAWIBSAAQAAgXgKgMQgKgMgTAAQgSAAgLAMg");
	this.shape_42.setTransform(10.5,99.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#4D616F").s().p("AgMAPQgEgFAAgKQAAgIAEgFQAFgFAHAAQAIAAAEAFQAFAFAAAIQAAAJgFAFQgFAFgHAAQgGAAgGgEg");
	this.shape_43.setTransform(210,69.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#4D616F").s().p("Ag5BqQgRgMAAgWQAAgOAJgLQAKgLARgDQgGgDgFgGQgEgGAAgIQAAgIAFgFQAFgHAKgGQgNgFgIgMQgHgMAAgQQAAgbAPgOQAQgOAdAAQALAAAKADIA3AAIAAAPIgdAEQAEAFADAIQADAIAAALQAAAXgQAOQgQAOgaAAIgOgBQgPAIAAALQAAAGAFAEQAGADANAAIAaAAQAaAAAOALQAOALAAAVQAAAagVAOQgVAOgnAAQggAAgRgLgAgpAxQgKAIAAAPQAAANALAHQALAHAVAAQAcAAAPgJQAPgKAAgPQAAgNgIgFQgIgFgWAAIgcAAQgQAAgJAHgAgchZQgJAJAAASQAAARAJAJQAKAIARAAQAhAAAAgiQAAglgiAAQgRAAgJAKg");
	this.shape_44.setTransform(197.6,66.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#4D616F").s().p("AAqBRIAAhmQAAgTgJgKQgJgKgTAAQgXAAgLAOQgMAOAAAfIAABSIgZAAIAAieIAUAAIAEAWIABAAQAIgMANgHQAOgGAOAAQAdAAAPAOQAPAOAAAfIAABmg");
	this.shape_45.setTransform(180.4,62.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#4D616F").s().p("AgKBuIAAifIAVAAIAACfgAgIhQQgFgEAAgJQAAgIAFgDQADgFAFAAQAFAAAFAFQAEADAAAIQAAAJgEAEQgFADgFABQgFgBgDgDg");
	this.shape_46.setTransform(167.3,59.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#4D616F").s().p("ABaBRIAAhmQAAgTgJgKQgIgKgRAAQgXAAgLANQgKAOAAAbIAABXIgXAAIAAhmQAAgTgIgKQgIgKgSAAQgWAAgLAOQgLAOAAAfIAABSIgYAAIAAieIAUAAIAEAWIABAAQAHgMAMgHQANgGAPAAQAmAAAKAbIABAAQAHgNAOgHQANgHASAAQAbAAAOAOQANAOAAAfIAABmg");
	this.shape_47.setTransform(149.6,62.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#4D616F").s().p("AgLByIAAjjIAXAAIAADjg");
	this.shape_48.setTransform(131.8,59.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#4D616F").s().p("AguA9QgUgWAAgmQAAglATgXQATgXAeAAQAeAAASAUQARAUAAAgIAAAOIhsAAQABAcANAPQAOAOAWAAQAaAAAagKIAAAVQgNAGgMACQgLADgRAAQghAAgVgWgAgbgxQgMANgCAWIBSAAQAAgXgKgMQgKgMgTAAQgSAAgLAMg");
	this.shape_49.setTransform(119.6,62.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#4D616F").s().p("AAqByIAAhpQAAgRgJgKQgJgKgTABQgXgBgMAOQgLAOgBAdIAABVIgYAAIAAjjIAYAAIAABFIAAAVIABAAQAHgMANgGQAOgHAPABQAdAAAPANQAOAOAAAdIAABpg");
	this.shape_50.setTransform(102.1,59.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#4D616F").s().p("AAoBQIgehcIgKgoIAAAAIgKAoIgeBcIgcAAIgsifIAaAAIAXBaQAIAgACALIABAAIAFgWIAGgVIAehaIAYAAIAdBaQAIAaADARIABAAIADgRIAfh0IAZAAIgtCfg");
	this.shape_51.setTransform(81.1,62.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#4D616F").s().p("AgtBRIAAieIAVAAIACAdIABAAQAJgPAMgJQALgIAQAAQAKAAAJACIgEAWQgJgCgIAAQgUAAgLAQQgOAQgBAXIAABUg");
	this.shape_52.setTransform(64.4,62.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#4D616F").s().p("AguA9QgUgWAAgmQAAglATgXQATgXAeAAQAeAAASAUQARAUAAAgIAAAOIhsAAQABAcANAPQAOAOAWAAQAaAAAagKIAAAVQgNAGgMACQgLADgRAAQghAAgVgWgAgbgxQgMANgCAWIBSAAQAAgXgKgMQgKgMgTAAQgSAAgLAMg");
	this.shape_53.setTransform(48.8,62.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#4D616F").s().p("AgNBQIg9ifIAaAAIAjBdQAMAiABAKIAAAAQABgIAJgYIAmhpIAbAAIg9Cfg");
	this.shape_54.setTransform(32.8,62.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#4D616F").s().p("AhIBRQgZgdAAg0QAAgzAZgdQAagdAuAAQAuAAAaAeQAaAdAAAyQAAAzgaAdQgaAeguAAQguAAgagdgAg0hAQgTAWAAAqQAAArATAWQASAXAiAAQAjAAASgXQATgWgBgrQABgqgTgWQgSgXgjAAQgiAAgSAXg");
	this.shape_55.setTransform(13.7,60.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#4D616F").s().p("AguA9QgUgWAAgmQAAglATgXQATgXAeAAQAeAAASAUQARAUAAAgIAAAOIhsAAQABAcANAPQAOAOAWAAQAaAAAagKIAAAVQgNAGgMACQgLADgRAAQghAAgVgWgAgbgxQgMANgCAWIBSAAQAAgXgKgMQgKgMgTAAQgSAAgLAMg");
	this.shape_56.setTransform(228.2,26);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#4D616F").s().p("AhJBqIAAjTIA9AAQAoAAATAMQATANAAAbQAAAUgKAMQgLAMgUAEIAAACQAxAFAAAsQAAAcgUARQgTAPgjAAgAgwBWIAtAAQAYAAANgKQANgLAAgVQAAgUgNgKQgOgJgZAAIgrAAgAgwgOIApAAQAYAAAMgIQAMgIAAgUQAAgSgNgIQgNgIgaAAIglAAg");
	this.shape_57.setTransform(210.6,23.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#4D616F").s().p("AAqBRIAAhmQAAgTgJgKQgIgKgUAAQgXAAgLAOQgNAOAAAfIAABSIgXAAIAAieIATAAIAEAWIABAAQAIgMANgHQANgGAPAAQAdAAAPAOQAPAOAAAfIAABmg");
	this.shape_58.setTransform(183.4,25.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#4D616F").s().p("AgxBGQgOgMAAgXQAAgvBMgCIAbAAIAAgKQAAgUgIgJQgIgIgSgBQgSAAgZANIgIgTQAMgHAOgDQAOgDAMgBQAdAAAOANQAOANAAAcIAABrIgSAAIgFgWIgBAAQgMAOgMAGQgMAGgQAAQgYAAgNgNgAAPACQgbAAgNAJQgMAHAAARQAAANAIAIQAHAGAPAAQAVAAANgMQAMgNAAgWIAAgOg");
	this.shape_59.setTransform(165.2,26.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#4D616F").s().p("Ag2BQQgagcAAg0QAAggANgZQAMgZAYgNQAXgNAegBQAhABAZAMIgKAVQgYgLgZAAQghAAgUAXQgVAYAAAnQAAAqATAXQAVAWAiAAQAXABAcgJIAAAWQgXAJggAAQguAAgZgeg");
	this.shape_60.setTransform(148.4,23.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#4D616F").s().p("AAqBRIAAhmQAAgTgJgKQgIgKgUAAQgXAAgLAOQgMAOgBAfIAABSIgXAAIAAieIATAAIAEAWIABAAQAHgMAOgHQANgGAPAAQAdAAAPAOQAOAOAAAfIAABmg");
	this.shape_61.setTransform(121.5,25.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#4D616F").s().p("AgmBJQgQgLgJgSQgJgTAAgZQAAgmATgWQAUgWAhAAQAhAAAUAXQAUAWAAAlQAAAngUAWQgTAWgiAAQgVAAgRgKgAgjgtQgMAPAAAeQAAAeAMAQQAMAQAXAAQAXAAANgQQAMgQAAgeQAAgdgMgQQgNgQgXAAQgXAAgMAQg");
	this.shape_62.setTransform(103.2,26);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#4D616F").s().p("AgLBtIAAieIAXAAIAACegAgJhQQgEgFAAgHQAAgJAEgEQAFgDAEAAQAGAAADADQAFAEAAAJQAAAHgFAFQgDADgGAAQgEAAgFgDg");
	this.shape_63.setTransform(90.3,23.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#4D616F").s().p("AgXAzIAAheIgXAAIAAgLIAXgKIALgjIAMAAIAAAlIAuAAIAAATIguAAIAABdQAAAOAGAIQAHAIAMAAIAMgBIAKgCIAAATIgMADIgNABQgtAAAAgxg");
	this.shape_64.setTransform(81.1,24.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#4D616F").s().p("AhFB1IAAjmIATAAIAEAWIABAAQAJgOANgFQAMgGAPAAQAfAAASAWQARAVAAAoQAAAlgSAWQgRAWgfAAQgOAAgNgGQgNgFgJgMIgBAAIABAaIAABCgAgihSQgLAOAAAdIAAAGQAAAhALANQALAPAXAAQAVAAAMgRQAMgPAAgdQAAgegMgQQgMgRgVAAQgWAAgMAOg");
	this.shape_65.setTransform(67.2,29.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#4D616F").s().p("AgmBJQgQgLgJgSQgJgTAAgZQAAgmATgWQAUgWAhAAQAhAAAUAXQAUAWAAAlQAAAngUAWQgTAWgiAAQgVAAgRgKgAgjgtQgMAPAAAeQAAAeAMAQQAMAQAXAAQAXAAANgQQAMgQAAgeQAAgdgMgQQgNgQgXAAQgXAAgMAQg");
	this.shape_66.setTransform(48.5,26);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#4D616F").s().p("AgzBeQgSgWAAgoQAAglASgXQARgWAfABQAfAAASAXIACAAIgBgMIgBgKIAAhCIAYAAIAADiIgUAAIgDgWIgBAAQgRAZggAAQgfAAgRgVgAgggMQgMAOAAAfQAAAeAMAQQALAQAVAAQAYAAAKgOQAMgNAAgeIAAgGQAAgggMgOQgLgPgXAAQgWAAgKARg");
	this.shape_67.setTransform(29.8,22.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#4D616F").s().p("ABEBrIgahEIhUAAIgbBEIgZAAIBVjVIATAAIBUDVgAgIgwIgZBBIBDAAIgZhBIgJgfQgCAPgGAQg");
	this.shape_68.setTransform(11.5,23.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,294,192.3);


(lib.pink = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C1CD23").s().p("AgxHCIAAuDIBiAAIAAODg");
	this.shape.setTransform(5,125,1,2.778);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,10,250);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:-2},0).wait(1).to({y:2},0).wait(1).to({scaleX:9.7,scaleY:8.33,x:-843.9,y:-130},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,30);


(lib.bg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,460,250);


(lib.arr_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.arr();
	this.instance.setTransform(-9,19,1,1,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9,-1,18,20);


// stage content:
(lib._970x250_Canvas = function(mode,startPosition,loop) {
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

	this.timeline.addTween(cjs.Tween.get(this.clickTag_mc).wait(69).to({x:845,y:110},0).to({alpha:1},6).wait(6));

	// logo
	this.instance = new lib.logo_1();
	this.instance.setTransform(485,123.5,1,1,0,0,0,51,11.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).wait(15).to({x:84},10,cjs.Ease.get(1)).wait(47));

	// pink
	this.instance_1 = new lib.pink();
	this.instance_1.setTransform(485,45,97,1,0,0,0,5,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({scaleX:11.9},10,cjs.Ease.get(1)).to({scaleX:12.4},5,cjs.Ease.get(1)).to({scaleX:1,x:5},10,cjs.Ease.get(1)).wait(47));

	// bg image
	this.instance_2 = new lib.bg_1();
	this.instance_2.setTransform(-331,32,1,1,0,0,0,125,32);
	this.instance_2._off = true;
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 246, 219, 0)];
	this.instance_2.cache(-2,-2,464,254);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(34).to({_off:false},0).to({x:140},8,cjs.Ease.get(1)).to({x:135},4,cjs.Ease.get(1)).wait(35));

	// text
	this.instance_3 = new lib.text();
	this.instance_3.setTransform(651,63.5,1,1,0,0,0,143,37.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(59).to({_off:false},0).to({alpha:1},5).wait(17));

	// text bg
	this.instance_4 = new lib.text_bg();
	this.instance_4.setTransform(297.1,45,1,1,0,0,0,168,45);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(46).to({_off:false},0).to({x:653},8,cjs.Ease.get(1)).to({x:648},5,cjs.Ease.get(1)).wait(22));

	// arr
	this.instance_5 = new lib.arr_1();
	this.instance_5.setTransform(811,125,1,1,0,0,0,0,9);
	this.instance_5._off = true;
	this.instance_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 246, 219, 0)];
	this.instance_5.cache(-11,-3,22,24);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(64).to({_off:false},0).to({x:827},5).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(485,125,970,250);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;