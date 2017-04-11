(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 20,
	color: "#EFEFEF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/300x600_Canvas_atlas_.png", id:"300x600_Canvas_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"300x600_Canvas_atlas_", frames: [[253,252,20,18],[0,0,300,250],[135,252,116,30],[0,252,133,30]]}
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
	this.spriteSheet = ss["300x600_Canvas_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg = function() {
	this.spriteSheet = ss["300x600_Canvas_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.btn = function() {
	this.spriteSheet = ss["300x600_Canvas_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ehealth_green_big = function() {
	this.spriteSheet = ss["300x600_Canvas_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.text_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C1CD23").s().p("A3bO1IAA9qMAu2AAAIAAdqg");
	this.shape.setTransform(150,95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,190);


(lib.text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKANQgFgEAAgJQABgHAEgFQADgEAHgBQAGABAFAEQAEAFABAHQgBAIgEAFQgFAEgGAAQgFABgFgFg");
	this.shape.setTransform(260.8,130.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhBBmIAAgSQAIACAJAAQAWAAAKgZIAIgVIg6iPIAXAAIAgBSQAKAaABANIABAAIAHgVIAkhkIAXAAIg+CiQgHAZgNAKQgMAKgSAAQgKAAgKgCg");
	this.shape_1.setTransform(251.5,128.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgxBBIAAgUQAKAFAMADQAMADALAAQAPAAAJgFQAKgGAAgLQAAgIgIgGQgHgGgTgIQgUgGgJgFQgIgGgFgHQgEgHAAgKQAAgSAPgKQAOgKAXAAQAXAAAXAJIgIASQgWgJgSAAQgNAAgIAFQgIAFAAAIQAAAGADAEQADAEAHAEQAGAEARAHQAaAIAJAIQAJAKAAAOQAAAVgPAKQgPALgaAAQgcAAgQgJg");
	this.shape_2.setTransform(238.3,124.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgsA/QgMgLgBgUQABgqBDgCIAZgBIAAgJQAAgRgHgIQgIgIgQAAQgQAAgWALIgIgRQAMgGAMgDQAMgDALAAQAaAAANALQAMAMAAAZIAABhIgQAAIgEgVIgBAAQgLAOgLAFQgKAEgPAAQgVAAgMgLgAANACQgYABgLAHQgLAHAAAPQgBAMAIAGQAGAGAOAAQASAAAMgLQAMgLAAgUIAAgNg");
	this.shape_3.setTransform(223.8,124.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag0BgIAAi/IBpAAIAAAUIhTAAIAAA+IBOAAIAAASIhOAAIAABHIBTAAIAAAUg");
	this.shape_4.setTransform(209.8,122.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgxBBIAAgUQAKAFAMADQAMADALAAQAPAAAJgFQAKgGAAgLQAAgIgIgGQgHgGgTgIQgUgGgJgFQgIgGgFgHQgEgHAAgKQAAgSAPgKQAOgKAXAAQAXAAAXAJIgIASQgWgJgSAAQgNAAgIAFQgIAFAAAIQAAAGADAEQADAEAHAEQAGAEARAHQAaAIAJAIQAJAKAAAOQAAAVgPAKQgPALgaAAQgcAAgQgJg");
	this.shape_5.setTransform(188.4,124.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgUAuIAAhUIgVAAIAAgLIAVgJIAJgfIALAAIAAAiIApAAIAAARIgpAAIAABTQAAANAGAHQAGAHALAAIALgBIAIgCIAAARQgDACgHABIgNABQgnAAAAgsg");
	this.shape_6.setTransform(177,123.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgKBjIAAiPIAUAAIAACPgAgIhIQgDgEAAgHQAAgIADgDQAEgEAEABQAFgBAEAEQADADAAAIQAAAHgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_7.setTransform(168.9,122.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgXBnIAAh+IgZAAIAAgKIAZgIIAAgIQABg1AsAAQAMAAAPAFIgFARQgNgEgJAAQgNAAgFAJQgFAIABASIAAAJIAiAAIAAARIgiAAIAAB+g");
	this.shape_8.setTransform(161.7,121.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgpA3QgTgUAAgiQAAghASgVQARgUAbAAQAbAAAQASQAQARAAAeIAAALIhiAAQABAaAMANQAMANAUAAQAYAAAWgJIAAATQgLAFgKACQgLACgPAAQgeAAgSgTgAgYgsQgLAMgBAUIBJAAQAAgVgJgLQgJgLgRAAQgQAAgKALg");
	this.shape_9.setTransform(148.8,124.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAmBJIAAhbQAAgSgIgJQgIgIgRgBQgVAAgLAMQgKANAAAcIAABKIgWAAIAAiPIASAAIAEAUIAAAAQAIgKALgGQANgGAMAAQAaAAAOAMQANANAAAcIAABcg");
	this.shape_10.setTransform(133,124.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgpA3QgTgUAAgiQAAghASgVQARgUAbAAQAbAAAQASQAQARAAAeIAAALIhiAAQABAaAMANQAMANAUAAQAYAAAWgJIAAATQgLAFgKACQgLACgPAAQgeAAgSgTgAgYgsQgLAMgBAUIBJAAQAAgVgJgLQgJgLgRAAQgQAAgKALg");
	this.shape_11.setTransform(117.1,124.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhBBgIAAi/IA2AAQAlAAARALQARAMAAAZQAAARgKALQgJALgTADIAAACQAsAFAAAnQAAAagRAOQgSAPgfAAgAgrBNIAoAAQAWAAAMgJQALgJAAgUQAAgSgMgIQgMgIgWAAIgnAAgAgrgMIAlAAQAWAAAKgIQALgHAAgSQAAgQgMgHQgMgIgXAAIghAAg");
	this.shape_12.setTransform(101.3,122.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAmBmIAAhdQAAgQgIgJQgIgIgRAAQgVAAgLAMQgKAMAAAbIAABLIgWAAIAAjLIAWAAIAAA+IgBASIABAAQAHgKAMgGQAMgGANAAQAbAAANANQANANAAAZIAABeg");
	this.shape_13.setTransform(76.8,121.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgUAuIAAhUIgVAAIAAgLIAVgJIAJgfIALAAIAAAiIApAAIAAARIgpAAIAABTQAAANAGAHQAGAHALAAIALgBIAIgCIAAARQgDACgHABIgNABQgnAAAAgsg");
	this.shape_14.setTransform(63.6,123.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgJBmIAAjLIATAAIAADLg");
	this.shape_15.setTransform(55.5,121.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgsA/QgMgLAAgUQAAgqBDgCIAZgBIAAgJQAAgRgIgIQgGgIgRAAQgQAAgXALIgHgRQAMgGAMgDQAMgDAMAAQAaAAAMALQAMAMAAAZIAABhIgQAAIgFgVIAAAAQgLAOgLAFQgLAEgNAAQgWAAgMgLgAAOACQgYABgMAHQgMAHAAAPQAAAMAIAGQAGAGANAAQATAAAMgLQAMgLAAgUIAAgNg");
	this.shape_16.setTransform(44.1,124.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgpA3QgTgUAAgiQAAghASgVQARgUAbAAQAbAAAQASQAQARAAAeIAAALIhiAAQABAaAMANQAMANAUAAQAYAAAWgJIAAATQgLAFgKACQgLACgPAAQgeAAgSgTgAgYgsQgLAMgBAUIBJAAQAAgVgJgLQgJgLgRAAQgQAAgKALg");
	this.shape_17.setTransform(29.5,124.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAyBgIAAhbIhjAAIAABbIgXAAIAAi/IAXAAIAABSIBjAAIAAhSIAXAAIAAC/g");
	this.shape_18.setTransform(12,122.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgxBBIAAgUQAKAFAMADQAMADALAAQAPAAAJgFQAKgGAAgLQAAgIgIgGQgHgGgTgIQgUgGgJgFQgIgGgFgHQgEgHAAgKQAAgSAPgKQAOgKAXAAQAXAAAXAJIgIASQgWgJgSAAQgNAAgIAFQgIAFAAAIQAAAGADAEQADAEAHAEQAGAEARAHQAaAIAJAIQAJAKAAAOQAAAVgPAKQgPALgaAAQgcAAgQgJg");
	this.shape_19.setTransform(181.8,91.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgpA3QgTgUAAgiQAAghASgVQARgUAbAAQAbAAAQASQAQARAAAeIAAALIhiAAQABAaAMANQAMANAUAAQAYAAAWgJIAAATQgLAFgKACQgLACgPAAQgeAAgSgTgAgYgsQgLAMgBAUIBJAAQAAgVgJgLQgJgLgRAAQgQAAgKALg");
	this.shape_20.setTransform(167.8,91.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAfBmIgxhEIgRAOIAAA2IgVAAIAAjLIAVAAIAABrIgBAWIABAAQAGgIALgNIAtgwIAaAAIg4A8IA9BTg");
	this.shape_21.setTransform(154.7,88.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgsA/QgMgLAAgUQAAgqBDgCIAZgBIAAgJQAAgRgIgIQgGgIgRAAQgQAAgXALIgHgRQAMgGAMgDQAMgDAMAAQAaAAAMALQAMAMAAAZIAABhIgQAAIgFgVIgBAAQgKAOgLAFQgLAEgNAAQgWAAgMgLgAAOACQgYABgMAHQgMAHAAAPQAAAMAIAGQAGAGANAAQATAAAMgLQALgLAAgUIAAgNg");
	this.shape_22.setTransform(138.6,91.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("ABIBgIAAh6QAAgWACgZIgBAAIhBCpIgRAAIhBipIgBAAQABAUABAcIAAB5IgVAAIAAi/IAhAAIA9CdIAAAAIA+idIAhAAIAAC/g");
	this.shape_23.setTransform(119.4,88.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAmBmIAAhdQAAgQgIgJQgIgIgRAAQgVgBgKANQgLAMAAAbIAABLIgWAAIAAjLIAWAAIAAA+IgBASIABAAQAHgKAMgGQAMgGANAAQAaAAAOANQANANAAAZIAABeg");
	this.shape_24.setTransform(92,88.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgUAuIAAhUIgVAAIAAgLIAVgJIAJgfIALAAIAAAiIApAAIAAARIgpAAIAABTQAAANAGAHQAGAHALAAIALgBIAIgCIAAARQgDACgHABIgNABQgnAAAAgsg");
	this.shape_25.setTransform(78.7,89.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgKBmIAAjLIAVAAIAADLg");
	this.shape_26.setTransform(70.6,88.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgtA/QgMgLABgUQgBgqBFgCIAYgBIAAgJQAAgRgHgIQgHgIgRAAQgQAAgXALIgGgRQAKgGANgDQANgDAKAAQAbAAAMALQANAMAAAZIAABhIgRAAIgFgVIgBAAQgKAOgLAFQgKAEgPAAQgVAAgNgLgAAOACQgZABgLAHQgMAHAAAPQABAMAGAGQAIAGAMAAQATAAAMgLQALgLAAgUIAAgNg");
	this.shape_27.setTransform(59.3,91.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgpA3QgTgUAAgiQAAghASgVQARgUAbAAQAbAAAQASQAQARAAAeIAAALIhiAAQABAaAMANQAMANAUAAQAYAAAWgJIAAATQgLAFgKACQgLACgPAAQgeAAgSgTgAgYgsQgLAMgBAUIBJAAQAAgVgJgLQgJgLgRAAQgQAAgKALg");
	this.shape_28.setTransform(44.7,91.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAyBgIAAhbIhjAAIAABbIgXAAIAAi/IAXAAIAABSIBjAAIAAhSIAXAAIAAC/g");
	this.shape_29.setTransform(27.1,88.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgpA3QgTgUAAgiQAAghASgVQARgUAbAAQAbAAAQASQAQARAAAeIAAALIhiAAQABAaAMANQAMANAUAAQAYAAAWgJIAAATQgLAFgKACQgLACgPAAQgeAAgSgTgAgYgsQgLAMgBAUIBJAAQAAgVgJgLQgJgLgRAAQgQAAgKALg");
	this.shape_30.setTransform(9.6,91.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgKANQgEgEgBgJQAAgHAFgFQAEgEAGgBQAGABAFAEQAFAFAAAHQAAAIgFAFQgFAEgGAAQgGABgEgFg");
	this.shape_31.setTransform(189.4,63.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgpA3QgTgUAAgiQAAghASgVQARgUAbAAQAbAAAQASQAQARAAAeIAAALIhiAAQABAaAMANQAMANAUAAQAYAAAWgJIAAATQgLAFgKACQgLACgPAAQgeAAgSgTgAgYgsQgLAMgBAUIBJAAQAAgVgJgLQgJgLgRAAQgQAAgKALg");
	this.shape_32.setTransform(178.2,57.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgLBIIg3iPIAXAAIAfBUIAMAnIAAAAQABgHAIgWIAjheIAXAAIg3CPg");
	this.shape_33.setTransform(163.8,57.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgKBjIAAiPIAUAAIAACPgAgIhIQgDgEAAgHQAAgIADgDQAEgEAEABQAFgBAEAEQADADAAAIQAAAHgDAEQgEADgFABQgEgBgEgDg");
	this.shape_34.setTransform(153.6,54.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgUAuIAAhUIgVAAIAAgLIAVgJIAJgfIALAAIAAAiIApAAIAAARIgpAAIAABTQAAANAGAHQAGAHALAAIALgBIAIgCIAAARQgDACgHABIgNABQgnAAAAgsg");
	this.shape_35.setTransform(145.3,55.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AghA3QgSgTAAgkQAAgiASgUQARgTAfAAQAKAAAKACQALACAGADIgHATIgQgFIgPgCQgqAAAAA2QAAAbALAOQALAOATAAQASAAATgIIAAAUQgPAHgWAAQgdAAgRgTg");
	this.shape_36.setTransform(134.5,57.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AguA9QgNgNAAgcIAAhcIAXAAIAABbQgBASAJAJQAHAJASAAQAUAAAKgMQALgNAAgcIAAhKIAWAAIAACPIgSAAIgDgUIgCAAQgGALgMAFQgMAGgOAAQgaAAgNgMg");
	this.shape_37.setTransform(119.5,57.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AguBUQgQgTAAgkQAAgiAQgUQAQgTAcAAQAbAAAQAVIACAAIgBgKIgBgLIAAg6IAWAAIAADLIgSAAIgDgUIgBAAQgPAWgcAAQgdAAgPgTgAgdgLQgKANAAAbQAAAcAKAOQAKAOATAAQAVAAAKgMQAKgMAAgbIAAgFQAAgdgKgNQgKgNgVAAQgTAAgKAPg");
	this.shape_38.setTransform(102.6,54.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AghBBQgPgJgJgRQgIgRAAgWQAAgiASgUQASgTAdAAQAeAAASAUQASAUAAAhQAAAjgSAUQgSATgeAAQgSAAgPgJgAgfgpQgLAOAAAbQAAAbALAPQALAOAUAAQAVAAALgOQALgPAAgbQAAgagLgOQgLgPgVAAQgUAAgLAOg");
	this.shape_39.setTransform(86.6,57.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgoBJIAAiPIASAAIADAbIABAAQAIgOAKgHQAKgIAOAAQAJAAAIABIgDAVQgJgCgHAAQgRAAgLAOQgMAOAAAWIAABLg");
	this.shape_40.setTransform(74.4,57.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("Ag7BgIAAi/IAxAAQBHAAgBA4QAAAdgTAOQgUAQgjAAIgXAAIAABMgAglABIAUAAQAcAAANgIQAOgKAAgVQAAgTgNgJQgMgKgZAAIgZAAg");
	this.shape_41.setTransform(60.5,55);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgpA3QgTgUAAgiQAAghASgVQARgUAbAAQAbAAAQASQAQARAAAeIAAALIhiAAQABAaAMANQAMANAUAAQAYAAAWgJIAAATQgLAFgKACQgLACgPAAQgeAAgSgTgAgYgsQgLAMgBAUIBJAAQAAgVgJgLQgJgLgRAAQgQAAgKALg");
	this.shape_42.setTransform(37.2,57.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgoBJIAAiPIASAAIADAbIABAAQAIgOAKgHQAKgIAOAAQAJAAAIABIgDAVQgJgCgHAAQgRAAgLAOQgMAOAAAWIAABLg");
	this.shape_43.setTransform(25.6,57.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AA9BgIgYg9IhKAAIgZA9IgWAAIBMi/IARAAIBMC/gAgHgrIgWA6IA8AAIgXg6QgEgLgEgRQgCANgFAPg");
	this.shape_44.setTransform(10.6,54.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgxBBIAAgUQAKAFAMADQAMADALAAQAPAAAJgFQAKgGAAgLQAAgIgIgGQgHgGgTgIQgUgGgJgFQgIgGgFgHQgEgHAAgKQAAgSAPgKQAOgKAXAAQAXAAAXAJIgIASQgWgJgSAAQgNAAgIAFQgIAFAAAIQAAAGADAEQADAEAHAEQAGAEARAHQAaAIAJAIQAJAKAAAOQAAAVgPAKQgPALgaAAQgcAAgQgJg");
	this.shape_45.setTransform(235.3,23.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgpA3QgTgUAAgiQAAghASgVQARgUAbAAQAbAAAQASQAQARAAAeIAAALIhiAAQABAaAMANQAMANAUAAQAYAAAWgJIAAATQgLAFgKACQgLACgPAAQgeAAgSgTgAgYgsQgLAMgBAUIBJAAQAAgVgJgLQgJgLgRAAQgQAAgKALg");
	this.shape_46.setTransform(221.2,23.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgpA3QgTgUAAgiQAAghASgVQARgUAbAAQAbAAAQASQAQARAAAeIAAALIhiAAQABAaAMANQAMANAUAAQAYAAAWgJIAAATQgLAFgKACQgLACgPAAQgeAAgSgTgAgYgsQgLAMgBAUIBJAAQAAgVgJgLQgJgLgRAAQgQAAgKALg");
	this.shape_47.setTransform(206.1,23.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AhBBmIAAgSQAIACAJAAQAWAAAKgZIAIgVIg6iPIAXAAIAgBSQAKAaABANIABAAIAHgVIAkhkIAXAAIg+CiQgHAZgNAKQgMAKgSAAQgKAAgKgCg");
	this.shape_48.setTransform(191.7,26.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AghBBQgQgJgIgRQgIgRAAgWQAAgiASgUQASgTAdAAQAeAAASAUQASAUAAAhQAAAjgSAUQgSATgeAAQgTAAgOgJgAgfgpQgLAOAAAbQAAAbALAPQALAOAUAAQAVAAALgOQALgPAAgbQAAgagLgOQgLgPgVAAQgVAAgKAOg");
	this.shape_49.setTransform(177.3,23.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgKBmIAAjLIAVAAIAADLg");
	this.shape_50.setTransform(165.7,20.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("Ag+BpIAAjPIASAAIADAUIABAAQAIgMALgGQAMgEAMgBQAdABAQATQAPAUAAAjQAAAhgQAVQgQATgcAAQgMAAgMgFQgLgFgIgLIgCAAIACAYIAAA7gAgehKQgKANAAAaIAAAFQAAAeAKAMQAKANAVAAQASAAALgQQAKgNAAgaQAAgbgKgPQgLgOgTAAQgUAAgKAMg");
	this.shape_51.setTransform(154.4,26.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("ABRBJIAAhcQAAgRgIgJQgHgIgQgBQgUAAgKAMQgKAMAAAYIAABPIgUAAIAAhcQAAgRgHgJQgHgIgQgBQgVABgJAMQgKAMAAAcIAABKIgWAAIAAiPIASAAIAEAUIABAAQAGgKALgGQAMgGAOAAQAhAAAJAZIABAAQAGgMANgGQAMgHAQAAQAYAAAMAMQANANAAAcIAABcg");
	this.shape_52.setTransform(133.2,23.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("Ag0BgIAAi/IBpAAIAAAUIhTAAIAAA+IBOAAIAAASIhOAAIAABHIBTAAIAAAUg");
	this.shape_53.setTransform(113.6,21.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AhBBmIAAgSQAIACAJAAQAWAAAKgZIAIgVIg6iPIAXAAIAgBSQAKAaABANIABAAIAHgVIAkhkIAXAAIg+CiQgHAZgNAKQgMAKgSAAQgKAAgKgCg");
	this.shape_54.setTransform(91.8,26.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AAmBmIAAhdQAAgQgIgJQgIgIgRgBQgVABgLAMQgKAMAAAbIAABLIgWAAIAAjLIAWAAIAAA+IgBASIABAAQAHgKAMgGQAMgGANAAQAbAAANANQANANAAAZIAABeg");
	this.shape_55.setTransform(76.8,20.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgUAuIAAhUIgVAAIAAgLIAVgJIAJgfIALAAIAAAiIApAAIAAARIgpAAIAABTQAAANAGAHQAGAHALAAIALgBIAIgCIAAARQgDACgHABIgNABQgnAAAAgsg");
	this.shape_56.setTransform(63.6,22.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgJBmIAAjLIATAAIAADLg");
	this.shape_57.setTransform(55.5,20.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgsA/QgMgLAAgUQAAgqBDgCIAZgBIAAgJQAAgRgIgIQgGgIgRAAQgQAAgXALIgHgRQAMgGAMgDQAMgDAMAAQAaAAAMALQAMAMAAAZIAABhIgQAAIgFgVIAAAAQgLAOgLAFQgLAEgNAAQgWAAgMgLgAAOACQgYABgMAHQgMAHAAAPQAAAMAIAGQAGAGANAAQATAAAMgLQAMgLAAgUIAAgNg");
	this.shape_58.setTransform(44.1,23.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgpA3QgTgUAAgiQAAghASgVQARgUAbAAQAbAAAQASQAQARAAAeIAAALIhiAAQABAaAMANQAMANAUAAQAYAAAWgJIAAATQgLAFgKACQgLACgPAAQgeAAgSgTgAgYgsQgLAMgBAUIBJAAQAAgVgJgLQgJgLgRAAQgQAAgKALg");
	this.shape_59.setTransform(29.5,23.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AAyBgIAAhbIhjAAIAABbIgXAAIAAi/IAXAAIAABSIBjAAIAAhSIAXAAIAAC/g");
	this.shape_60.setTransform(12,21.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,274,142);


(lib.logo_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EFEFEF").s().p("A3bAxIAAhiMAu2AAAIAABig");
	this.shape.setTransform(150,30,1,6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,60);


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
	this.shape_8.graphics.f("#FFFFFF").s().p("AAdA4Ig8heIgBAAIABAgIAAA+IgMAAIAAhwIAPAAIA8BeIABAAIgBgOIAAgQIAAhAIAMAAIAABwg");
	this.shape_8.setTransform(72.2,12.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AglA8IAAgLIAJACQANAAAGgPIAFgMIgjhVIAOAAIATAxQAGAPAAAHIAAAAIAFgLIAVg8IAOAAIglBgQgEAPgHAFQgHAHgLAAQgGgBgFgBg");
	this.shape_9.setTransform(58,16.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AglA8IAAgKIAJAAQANAAAGgPIAFgMIgjhUIAOAAIATAxQAGAPAAAIIAAAAIAFgMIAVg8IAOAAIglBgQgEAOgHAHQgHAFgLAAQgGABgFgCg");
	this.shape_10.setTransform(58,20.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7,p:{y:14.7}},{t:this.shape_6,p:{y:18}},{t:this.shape_5,p:{y:18}},{t:this.shape_4,p:{y:14.4}},{t:this.shape_3},{t:this.shape_2,p:{y:14.8}},{t:this.shape_1,p:{y:16.2}},{t:this.shape,p:{y:16.2}}]}).to({state:[{t:this.shape_7,p:{y:12.7}},{t:this.shape_6,p:{y:16}},{t:this.shape_5,p:{y:16}},{t:this.shape_4,p:{y:12.4}},{t:this.shape_9},{t:this.shape_8},{t:this.shape_1,p:{y:14.2}},{t:this.shape,p:{y:14.2}}]},1).to({state:[{t:this.shape_7,p:{y:16.7}},{t:this.shape_6,p:{y:20}},{t:this.shape_5,p:{y:20}},{t:this.shape_4,p:{y:16.4}},{t:this.shape_10},{t:this.shape_2,p:{y:16.8}},{t:this.shape_1,p:{y:18.2}},{t:this.shape,p:{y:18.2}}]},1).to({state:[]},1).wait(1));

	// Layer 1
	this.instance = new lib.btn();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:-2},0).wait(1).to({y:2},0).wait(1).to({scaleX:2.59,scaleY:20,x:-93,y:-535.9},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,116,30);


(lib.colorlogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ehealth_green_big();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,133,30);


(lib.bg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.arr_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.arr();
	this.instance.setTransform(-10,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,0,20,18);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.colorlogo();
	this.instance.setTransform(66.5,15,1,1,0,0,0,66.5,15);
	this.instance.filters = [new cjs.ColorFilter(0, 0, 0, 1, 140, 198, 62, 0)];
	this.instance.cache(-2,-2,137,34);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,133,30);


// stage content:
(lib._300x600_Canvas = function(mode,startPosition,loop) {
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
	this.frame_90 = function() {
		/* stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(90).call(this.frame_90).wait(1));

	// cta_clicktag
	this.clickTag_mc = new lib.cta();
	this.clickTag_mc.setTransform(92,536);
	this.clickTag_mc.alpha = 0;
	new cjs.ButtonHelper(this.clickTag_mc, 0, 1, 2, false, new lib.cta(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickTag_mc).wait(77).to({y:541},0).to({y:536,alpha:1},5).wait(9));

	// logo
	this.instance = new lib.logo();
	this.instance.setTransform(134.5,296.5,1,1,0,0,0,51,11.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},10).wait(14).to({y:28.5},14,cjs.Ease.get(1)).wait(53));

	// top
	this.instance_1 = new lib.logo_bg();
	this.instance_1.setTransform(150,50,1,10,0,0,0,150,5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({scaleY:0.83,y:279.2},9).to({scaleY:1,y:275},5).to({y:5},14,cjs.Ease.get(1)).wait(53));

	// bg image
	this.instance_2 = new lib.bg_1();
	this.instance_2.setTransform(125,-248,1,1,0,0,0,125,32);
	this.instance_2._off = true;
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 246, 219, 0)];
	this.instance_2.cache(-2,-2,304,254);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(38).to({_off:false},0).to({y:97},9,cjs.Ease.get(1)).to({y:92},5,cjs.Ease.get(1)).wait(39));

	// text
	this.instance_3 = new lib.text();
	this.instance_3.setTransform(67,438.5,1,1,0,0,0,52,106.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(66).to({_off:false},0).to({y:437.5,alpha:1},6).wait(19));

	// text bg
	this.instance_4 = new lib.text_bg();
	this.instance_4.setTransform(60,225,1,1,0,0,0,60,115);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(52).to({_off:false},0).to({y:435},9,cjs.Ease.get(1)).to({y:425},5,cjs.Ease.get(1)).wait(25));

	// arr
	this.instance_5 = new lib.arr_1();
	this.instance_5.setTransform(150,491,1,1,0,0,0,0,9);
	this.instance_5._off = true;
	this.instance_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 246, 219, 0)];
	this.instance_5.cache(-12,-2,24,22);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(72).to({_off:false},0).to({y:505},5).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,300,300,600);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;