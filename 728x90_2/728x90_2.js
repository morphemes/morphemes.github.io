(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"728x90_2_atlas_", frames: [[0,92,364,90],[0,184,100,34],[0,0,364,90]]}
];


// symbols:



(lib.bg_left = function() {
	this.spriteSheet = ss["728x90_2_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.spriteSheet = ss["728x90_2_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.shoes = function() {
	this.spriteSheet = ss["728x90_2_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.txt3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F578C5").s().p("AgGAkIgIgDQgFgEgCgFIgCgFIgBgGIAOAAQAAAFADAEIAEACIAEABQAFABADgDQACgDAAgFQAAgDgDgEIgIgDQgJgEgEgCQgEgCgBgDQgCgFAAgFIABgIQACgDADgDQADgDAEgCQAEgCAEAAIAHABIAHAEQAEACACAEQACAFAAAFIgNAAQgBgEgCgCQgDgCgDAAQgDAAgCACQgDACAAADQAAAEADACIAHADQAWAGAAARQAAAFgCADQgBAFgDADQgEAEgEABQgFACgFAAIgHgCg");
	this.shape.setTransform(171.1,8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F578C5").s().p("AgGAlQgEgBgDgCQgJgEgDgEQgFgFgDgHIgCgHIgBgHQAAgFADgJQACgFAGgHQAEgEAIgEIAHgDIAGAAQAFAAAJADQAHACAFAFQAGAIACAFQADAIAAAGIAAAGIg7AAIAEAJIAFAGIAHADIAHABIAGgBIAGgCQAFgEADgEIAOAAQgDAGgEAFQgEAFgFADIgKADQgEACgFAAIgGgBgAAXgDQAAgEgCgFIgFgGIgHgFIgJgBQgEAAgEABIgHAFIgFAGIgCAJIAtAAIAAAAg");
	this.shape_1.setTransform(164.3,8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F578C5").s().p("AgGAwIAAhfIANAAIAABfg");
	this.shape_2.setTransform(158.6,6.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F578C5").s().p("AgRAwIALgaIgdhFIAOAAIAVA3IAWg3IAOAAIgnBfg");
	this.shape_3.setTransform(153.4,9.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F578C5").s().p("AgGAwIAAg6IgKAAIAAgNIAKAAIAAgYIAMAAIAAAYIAMAAIAAANIgMAAIAAA6g");
	this.shape_4.setTransform(147.8,6.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F578C5").s().p("AgJAwQgFgCgFgDQgEgEgDgFIgCgHIgBgIIAPAAQABASANAAIAGgBIAFgDIADgGIABgHQAAgDgBgDIgEgEQgCgCgIgDIgNgFIgHgFQgDgDgBgFQgCgFAAgFIACgJQABgFADgDQAEgEAFgCQAGgDAFAAQAGAAAFACQAFABAEAEQADAEACAEQADAGAAAGIgPAAQABgEgCgDIgDgEQgEgDgFAAIgFABIgDADQgEAFAAAEQAAADABACIAEAEIAHAEIAKAEQAFACAFADQAEADADAFIACAGIABAHQAAAHgCAGQgCAEgFAFQgDADgGACQgFADgHAAQgEAAgFgCg");
	this.shape_5.setTransform(142.8,6.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F578C5").s().p("AgGAlQgEgBgDgCQgJgEgDgEQgFgFgDgHIgCgHIgBgHQAAgFADgJQACgFAGgHQAEgEAIgEIAHgDIAGAAQAFAAAJADQAHACAFAFQAGAIACAFQADAIAAAGIAAAGIg7AAIAEAJIAFAGIAHADIAHABIAGgBIAGgCQAFgEADgEIAOAAQgDAGgEAFQgEAFgFADIgKADQgEACgFAAIgGgBgAAXgDQAAgEgCgFIgFgGIgHgFIgJgBQgEAAgEABIgHAFIgFAGIgCAJIAtAAIAAAAg");
	this.shape_6.setTransform(131.8,8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F578C5").s().p("AgGAwIAAhfIANAAIAABfg");
	this.shape_7.setTransform(126.1,6.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F578C5").s().p("AgLAuIgGgDIgGgHIAAAAIAAALIgOAAIAAhfIAOAAIAAAiIAAAAIAFgFIAGgEIAGgDIAHAAQAFAAAIADQAHACAGAFQAGAIACAFIACAGIABAIIAAAHIgDAHQgEAKgDACQgIAHgFACIgGACIgIABQgFAAgHgDgAgJgLQgFACgDADIgFAHQgBAFAAAFQgBAFACAGQACAEAEADQAEAEAEABQAFACADAAQAFAAAEgCQAFgCADgDQADgEACgEQACgFAAgFQAAgFgCgFQgBgEgDgDQgEgDgEgCQgFgCgFAAQgFAAgEACg");
	this.shape_8.setTransform(120.4,6.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F578C5").s().p("AgIAlIgHgDIgHgDIgFgFQgFgFgDgHQgCgGAAgIQAAgFACgHQACgHAFgFIAFgGIAHgDIAIgDIAIgBIAHABIAHACIAGAEIAEAFIABAAIAAgKIANAAIAABHIgNAAIAAgLIgBAAIgEAGIgGADQgDACgEABIgHABIgIgBgAgKgWQgEACgEAEQgDADgBAFIgCAIQAAAFACAEQACAFADADQAEAFAEABQAFACAEAAQAFAAAFgCQAEgCAEgDQADgEACgEQACgFAAgFQAAgFgCgFQgCgEgDgEQgEgDgEgBQgFgCgFAAQgFAAgFACg");
	this.shape_9.setTransform(111,8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F578C5").s().p("AgGAwIAAhfIANAAIAABfg");
	this.shape_10.setTransform(105.2,6.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F578C5").s().p("AgGAwIAAhHIANAAIAABHgAgGggIAAgPIANAAIAAAPg");
	this.shape_11.setTransform(102.1,6.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F578C5").s().p("AgIAlIgHgDIgHgDIgFgFQgFgFgDgHQgCgGAAgIQAAgFACgHQACgHAFgFIAFgGIAHgDIAIgDIAIgBIAHABIAHACIAGAEIAEAFIABAAIAAgKIANAAIAABHIgNAAIAAgLIgBAAIgEAGIgGADQgDACgEABIgHABIgIgBgAgKgWQgEACgEAEQgDADgBAFIgCAIQAAAFACAEQACAFADADQAEAFAEABQAFACAEAAQAFAAAFgCQAEgCAEgDQADgEACgEQACgFAAgFQAAgFgCgFQgCgEgDgEQgEgDgEgBQgFgCgFAAQgFAAgFACg");
	this.shape_12.setTransform(95.9,8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F578C5").s().p("AgDAkIgdhHIAOAAIASAyIATgyIAOAAIgcBHg");
	this.shape_13.setTransform(88.1,8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F578C5").s().p("AAcAwIgLgdIgiAAIgKAdIgPAAIAkhfIANAAIAkBfgAANAHIgNgkIAAAAIgLAkIAYAAg");
	this.shape_14.setTransform(80.3,6.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F578C5").s().p("AgPAlIAAhHIANAAIAAAGQAFgHANgBIAAAOQgFAAgFACQgEACgCAFQgBAEAAAIIAAAmg");
	this.shape_15.setTransform(70.5,7.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F578C5").s().p("AgIAlIgHgDIgHgDIgFgGQgFgFgDgHQgDgGAAgHQAAgFADgIQACgFAGgIIAGgEIAHgEIAHgCIAHgBIAIABIAHACQAFACAIAGQAGAHACAFIACAHIABAHQAAAGgDAHQgCAHgFAFQgIAHgFACIgHADIgJABIgIgBgAgJgWQgFACgDADQgEAEgBAEQgCAFAAAEQAAAEACAFQABAFAEADQADAFAFABQAFACAEAAQAFAAAFgCQAFgBADgFQAEgDABgFQACgEAAgFQAAgEgBgFQgCgEgEgEQgDgDgFgCQgEgCgGAAQgEAAgFACg");
	this.shape_16.setTransform(63.7,8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F578C5").s().p("AgJAwIAAg6IgGAAIAAgNIAGAAIAAgEQAAgFADgEQACgEAEgEQADgCAEAAIAJgBIAAAMQgGAAgDACQgDACAAAEIAAAEIAMAAIAAANIgMAAIAAA6g");
	this.shape_17.setTransform(57.6,6.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F578C5").s().p("AgGAlQgEgBgDgCQgJgEgDgEQgFgFgDgHIgCgHIgBgHQAAgFADgJQACgFAGgHQAEgEAIgEIAHgDIAGAAQAFAAAJADQAHACAFAFQAGAIACAFQADAIAAAGIAAAGIg7AAIAEAJIAFAGIAHADIAHABIAGgBIAGgCQAFgEADgEIAOAAQgDAGgEAFQgEAFgFADIgKADQgEACgFAAIgGgBgAAXgDQAAgEgCgFIgFgGIgHgFIgJgBQgEAAgEABIgHAFIgFAGIgCAJIAtAAIAAAAg");
	this.shape_18.setTransform(48,8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F578C5").s().p("AgHAwIAAg6IgKAAIAAgNIAKAAIAAgYIANAAIAAAYIALAAIAAANIgLAAIAAA6g");
	this.shape_19.setTransform(42,6.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F578C5").s().p("AgGAwIAAhHIANAAIAABHgAgGggIAAgPIANAAIAAAPg");
	this.shape_20.setTransform(38.7,6.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F578C5").s().p("AgJAwQgFgCgFgDQgEgEgDgFIgCgHIAAgIIANAAQACASANAAIAGgBIAFgDIAEgGIABgHQgBgDgBgDIgEgEQgCgCgIgDIgMgFIgHgFQgEgDgCgFQgBgFAAgFIABgJQACgFAEgDQADgEAFgCQAGgDAFAAQAGAAAFACQAFABADAEQAFAEACAEQABAGAAAGIgNAAQAAgEgCgDIgDgEQgEgDgFAAIgEABIgFADQgDAFAAAEQAAADACACIADAEIAHAEIAJAEQAHACADADQAFADACAFIACAGIABAHQAAAHgCAGQgCAEgDAFQgFADgFACQgFADgHAAQgEAAgFgCg");
	this.shape_21.setTransform(33.9,6.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F578C5").s().p("AgGAlQgEgBgDgCQgJgEgDgEQgFgFgDgHIgCgHIgBgHQAAgFADgJQACgFAGgHQAEgEAIgEIAHgDIAGAAQAFAAAJADQAHACAFAFQAGAIACAFQADAIAAAGIAAAGIg7AAIAEAJIAFAGIAHADIAHABIAGgBIAGgCQAFgEADgEIAOAAQgDAGgEAFQgEAFgFADIgKADQgEACgFAAIgGgBgAAXgDQAAgEgCgFIgFgGIgHgFIgJgBQgEAAgEABIgHAFIgFAGIgCAJIAtAAIAAAAg");
	this.shape_22.setTransform(23,8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F578C5").s().p("AgGAlQgEgBgDgCQgJgEgDgEQgFgFgDgHIgCgHIgBgHQAAgFADgJQACgFAGgHQAEgEAIgEIAHgDIAGAAQAFAAAJADQAHACAFAFQAGAIACAFQADAIAAAGIAAAGIg7AAIAEAJIAFAGIAHADIAHABIAGgBIAGgCQAFgEADgEIAOAAQgDAGgEAFQgEAFgFADIgKADQgEACgFAAIgGgBgAAXgDQAAgEgCgFIgFgGIgHgFIgJgBQgEAAgEABIgHAFIgFAGIgCAJIAtAAIAAAAg");
	this.shape_23.setTransform(14.7,8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F578C5").s().p("AgJAwQgFgCgFgDQgEgEgDgFIgCgHIAAgIIANAAQACASANAAIAGgBIAFgDIAEgGIABgHQgBgDgBgDIgEgEQgCgCgIgDIgMgFIgHgFQgDgDgDgFQgBgFAAgFIABgJQADgFADgDQADgEAFgCQAGgDAFAAQAGAAAFACQAFABADAEQAFAEACAEQABAGAAAGIgNAAQAAgEgCgDIgDgEQgEgDgFAAIgFABIgEADQgDAFAAAEQAAADACACIADAEIAHAEIAJAEQAHACADADQAFADACAFIACAGIABAHQAAAHgCAGQgBAEgFAFQgEADgFACQgGADgGAAQgEAAgFgCg");
	this.shape_24.setTransform(7.3,6.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt3, new cjs.Rectangle(0,0,178,16), null);


(lib.txt2b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E92076").s().p("AgfBqQgOgFgKgJQgLgIgHgLQgGgMgDgNIA4AAQAHAJAIADQAFACAFAAQALAAAJgJQAEgEACgFQADgFAAgGQAAgMgIgIQgEgEgFgCQgGgDgGAAQgJABgHAEQgIAEgEAKIgtgLIATh5IB2AAIAAAuIhMAAIgFAdIALgEQAHgCALAAQAJAAAIACQAIACAIADQANAHAJALQAIALAFAMQAEAMAAALQAAANgFAOQgFAOgKALQgPAPgLAEQgIAFgJACQgKABgKAAQgQAAgPgEg");
	this.shape.setTransform(84.2,13);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E92076").s().p("Ag1BuIAwhBIgBgBQgCABgIAAQgMAAgLgEQgNgFgKgJQgKgKgGgNIgEgOQgCgIAAgJQAAgJACgJIAEgQQAFgKANgQQAMgLAPgFQALgEAWgCQAJAAAJABQALACAIAEQAJADAHAGQAIAFAGAHQAFAFAEAHIAFANQAEANAAAQIgCARIgEAOQgFANgKAOIg2BPgAgUg1QgEAEgCAFQgDAGAAAGQAAAMAIAIQAEAFAFACQAGADAGAAQAGAAAGgDQAGgCADgEQAJgIAAgMQAAgHgDgGQgDgFgEgEQgJgIgLAAQgLAAgJAIg");
	this.shape_1.setTransform(66.2,12.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E92076").s().p("AgYAZIAAgxIAxAAIAAAxg");
	this.shape_2.setTransform(52.6,21.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E92076").s().p("AhRCqIBJhlIgBgBQgEACgMAAQgTAAgSgHQgSgIgQgOQgPgPgKgUIgGgWQgDgNAAgNQAAgOADgNQACgNAGgMQAGgPAVgZQASgQAXgJQAQgGAigEQAPAAAPADQAPADANAFQAOAGALAIQAMAIAJALQAIAIAGAKIAIAVQAGATAAAZIgDAaIgHAWQgHAUgPAWIhTB6gAgfhRQgHAFgDAJQgEAIAAAKQAAARALAOQAHAGAIAEQAJAEAKAAQAKAAAJgDQAIgEAHgGQAMgNAAgSQAAgLgEgJQgEgIgHgGQgNgMgSAAQgSAAgNANg");
	this.shape_3.setTransform(34.2,18.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E92076").s().p("AgSCCIAAgeQgXgFgMgPQgGgHgEgJQgDgKAAgJIAAgDIAyAAQAAAHADAFQACAEADACQAEADAEAAQAGAAAFgFQAGgFAAgIQAAgIgFgFQgHgHgOgGQgagJgLgJQgIgHgFgJQgFgLgBgOQABgNAEgLQADgKAIgHQAGgHAJgFQAIgEAIgCIAAgeIAnAAIAAAeQAJACAHAEQAIAFAFAHQAGAHADAJQACAKAAALIgtAAQgBgSgPAAQgGAAgFAFQgDAEAAAHQAAAGACAEQADAEAFADQAFAEAXAJQANAFAJAIQAIAFAFAJQAEAHACAIQACAHAAAGQgBAOgFAMQgFALgJAIQgPALgLAEIAAAfg");
	this.shape_4.setTransform(11.2,12.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt2b, new cjs.Rectangle(0,0,95.3,45.6), null);


(lib.txt2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E92076").s().p("AggA/IAAh5IAiAAIAAANQAEgHAFgEQADgDAFgBQAGgCAIAAIAAAlQgQABgFADQgEADgCAEQgCAEAAAHIAABCg");
	this.shape.setTransform(122.8,11.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E92076").s().p("AgPA/IgNgEQgGgDgFgEIgKgJQgHgIgFgNQgEgLAAgLQAAgLAEgLQAFgLAHgKIAKgIQAFgEAGgDQAGgDAHgCQAIgBAHAAQAIAAAIABQAHACAGADQAGADAFAEIAKAIQAHAKAFALQAEALAAALQAAALgEALQgFANgHAIIgKAJIgLAHIgNAEQgIACgIAAQgHAAgIgCgAgKgcQgGACgEAEQgEAFgCAFQgCAHAAAFQAAAGACAGQACAGAEAEQAEAEAGADQAFACAFAAQAGAAAFgCQAGgDAEgEQAEgEACgGQACgGAAgGQAAgFgCgHQgCgFgEgFQgEgEgGgCQgFgCgGAAQgFAAgFACg");
	this.shape_1.setTransform(110.9,12.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E92076").s().p("AgsBSIAAiiIBYAAIAAAkIgvAAIAAAcIAuAAIAAAkIguAAIAAA+g");
	this.shape_2.setTransform(98.4,10.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E92076").s().p("AgOBAQgJgDgGgEQgJgFgEgHQgGgJAAgLIAkAAQABALALAAQAFAAAEgCQAEgDAAgEQAAgHgHgDIgYgKIgLgFQgGgCgDgDQgFgFgCgFQgCgFAAgGQAAgJADgHQAFgIAGgFQAGgFAJgDQAIgDAKAAIANABQAIACAGAEQAIAFAFAHQAFAIABALIgkAAQAAgJgLAAQgEAAgEADQgBACAAADQAAAFAFADQAEADAIADIAQAEQAHADAGAEQAHADADAHQAEAGAAAKQAAAJgEAIQgEAIgHAFQgHAGgJADQgJACgKAAIgOgBg");
	this.shape_3.setTransform(80.3,12.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E92076").s().p("AggA/IAAh5IAiAAIAAANQAEgHAFgEQADgDAFgBQAGgCAIAAIAAAlQgQABgFADQgEADgCAEQgCAEAAAHIAABCg");
	this.shape_4.setTransform(71.4,11.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E92076").s().p("AgRBSIAAh6IAjAAIAAB6gAgRg0IAAgcIAjAAIAAAcg");
	this.shape_5.setTransform(63.7,10.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E92076").s().p("AgTBAIgLgEQgGgCgFgEIgJgIQgHgJgFgMQgEgMAAgNQAAgGABgHQACgHACgGQADgIALgMQAIgJALgEQALgFANAAQAFAAAHACIAKAEQAIAEAEAHIABAAIAAgNIAkAAIAAB5IgkAAIAAgNIgBAAQgCAEgEAEIgJAFQgJAEgKAAIgPgBgAgNgbQgFADgEAFQgEAEgCAGQgBAFAAAFIABAJQACAGAEAEQAEAFAFADQAGADAHAAQAIAAAHgDQAFgDADgFQAEgEACgGIACgKQAAgFgCgFQgDgGgDgEQgEgFgGgCQgGgDgHAAQgHAAgGADg");
	this.shape_6.setTransform(52.6,12.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E92076").s().p("Ag9BSIAAiiIA2AAQAOgBASAEQAKADAHAFQAFAFAEAEIAFALIAEALIACANQgCAQgEAIIgFAKIgHAIQgJAHgJADQgQADgMAAIgSAAIAAA0gAgUgFIARAAQAJAAAFgCQAFgDACgEQADgEAAgGQAAgUgaAAIgPAAg");
	this.shape_7.setTransform(38.8,10.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E92076").s().p("Ag4BTIAAggIAbgSQANgKAKgMQAIgJAEgHQAFgGACgGQADgHAAgFQAAgHgEgEQgEgFgIAAQgFAAgDACQgEACgCAFQgDAGAAALIgoAAQAAgMACgGQACgLAGgJQAFgHAHgGQAGgEAHgEQAKgDAOgBQANAAALAEQAKAEAHAHQAHAHAEAIQADAIAAAJIgBANIgEAMQgEAKgIAKQgHAKgLAKIgTASIA3AAIAAAjg");
	this.shape_8.setTransform(17.6,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt2, new cjs.Rectangle(0,0,137.1,24.3), null);


(lib.txt1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#454545").s().p("AgFAdIgFgCQgHgEgCgDIgGgJIgCgFIAAgGIACgLQABgDAFgGIAJgGIAFgCIAFAAQAEAAAHACQAFACAEAEIAGAJQACAHAAAEIAAAFIgtAAQABADACADIAEAFIAGADIAEABIAGgBIAEgCQAEgDACgEIAKAAQgBAFgEAEIgHAGIgHADIgHABIgFAAgAASgCIgCgGIgEgGIgFgDQgDgCgEAAIgGACIgGADIgDAGIgCAGIAjAAIAAAAg");
	this.shape.setTransform(133.9,6.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#454545").s().p("AgCAcIgXg3IAMAAIANAnIAPgnIAKAAIgVA3g");
	this.shape_1.setTransform(128.1,6.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#454545").s().p("AgEAlIAAg2IAJAAIAAA2gAgEgYIAAgMIAJAAIAAAMg");
	this.shape_2.setTransform(124.2,5.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#454545").s().p("AgFAcIgGgDIgFgGIgBgEIgBgFIALAAQgBAEADADIADACIADABQADAAADgCQACgCAAgEQAAgDgDgCIgGgDQgHgDgDgBIgEgFQgBgDgBgEIACgGQABgDADgCQACgDACgBQAEgBADAAIAFABIAFACQADACACADQACAEAAAEIgKAAQgBgDgCgCQAAgBgBAAQAAAAgBAAQAAgBgBAAQgBAAAAAAQgDAAgCACQAAAAAAABQAAAAgBABQAAAAAAABQAAABAAAAQAAADACACIAFACQARAFAAAMIgBAHIgEAGIgFAEQgEABgEAAIgGgBg");
	this.shape_3.setTransform(120.9,6.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#454545").s().p("AgJAbIgHgEIgDgEIgCgEIgCgGIgBgIIAAgcIALAAIAAAcIABAJQABAEACACIAEACIAFABIAGgBQACgBACgCIADgGQACgDAAgFIAAgcIAKAAIAAA2IgKAAIAAgGIgDADIgEADQgEABgEAAQgFABgEgCg");
	this.shape_4.setTransform(115.7,6.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#454545").s().p("AgEAlIAAhJIAJAAIAABJg");
	this.shape_5.setTransform(111.4,5.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#454545").s().p("AgFAcIgGgBIgFgDIgEgEQgDgEgCgFIgCgLQAAgFACgFQACgFAEgEIAEgEIAFgDIAFgBIAGgBQAFAAAFACIAIAFIAGAGIADAHIgMAAIgEgHIgFgDIgGgBQgEAAgEACQgDACgCADQgDADgBADIgBAGQAAAEACADQABAEACACQACADAEACQADACADAAIAGgBIAEgCIAEgEIACgEIAMAAQgCAFgDAEIgGAGIgIAEQgEABgFAAIgFgBg");
	this.shape_6.setTransform(107.2,6.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#454545").s().p("AAOAcIgOgUIgMAUIgNAAIAUgcIgTgbIANAAIALATIAMgTIANAAIgSAbIATAcg");
	this.shape_7.setTransform(101.4,6.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#454545").s().p("AgTAlIAAhJIAnAAIAAAKIgcAAIAAAVIAcAAIAAAJIgcAAIAAAXIAcAAIAAAKg");
	this.shape_8.setTransform(96.3,5.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#454545").s().p("AgLAcIAAg2IAKAAIAAAFQAEgGAJgBIAAALQgEAAgDADQgDABgBADQgCADAAAGIAAAdg");
	this.shape_9.setTransform(89.6,6.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#454545").s().p("AgFAdIgFgCQgHgEgCgDIgGgJIgCgFIAAgGIACgLQABgDAFgGIAJgGIAFgCIAFAAQAEAAAHACQAFACAEAEIAGAJQACAHAAAEIAAAFIgtAAQABADACADIAEAFIAGADIAEABIAGgBIAEgCQAEgDACgEIAKAAQgBAFgEAEIgHAGIgHADIgHABIgFAAgAASgCIgCgGIgEgGIgFgDQgDgCgEAAIgGACIgGADIgDAGIgCAGIAjAAIAAAAg");
	this.shape_10.setTransform(84.5,6.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#454545").s().p("AgIAkIgFgDIgFgFIAAAIIgKAAIAAhJIAKAAIAAAbIABAAIADgFIAFgCIAFgCIAFgBQADAAAHADQAFACAEAEQAFAFACAEIACAEIAAAHIAAAFIgCAGIgGAJIgJAGIgFACIgGABQgEAAgFgCgAgHgJIgGAFIgEAFIgBAHQAAAFACAEQABADADADIAGAEQADABADAAQAEAAADgBIAGgFIAEgGQACgDAAgEQAAgEgCgEQgBgCgDgDIgFgFIgIgBQgDAAgEABg");
	this.shape_11.setTransform(78,5.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#454545").s().p("AAfAcIAAgeIAAgEIgCgFQgBgDgCgCQgDgCgEAAQgFAAgDACQgDACgBADIgCAFIAAAEIAAAeIgJAAIAAgeIgBgGIgCgEQgBgDgDgCIgFgBQgPAAAAAQIAAAeIgKAAIAAg2IAKAAIAAAGQAFgHALgBIAFABIAFACIAEADIACAEQADgEADgCIAEgDIAIgBIAHABIAFACIAFAEIADADIACAHIABAHIAAAgg");
	this.shape_12.setTransform(69.6,6.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#454545").s().p("AgFAdIgFgCQgHgEgCgDIgGgJIgCgFIAAgGIACgLQABgDAFgGIAJgGIAFgCIAFAAQAEAAAHACQAFACAEAEIAGAJQACAHAAAEIAAAFIgtAAQABADACADIAEAFIAGADIAEABIAGgBIAEgCQAEgDACgEIAKAAQgBAFgEAEIgHAGIgHADIgHABIgFAAgAASgCIgCgGIgEgGIgFgDQgDgCgEAAIgGACIgGADIgDAGIgCAGIAjAAIAAAAg");
	this.shape_13.setTransform(61.6,6.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#454545").s().p("AAcAlIAAg+IgZA+IgFAAIgZg+IAAA+IgLAAIAAhJIARAAIAVA4IAWg4IARAAIAABJg");
	this.shape_14.setTransform(53.7,5.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#454545").s().p("AgXAlIAAhJIAWAAQAFAAAFACQAFABADADQAEADABAEQACAFAAAEQAAAGgCADQgBAFgEABQgDADgFACQgFACgFAAIgLAAIAAAdgAgMgBIALAAQADAAADgCQADgBACgCIACgDIABgFIgBgEIgCgEQgCgCgDgBIgGgBIgLAAg");
	this.shape_15.setTransform(43.8,5.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#454545").s().p("AgEAlIAAhJIAJAAIAABJg");
	this.shape_16.setTransform(39.5,5.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#454545").s().p("AgCAlIgehJIAMAAIAUA3IAWg3IALAAIgdBJg");
	this.shape_17.setTransform(34.8,5.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#454545").s().p("AAMAcIgMglIAAAAIgLAlIgGAAIgUg3IALAAIAMAjIAAAAIAMgjIAFAAIAMAjIAAAAIAMgjIALAAIgUA3g");
	this.shape_18.setTransform(24.7,6.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#454545").s().p("AgFAdIgFgCQgHgEgCgDIgGgJIgCgFIAAgGIACgLQABgDAFgGIAJgGIAFgCIAFAAQAEAAAHACQAFACAEAEIAGAJQACAHAAAEIAAAFIgtAAQABADACADIAEAFIAGADIAEABIAGgBIAEgCQAEgDACgEIAKAAQgBAFgEAEIgHAGIgHADIgHABIgFAAgAASgCIgCgGIgEgGIgFgDQgDgCgEAAIgGACIgGADIgDAGIgCAGIAjAAIAAAAg");
	this.shape_19.setTransform(17.5,6.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#454545").s().p("AASAlIgjg4IAAA4IgLAAIAAhJIAMAAIAjA4IAAg4IAKAAIAABJg");
	this.shape_20.setTransform(10.7,5.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt1, new cjs.Rectangle(0,0,144.1,13.3), null);


(lib.shoesjpg_ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shoes();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.shoesjpg_, new cjs.Rectangle(0,0,364,90), null);


(lib.redcta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E92076").s().p("AtHC5IAAlxIaPAAIAAFxg");
	this.shape.setTransform(84,18.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.redcta, new cjs.Rectangle(0,0,168,37), null);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-50,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(-50,-17,100,34), null);


(lib.flicker = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgxC2IAAlrIBjAAIAAFrg");
	this.shape.setTransform(3.8,14.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.flicker, new cjs.Rectangle(-1.2,-3.7,10,36.5), null);


(lib.button_clicktag = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AixCxIAAliIFiAAIAAFig");
	this.shape.setTransform(17.8,17.8);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.bg_leftpng_ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bg_left();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg_leftpng_, new cjs.Rectangle(0,0,364,90), null);


(lib.ctapng_ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgngtIBPAtIhPAug");
	this.shape.setTransform(152,19.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAZBSIgZhpIAAAAIgYBpIglAAIgqiiIAqAAIAWBoIAAAAIAYhoIAfAAIAYBpIAAAAIAWhpIAqAAIgrCig");
	this.shape_1.setTransform(128.4,19.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgSBTQgIgCgIgEQgIgCgHgGQgHgEgFgGQgGgGgEgGQgFgHgDgIIgEgOQgCgIAAgIQAAgIACgIQABgJADgJQAEgJAGgIQAHgJAJgIQAHgFARgHQAGgDAIgBQAIgCAHAAQAJAAAJADQAJABAHADQAJAEAHAEIAMALQAFAFAFAIQAEAGADAHQAEAIACAJQABAHAAAIQAAAJgBAIQgCAIgEAHQgDAIgEAHIgKAMIgMALQgHAEgJADQgHAEgJACQgJACgJgBQgIABgKgCgAgSgqQgIADgGAHQgFAHgDAJQgDAIAAAIQAAAJADAJQADAJAGAGQAFAIAJADQAJAEAIAAQALAAAJgEQAIgFAFgHQAGgHADgIQACgJAAgHQAAgIgCgIQgDgJgGgHQgFgHgJgEQgIgFgLAAQgJAAgJAFg");
	this.shape_2.setTransform(108.3,19.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAhBSIg9hiIgBAAIABBiIgoAAIAAiiIAkAAIA+BlIABgBIgChkIAoAAIAACig");
	this.shape_3.setTransform(90.6,19.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag9BSIAAiiIA2AAQAOgBASAEQAKADAHAFQAFAFADAFIAGAKIAEALIACANQgCAQgEAIIgFAKIgHAIQgJAHgJADQgRADgMAAIgSAAIAAA0gAgVgFIARAAQAKAAAFgCQAFgDADgEQACgEAAgGQABgUgbAAIgQAAg");
	this.shape_4.setTransform(69.2,19.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgSBTQgIgCgIgEQgIgCgHgGQgGgEgGgGQgGgGgEgGQgEgHgDgIIgGgOQgBgIAAgIQAAgIABgIQACgJAEgJQADgJAGgIQAHgJAKgIQAGgFAQgHQAIgDAHgBQAHgCAIAAQAJAAAJADQAJABAHADQAIAEAHAEIANALQAFAFAFAIQAEAGADAHQAEAIACAJQABAHAAAIQAAAJgBAIQgCAIgEAHQgDAIgEAHIgKAMIgNALQgHAEgIADQgHAEgJACQgJACgJgBQgIABgKgCgAgSgqQgIADgGAHQgFAHgDAJQgDAIAAAIQAAAJADAJQADAJAGAGQAFAIAJADQAJAEAJAAQAKAAAJgEQAIgFAFgHQAGgHACgIQADgJAAgHQAAgIgDgIQgCgJgGgHQgGgHgHgEQgJgFgLAAQgJAAgJAFg");
	this.shape_5.setTransform(52.2,19.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAbBSIAAhBIg0AAIAABBIgqAAIAAiiIAqAAIAAA9IA0AAIAAg9IApAAIAACig");
	this.shape_6.setTransform(34.6,19.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgOBTQgHgBgGgCIgKgGIgIgIQgGgHgDgJQgDgIAAgJIAAgFIAqAAQAAAGACAFQABAEADADQAFAEAFAAQAHAAAEgFQAEgFAAgGQAAgIgGgEQgFgDgUgJQgngPAAgeIABgMIAEgJQAEgIAJgHQAIgGAKgDQAKgEAKAAQAIAAAQAFIALAGIAJAIQAGAIACAJQACAGAAAJIgpAAQgCgQgNAAQgEABgFADQgEADAAAGQAAAHAGAFIAbANQALAFAHAGQAIADAEAHQAEAFACAGQACAGAAAIQAAAJgDAJQgDAIgGAHQgHAIgLAEQgQAEgLAAQgIABgHgCg");
	this.shape_7.setTransform(20,19.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(60));

	// Layer 3
	this.instance = new lib.redcta();
	this.instance.parent = this;
	this.instance.setTransform(75,16.5,1,1,0,0,0,75,16.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},29).to({alpha:0},30).wait(1));

	// Layer 1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F578C5").s().p("AtHC5IAAlxIaPAAIAAFxg");
	this.shape_8.setTransform(84,18.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,168,37);


// stage content:
(lib._728x90_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_112 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(112).call(this.frame_112).wait(1));

	// clicktag
	this.button_clicktag = new lib.button_clicktag();
	this.button_clicktag.parent = this;
	this.button_clicktag.setTransform(0,0,20.507,2.535);
	new cjs.ButtonHelper(this.button_clicktag, 0, 1, 2, false, new lib.button_clicktag(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_clicktag).wait(113));

	// cta flicker copy 3
	this.instance = new lib.flicker();
	this.instance.parent = this;
	this.instance.setTransform(566,60.5,1,1.052,0,18.1,0,5,16.5);
	this.instance.alpha = 0.75;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(102).to({_off:false},0).to({x:707.7},8).to({_off:true},1).wait(2));

	// cta flicker copy 2
	this.instance_1 = new lib.flicker();
	this.instance_1.parent = this;
	this.instance_1.setTransform(566,60.5,1,1.052,0,18.1,0,5,16.5);
	this.instance_1.alpha = 0.75;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(98).to({_off:false},0).to({x:707.7},8).to({_off:true},1).wait(6));

	// cta flicker copy
	this.instance_2 = new lib.flicker();
	this.instance_2.parent = this;
	this.instance_2.setTransform(566,60.5,1,1.052,0,18.1,0,5,16.5);
	this.instance_2.alpha = 0.75;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(93).to({_off:false},0).to({x:707.7},8).to({_off:true},1).wait(11));

	// cta flicker
	this.instance_3 = new lib.flicker();
	this.instance_3.parent = this;
	this.instance_3.setTransform(561,60.5,1,1.052,0,18.1,0,5,16.5);
	this.instance_3.alpha = 0.75;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(89).to({_off:false},0).to({x:707.7},8).to({_off:true},1).wait(15));

	// shop now
	this.instance_4 = new lib.ctapng_();
	this.instance_4.parent = this;
	this.instance_4.setTransform(624,112.5,1,1,0,0,0,75,16.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(62).to({_off:false},0).to({y:56.5},14,cjs.Ease.get(1)).wait(37));

	// logoend
	this.instance_5 = new lib.logo_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-53,45);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(35).to({_off:false},0).to({x:72},11,cjs.Ease.get(1)).wait(67));

	// txt - new vip
	this.instance_6 = new lib.txt1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(446.1,-28.2,1,1,0,0,0,67.1,-7);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(40).to({_off:false},0).to({y:3.8},11,cjs.Ease.get(1)).wait(62));

	// right shoes
	this.instance_7 = new lib.shoesjpg_();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-288,125,1,1,0,0,0,75,125);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(20).to({_off:false},0).to({x:75},10,cjs.Ease.get(1)).wait(83));

	// txt - 2pairs
	this.instance_8 = new lib.txt2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(426.8,120.2,1,1,0,0,0,44.8,26.2);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(44).to({_off:false},0).to({y:51.2},12,cjs.Ease.get(1)).wait(21).to({scaleX:1.1,scaleY:1.1,y:53.2},4).to({scaleX:1,scaleY:1,y:51.2},4).wait(28));

	// txt - 995
	this.instance_9 = new lib.txt2b();
	this.instance_9.parent = this;
	this.instance_9.setTransform(446.8,143.4,1,1,0,0,0,44.8,26.2);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(48).to({_off:false},0).to({y:75.4},12,cjs.Ease.get(1)).wait(21).to({scaleX:1.1,scaleY:1.1,y:77.3},4).to({scaleX:1,scaleY:1,y:75.4},4).wait(24));

	// txt - see site
	this.instance_10 = new lib.txt3();
	this.instance_10.parent = this;
	this.instance_10.setTransform(606.8,-4,1,1,0,0,0,63.8,16);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(52).to({_off:false},0).to({y:35},12,cjs.Ease.get(1)).wait(49));

	// left dots
	this.instance_11 = new lib.bg_leftpng_();
	this.instance_11.parent = this;
	this.instance_11.setTransform(804,125,1,1,0,0,0,75,125);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(20).to({_off:false},0).to({x:439},10,cjs.Ease.get(1)).wait(83));

	// logostart
	this.instance_12 = new lib.logo_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(358,46);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({alpha:1},10).to({_off:true},20).wait(83));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(364,45,728,90);
// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 30,
	color: "#EAEAEA",
	opacity: 1.00,
	manifest: [
		{src:"images/728x90_2_atlas_.png?1482946941158", id:"728x90_2_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;