(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"300x250_2_atlas_", frames: [[0,0,150,250],[152,0,100,34],[0,252,150,250]]}
];


// symbols:



(lib.bg_left = function() {
	this.spriteSheet = ss["300x250_2_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.spriteSheet = ss["300x250_2_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.shoes = function() {
	this.spriteSheet = ss["300x250_2_atlas_"];
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
	this.shape.graphics.f("#454545").s().p("AgHAnQgFgBgEgDQgEgDgDgFIgCgGIgBgIIAPAAQAAAHADAEIAEACIAFABQAFAAADgCQADgDAAgFQAAgFgEgDIgJgEQgJgDgFgDIgFgGQgCgFAAgGIABgIIAFgHQAEgDAEgCIAJgCIAHABIAIAEQAEADACAEQADAFAAAGIgPAAQAAgFgDgCQgDgDgEAAQgDAAgCADQgDACAAAEQAAAEAEACIAHAEQAYAGAAASQAAAFgCAFQgCAEgDADQgEAEgEACQgFACgHAAIgHgCg");
	this.shape.setTransform(104.9,23.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#454545").s().p("AgHAoQgEgBgDgCQgKgFgDgEQgGgFgDgHIgCgIIAAgIQAAgFACgKQACgFAHgIIANgJIAHgCIAHgBQAGAAAJADQAHADAGAFQAGAIACAFQAEAKAAAGIAAAGIhAAAQABAGADAEQADAEAEACIAHAEIAGABIAIgBIAHgDQAFgDADgGIAOAAQgDAIgEAFQgEAFgFADIgLAEIgKACIgHgBgAAZgEQAAgEgCgEQgCgEgEgEIgHgFQgFgCgFAAQgEAAgFACIgIAFIgEAIQgCAEgBAEIAxAAIAAAAg");
	this.shape_1.setTransform(97.5,23.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#454545").s().p("AgGA0IAAhnIANAAIAABng");
	this.shape_2.setTransform(91.3,22.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#454545").s().p("AgSA0IALgcIgfhLIAQAAIAWA7IAXg7IAQAAIgqBng");
	this.shape_3.setTransform(85.7,24.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#454545").s().p("AgHA0IAAhAIgLAAIAAgNIALAAIAAgaIANAAIAAAaIANAAIAAANIgNAAIAABAg");
	this.shape_4.setTransform(79.8,22.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#454545").s().p("AgKA0QgGgCgEgEQgFgEgDgGIgCgHIgBgIIAPAAQACATAOAAIAHgBIAFgEIAEgFIABgIQAAgEgCgDIgEgEIgLgGIgNgFQgEgCgEgDQgDgEgCgFQgCgFAAgGIACgJQACgFADgEQAEgFAFgCQAGgDAGAAQAHAAAFACQAFACAEAEQAEAEADAFQACAGAAAGIgPAAQAAgEgCgDIgDgFQgEgDgGAAIgFABIgEAEQgEAEAAAFQAAAEACACIAEAEQACACAFACIALAEIAKAGQAFADADAFIACAHIABAIQAAAHgCAGQgDAGgEAEQgEAEgGACQgGADgHAAQgEAAgGgCg");
	this.shape_5.setTransform(74.3,22.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#454545").s().p("AgHAoQgEgBgDgCQgKgFgDgEQgGgFgDgHIgCgIIgBgIQAAgFADgKQADgFAGgIIANgJIAIgCIAGgBQAFAAAKADQAHADAGAFQAGAIADAFQADAKAAAGIAAAGIhAAAQABAGADAEQADAEAEACIAHAEIAHABIAHgBIAGgDQAFgDADgGIAPAAQgCAIgFAFQgEAFgFADIgLAEIgKACIgHgBgAAZgEQAAgEgCgEQgCgEgEgEIgHgFQgFgCgFAAQgEAAgFACIgHAFIgGAIQgCAEAAAEIAxAAIAAAAg");
	this.shape_6.setTransform(62.6,23.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#454545").s().p("AgGA0IAAhnIANAAIAABng");
	this.shape_7.setTransform(56.4,22.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#454545").s().p("AgLAyIgIgEIgGgGIAAALIgPAAIAAhnIAPAAIAAAlIAFgGIAHgEIAHgCIAHgBQAFAAAKADQAHADAFAGQAHAIACAFQACADABADIABAJIgBAIIgCAIQgFAJgEAEIgMAJIgIACIgIABQgGAAgGgDgAgKgMQgFACgDAEQgEAEgCAEQgCAFAAAFQAAAGADAFQACAFAEAEQADAEAFACQAFABAEAAQAFAAAFgCQAEgCAEgEQAEgDACgFQACgFAAgGQAAgFgCgFQgCgEgDgEQgEgEgFgCQgFgDgFAAQgFAAgFADg");
	this.shape_8.setTransform(50.2,22.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#454545").s().p("AgJAoIgIgDIgHgEIgFgFQgGgFgCgIQgDgHAAgIQAAgGADgHQACgIAFgFIAFgGIAIgEIAIgDIAJgBIAIABIAHACIAGAEIAFAGIAAgLIAPAAIAABNIgPAAIAAgMIgFAGQgDADgDABQgEACgDABIgIABIgJgBgAgKgYQgFACgEAFQgDAEgCAFQgBAEgBAEQAAAFACAFQACAFAEAEQAEAEAEACQAFACAFAAQAGAAAEgCQAFgCAEgEQADgDADgFQACgFAAgGQAAgFgCgFQgDgFgDgEQgEgEgFgCQgEgCgGAAQgGAAgEADg");
	this.shape_9.setTransform(40.1,23.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#454545").s().p("AgGA0IAAhnIANAAIAABng");
	this.shape_10.setTransform(33.8,22.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#454545").s().p("AgGA0IAAhNIANAAIAABNgAgGgiIAAgRIANAAIAAARg");
	this.shape_11.setTransform(30.5,22.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#454545").s().p("AgIAoIgJgDIgHgEIgFgFQgGgFgCgIQgDgHAAgIQAAgGADgHQACgIAFgFIAFgGIAIgEIAIgDIAJgBIAIABIAHACIAGAEIAGAGIAAgLIAOAAIAABNIgOAAIAAgMIgGAGQgDADgDABQgDACgEABIgIABIgIgBgAgKgYQgGACgDAFQgDAEgCAFQgBAEgBAEQABAFABAFQACAFAEAEQAEAEAEACQAFACAFAAQAGAAAEgCQAFgCAEgEQAEgDACgFQACgFAAgGQAAgFgCgFQgCgFgEgEQgEgEgFgCQgEgCgGAAQgFAAgFADg");
	this.shape_12.setTransform(23.8,23.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#454545").s().p("AgEAnIgfhNIAQAAIATA3IAAAAIAUg3IAQAAIgfBNg");
	this.shape_13.setTransform(15.4,23.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#454545").s().p("AAeA0IgMgfIgkAAIgLAfIgQAAIAnhnIANAAIAnBngAAOAHIgOgmIgMAmIAaAAg");
	this.shape_14.setTransform(6.9,22.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#454545").s().p("AgQAoIAAhNIAOAAIAAAHQAFgIAOgBIAAAPQgFAAgGADQgEACgCAEQgBAGAAAHIAAAqg");
	this.shape_15.setTransform(89.8,8.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#454545").s().p("AgIAoIgJgDIgHgEIgGgGQgFgFgDgIQgDgHAAgHQAAgFADgKQACgFAHgIIAGgFIAHgEIAIgCIAIgBIAIABIAIACQAFACAJAHIAJANIACAIIABAHQAAAHgDAHQgDAHgFAGQgIAIgFACIgJADIgJABIgIgBgAgKgYQgFACgEAEQgDAEgCAFQgCAFAAAEQAAAFACAFQACAFADAEQAEAEAFACQAFACAFAAQAGAAAFgCQAFgCADgEQAEgEACgFQACgFAAgFQAAgEgCgFQgCgFgDgEQgEgEgFgCQgFgDgGAAQgFAAgFADg");
	this.shape_16.setTransform(82.4,8.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#454545").s().p("AgJA0IAAhAIgHAAIAAgNIAHAAIAAgEQAAgGACgEQACgFAFgDIAHgDIALgBIAAANQgIAAgDADQgDACAAAEIAAAEIAOAAIAAANIgOAAIAABAg");
	this.shape_17.setTransform(75.9,7.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#454545").s().p("AgHAoQgEgBgEgCQgJgFgDgEQgFgFgDgHIgDgIIgBgIQABgFADgKQACgFAGgIIANgJIAHgCIAHgBQAGAAAJADQAIADAFAFQAHAIACAFQACAKAAAGIAAAGIg/AAQACAGACAEQACAEAEACIAIAEIAHABIAHgBIAGgDQAGgDACgGIAPAAQgDAIgEAFQgEAFgGADIgKAEIgKACIgHgBgAAZgEQAAgEgCgEQgCgEgDgEIgIgFQgFgCgFAAQgEAAgEACIgIAFIgGAIQgBAEgBAEIAxAAIAAAAg");
	this.shape_18.setTransform(65.6,8.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#454545").s().p("AgHA0IAAhAIgLAAIAAgNIALAAIAAgaIANAAIAAAaIANAAIAAANIgNAAIAABAg");
	this.shape_19.setTransform(59.2,7.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#454545").s().p("AgGA0IAAhNIANAAIAABNgAgGgiIAAgRIANAAIAAARg");
	this.shape_20.setTransform(55.6,7.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#454545").s().p("AgKA0QgGgCgEgEQgFgEgDgGIgCgHIgBgIIAPAAQACATAOAAIAHgBIAFgEIAEgFIABgIQAAgEgCgDIgEgEIgLgGIgNgFQgEgCgEgDQgDgEgCgFQgCgFAAgGIACgJQACgFADgEQAEgFAFgCQAGgDAGAAQAHAAAFACQAFACAEAEQAEAEADAFQACAGAAAGIgPAAQAAgEgCgDIgDgFQgEgDgGAAIgFABIgEAEQgEAEAAAFQAAAEACACIAEAEQACACAFACIALAEIAKAGQAFADADAFIACAHIABAIQAAAHgCAGQgDAGgEAEQgEAEgGACQgGADgHAAQgEAAgGgCg");
	this.shape_21.setTransform(50.4,7.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#454545").s().p("AgHAoQgEgBgEgCQgIgFgEgEQgFgFgDgHIgDgIIAAgIQAAgFADgKQACgFAGgIIANgJIAHgCIAHgBQAFAAAKADQAIADAFAFQAGAIACAFQADAKAAAGIAAAGIg/AAQACAGACAEQACAEAEACIAIAEIAHABIAHgBIAHgDQAEgDADgGIAPAAQgDAIgEAFQgEAFgGADIgKAEIgKACIgHgBgAAZgEQAAgEgCgEQgCgEgDgEIgIgFQgFgCgFAAQgEAAgEACIgJAFIgFAIQgBAEgBAEIAxAAIAAAAg");
	this.shape_22.setTransform(38.7,8.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#454545").s().p("AgHAoQgEgBgDgCQgKgFgDgEQgGgFgDgHIgCgIIgBgIQAAgFADgKQADgFAGgIIANgJIAIgCIAGgBQAFAAAKADQAHADAGAFQAGAIADAFQADAKAAAGIAAAGIhAAAQABAGADAEQADAEAEACIAHAEIAHABIAHgBIAGgDQAFgDAEgGIAOAAQgCAIgFAFQgEAFgFADIgLAEIgKACIgHgBgAAZgEQAAgEgCgEQgCgEgEgEIgHgFQgFgCgFAAQgEAAgFACIgHAFIgGAIQgCAEAAAEIAxAAIAAAAg");
	this.shape_23.setTransform(29.7,8.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#454545").s().p("AgKA0QgGgCgEgEQgFgEgDgGIgCgHIgBgIIAPAAQACATAOAAIAHgBIAFgEIAEgFIABgIQAAgEgCgDIgEgEIgLgGIgNgFQgEgCgEgDQgDgEgCgFQgCgFAAgGIACgJQACgFADgEQAEgFAFgCQAGgDAGAAQAHAAAFACQAFACAEAEQAEAEADAFQACAGAAAGIgPAAQAAgEgCgDIgDgFQgEgDgGAAIgFABIgEAEQgEAEAAAFQAAAEACACIAEAEQACACAFACIALAEIAKAGQAFADADAFIACAHIABAIQAAAHgCAGQgDAGgEAEQgEAEgGACQgGADgHAAQgEAAgGgCg");
	this.shape_24.setTransform(21.7,7.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt3, new cjs.Rectangle(0,0,109.9,31.9), null);


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
	this.shape.graphics.f("#E92076").s().p("AgkBIIAAiKIAmAAIAAAPIAAAAQAFgIAFgEQAEgEAGgCQAHgCAIAAIAAAqQgSABgGAEQgEADgDAFQgCAFAAAHIAABMg");
	this.shape.setTransform(60.1,38.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E92076").s().p("AgRBIIgPgFQgHgDgGgFQgGgEgEgGQgJgKgFgNQgFgNAAgNQAAgMAFgNQAFgOAJgKQAEgFAGgFQAGgEAHgDQAHgEAIgBQAJgCAIAAQAJAAAJACQAIABAHAEQAHADAGAEQAGAFAEAFQAJAKAFAOQAFANAAAMQAAANgFANQgFANgJAKQgEAGgGAEQgGAFgHADIgPAFQgJACgJAAQgIAAgJgCgAgMggQgGADgEAFQgFAEgDAHQgCAGAAAHQAAAHACAHQADAGAFAFQAEAFAGACQAGADAGAAQAHAAAGgDQAGgCAEgFQAFgFADgGQACgHAAgHQAAgHgCgGQgDgHgFgEQgEgFgGgDQgGgCgHAAQgGAAgGACg");
	this.shape_1.setTransform(46.5,38.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E92076").s().p("AgyBcIAAi3IBlAAIAAApIg3AAIAAAgIA0AAIAAAoIg0AAIAABGg");
	this.shape_2.setTransform(32.3,36.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E92076").s().p("AgQBIQgKgDgHgEQgKgGgFgIQgGgKgCgNIAqAAQACANANAAQAFAAAFgDQAEgDAAgFQAAgHgJgEIgbgLIgMgGIgLgGQgEgFgDgGQgDgGAAgHQAAgKAEgIQAEgJAIgGQAIgGAJgDQAKgDALAAQAHAAAHABQAKADAHAEQAJAFAFAIQAGAKABANIgpAAQgBgLgKAAQgHAAgCADQgEADAAADQAAAFAHAEQAFADAJADIASAGQAJADAGAEQAHAEAEAHQAEAIAAALQAAAKgEAJQgFAJgHAGQgIAGgKAEQgLADgLAAQgIAAgIgCg");
	this.shape_3.setTransform(81.2,13.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E92076").s().p("AgkBIIAAiKIAmAAIAAAPIAAAAQAFgIAFgEQAEgEAGgCQAGgCAJAAIAAAqQgSABgGAEQgEADgDAFQgCAFAAAHIAABMg");
	this.shape_4.setTransform(71.1,13.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E92076").s().p("AgUBdIAAiLIApAAIAACLgAgUg8IAAggIApAAIAAAgg");
	this.shape_5.setTransform(62.3,11.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E92076").s().p("AgVBIIgOgEQgGgDgGgEIgKgJQgJgKgFgOQgEgNAAgPQAAgIABgHIAEgPQAEgJAMgOQAJgKANgFQANgFANAAQAIAAAHACQAGABAFADQAJAGAFAHIABAAIAAgPIApAAIAACKIgpAAIAAgPIgBAAQgDAFgEAEQgEAEgGACQgKAFgNAAQgIAAgHgCgAgPgfQgGADgFAFQgEAFgCAHQgCAGAAAFQAAAGACAFQACAHAEAFQAFAFAGAEQAHADAIAAQAJAAAHgDQAGgEAFgFQAEgGACgGQACgGAAgFQAAgGgDgGQgCgGgEgFQgFgGgGgCQgHgDgIAAQgIAAgHADg");
	this.shape_6.setTransform(49.6,13.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E92076").s().p("AhFBdIAAi5IA9AAQAQABAVADQALADAIAHIAKAKQAEAGACAGIAEANIACAOQgCATgEAIIgGAMQgDAFgFAEQgKAIgLAEQgSADgOAAIgUAAIAAA7gAgXgGIATAAQALAAAGgDQAFgCADgEQADgGAAgHQAAgWgeAAIgRAAg");
	this.shape_7.setTransform(33.9,11.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E92076").s().p("AhABeIAAgkIAfgVQAOgLAMgOQAIgKAGgIQAFgHADgGQACgIAAgHQABgHgEgFQgEgGgKAAQgFAAgFADQgEADgCAFQgDAGgBAMIgtAAIACgUQACgMAHgKQAFgJAJgGQAGgFAKgDQAKgEAQgBQAPAAAMAEQAMAFAIAIQAIAHAEAKQAEAJAAAKQAAAIgCAHIgDANQgFAMgKAMQgIALgMALIgVAUIA+AAIAAAog");
	this.shape_8.setTransform(9.8,11.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt2, new cjs.Rectangle(0,0,89.5,52.3), null);


(lib.txt1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#454545").s().p("AgHAoQgEgBgDgCQgKgFgDgEQgFgFgEgHIgCgIIgBgIQAAgFADgKQACgFAHgIIANgJIAIgCIAGgBQAFAAAKADQAIADAFAFQAGAIACAFQAEAKAAAGIAAAGIhAAAQABAGADAEQACAEAFACIAHAEIAGABIAIgBIAHgDQAEgDAEgGIAOAAQgCAIgFAFQgEAFgFADIgLAEIgKACIgHgBgAAZgEQAAgEgCgEQgCgEgEgEIgHgFQgFgCgFAAQgEAAgFACIgIAFIgEAIQgCAEgBAEIAxAAIAAAAg");
	this.shape.setTransform(121,23.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#454545").s().p("AgEAnIgfhNIAQAAIATA3IAAAAIAUg3IAQAAIgfBNg");
	this.shape_1.setTransform(112.7,23.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#454545").s().p("AgGA0IAAhNIANAAIAABNgAgGgiIAAgRIANAAIAAARg");
	this.shape_2.setTransform(107.3,22.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#454545").s().p("AgHAnQgFgBgEgDQgEgDgDgFIgCgGIgBgIIAPAAQAAAHADAEIAEACIAFABQAFAAADgCQADgDAAgFQAAgFgEgDIgJgEQgJgDgFgDIgFgGQgCgFAAgGIABgIIAFgHQAEgDAEgCIAJgCIAHABIAIAEQAEADACAEQADAFAAAGIgPAAQAAgFgDgCQgDgDgEAAQgDAAgCADQgDACAAAEQAAAEAEACIAHAEQAYAGAAASQAAAFgCAFQgCAEgDADQgEAEgEACQgFACgHAAIgHgCg");
	this.shape_3.setTransform(102.7,23.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#454545").s().p("AgNAmQgGgCgEgEIgFgFIgDgGIgBgIIgBgLIAAgpIAOAAIAAApQAAAHACAFQABAFADACQADADADABIAHABQAEAAAEgBQADgCADgDQADgDACgEQABgFAAgGIAAgpIAOAAIAABNIgNAAIAAgJIgEAFIgFADQgHADgGAAQgHAAgFgCg");
	this.shape_4.setTransform(95.4,23.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#454545").s().p("AgGA0IAAhnIANAAIAABng");
	this.shape_5.setTransform(89.4,22.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#454545").s().p("AgHAoIgIgDIgHgEIgGgFQgFgGgCgHQgDgIAAgHQAAgHADgHQACgIAGgFIAFgGIAHgDIAIgDIAIgBQAHAAAHADQAHACAFAFQAFAEADAFIAEAJIgRAAQgCgGgEgDIgGgEIgJgCQgGAAgFADQgFACgDAFQgDAEgCAFIAAAIIABAKQACAFADAEQADAEAFACQAEACAGAAIAHgBIAGgDIAFgEIADgGIARAAQgDAGgEAGQgDAFgFADQgFAEgGACQgGACgGAAIgIgBg");
	this.shape_6.setTransform(83.5,23.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#454545").s().p("AASAnIgSgcIgTAcIgQAAIAagnIgagmIASAAIARAaIAQgaIASAAIgaAmIAcAng");
	this.shape_7.setTransform(75.4,23.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#454545").s().p("AgbA0IAAhnIA3AAIAAAOIgoAAIAAAfIAoAAIAAAMIgoAAIAAAgIAoAAIAAAOg");
	this.shape_8.setTransform(68.2,22.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#454545").s().p("AgQAoIAAhNIAOAAIAAAHQAFgIAOgBIAAAPQgFAAgGADQgEACgCAEQgBAGAAAHIAAAqg");
	this.shape_9.setTransform(58.8,23.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#454545").s().p("AgHAoQgEgBgDgCQgKgFgDgEQgGgFgDgHIgCgIIgBgIQAAgFADgKQADgFAGgIIANgJIAIgCIAGgBQAFAAAKADQAHADAGAFQAGAIADAFQADAKAAAGIAAAGIhAAAQABAGADAEQADAEAEACIAHAEIAHABIAHgBIAGgDQAFgDAEgGIAOAAQgCAIgFAFQgEAFgFADIgLAEIgKACIgHgBgAAZgEQAAgEgCgEQgCgEgEgEIgHgFQgFgCgFAAQgEAAgFACIgHAFIgGAIQgCAEAAAEIAxAAIAAAAg");
	this.shape_10.setTransform(51.8,23.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#454545").s().p("AgLAyIgIgEIgGgGIAAALIgPAAIAAhnIAPAAIAAAlIAFgGIAHgEIAHgCIAHgBQAFAAAKADQAHADAFAGQAHAIACAFQACADABADIABAJIgBAIIgCAIQgFAJgEAEIgMAJIgIACIgIABQgGAAgGgDgAgKgMQgFACgDAEQgEAEgCAEQgCAFAAAFQAAAGADAFQACAFAEAEQADAEAFACQAFABAEAAQAFAAAFgCQAEgCAEgEQAEgDACgFQACgFAAgGQAAgFgCgFQgCgEgDgEQgEgEgFgCQgFgDgFAAQgFAAgFADg");
	this.shape_11.setTransform(42.7,22.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#454545").s().p("AAsAoIAAgqIAAgHIgDgHQgBgFgEgCQgEgDgGAAQgHAAgEADQgDACgCAFIgCAHIAAAGIAAArIgOAAIAAgqIgBgJIgCgHQgDgEgEgCQgEgCgEAAQgTAAAAAXIAAArIgPAAIAAhNIAOAAIAAAJQAIgLAOAAIAHABIAIACIAGAEIACAGQAEgFAEgDQADgCAEgBQAFgCAGAAIAJABIAIADIAGAEIAFAGIACAJIABAKIAAAug");
	this.shape_12.setTransform(30.9,23.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#454545").s().p("AgHAoQgEgBgEgCQgJgFgDgEQgFgFgDgHIgDgIIgBgIQABgFADgKQACgFAGgIIANgJIAHgCIAHgBQAGAAAJADQAIADAFAFQAHAIACAFQACAKAAAGIAAAGIg/AAQACAGACAEQACAEAEACIAIAEIAHABIAHgBIAGgDQAGgDACgGIAPAAQgDAIgEAFQgEAFgGADIgKAEIgKACIgHgBgAAZgEQAAgEgCgEQgCgEgDgEIgIgFQgFgCgFAAQgEAAgEACIgIAFIgGAIQgBAEgBAEIAxAAIAAAAg");
	this.shape_13.setTransform(19.7,23.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#454545").s().p("AAoA0IAAhXIgBAAIgjBXIgIAAIgjhXIAAAAIAABXIgPAAIAAhnIAYAAIAeBPIAfhPIAYAAIAABng");
	this.shape_14.setTransform(8.7,22.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#454545").s().p("AggA0IAAhnIAeAAQAIAAAHACQAHADAEAEQAFAEACAGQACAGAAAGQAAAIgCAFQgCAGgFADQgEAEgHADQgHACgIAAIgPAAIAAApgAgRgCIAPAAQAFAAAEgCIAHgEIADgFIABgHIgBgFIgDgGIgHgEQgEgCgFAAIgPAAg");
	this.shape_15.setTransform(87.7,7.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#454545").s().p("AgHA0IAAhnIAPAAIAABng");
	this.shape_16.setTransform(81.8,7.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#454545").s().p("AgDA0IgqhnIAQAAIAdBNIAehNIAQAAIgpBng");
	this.shape_17.setTransform(75.2,7.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#454545").s().p("AARAnIgRgzIAAAAIgQAzIgIAAIgdhNIAQAAIARAyIAAAAIAQgyIAJAAIAQAyIAAAAIARgyIAQAAIgdBNg");
	this.shape_18.setTransform(61,8.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#454545").s().p("AgHAoQgEgBgEgCQgIgFgEgEQgGgFgDgHIgCgIIAAgIQAAgFACgKQACgFAHgIIANgJIAHgCIAHgBQAGAAAJADQAHADAGAFQAGAIACAFQADAKABAGIAAAGIhAAAQABAGADAEQADAEAEACIAHAEIAGABIAIgBIAHgDQAEgDAEgGIAOAAQgDAIgEAFQgEAFgGADIgKAEIgKACIgHgBgAAZgEQAAgEgCgEQgCgEgEgEIgHgFQgFgCgFAAQgEAAgFACIgIAFIgEAIQgCAEgBAEIAxAAIAAAAg");
	this.shape_19.setTransform(51,8.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#454545").s().p("AAZA0IgyhPIAAAAIAABPIgPAAIAAhnIAQAAIAyBOIAAhOIAPAAIAABng");
	this.shape_20.setTransform(41.4,7.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt1, new cjs.Rectangle(0,0,127.5,31.9), null);


(lib.shoesjpg_ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shoes();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.shoesjpg_, new cjs.Rectangle(0,0,150,250), null);


(lib.redcta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E92076").s().p("ArtClIAAlJIXbAAIAAFJg");
	this.shape.setTransform(75,16.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.redcta, new cjs.Rectangle(0,0,150,33), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgxClIAAlJIBjAAIAAFJg");
	this.shape.setTransform(5,16.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.flicker, new cjs.Rectangle(0,0,10,33), null);


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

}).prototype = getMCSymbolPrototype(lib.bg_leftpng_, new cjs.Rectangle(0,0,150,250), null);


(lib.ctapng_ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgngtIBPAtIhPAug");
	this.shape.setTransform(132,17.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAUBCIgUhVIAAAAIgTBVIgfAAIgiiEIAiAAIASBWIAUhWIAZAAIATBXIABAAIAShXIAiAAIgjCEg");
	this.shape_1.setTransform(110,17.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgOBDQgIgBgGgDQgGgDgGgDQgGgEgEgFIgIgKIgGgLIgEgNIgBgMIABgOQABgHADgHQADgHAFgHQAFgIAIgFQAFgFAOgGIAMgDIAMgBIAPABQAHABAGAEIAMAGQAGAEAEAEIAJAKIAGANIAEAMQABAHAAAGQAAAHgBAGIgEAOIgGALIgJALIgKAIIgMAHIgOADQgHACgHAAQgHAAgHgCgAgPgjQgGAEgFAFQgFAGgCAGQgCAIAAAGQAAAIACAGQADAIAEAFQAFAGAHADQAHADAHAAQAJAAAHgDQAGgEAFgGQAFgFACgIQACgGAAgHQAAgFgCgIQgCgGgFgGQgFgGgGgDQgHgFgJAAQgIABgHADg");
	this.shape_2.setTransform(93.5,17.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAbBCIgyhQIAABQIggAAIAAiEIAdAAIAzBTIAAgBIgBhSIAgAAIAACEg");
	this.shape_3.setTransform(79,17.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgxBCIAAiEIArAAQAMABAOACQAIACAGAFQAEADADAEIAFAJIADAJIABAKQgBAOgDAGIgEAHIgGAHQgHAGgIADQgNADgKAAIgPAAIAAApgAgRgEIAOAAQAIAAAEgCQAEgCACgDQACgDAAgGQAAgQgVAAIgNAAg");
	this.shape_4.setTransform(61.5,17.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgOBDQgIgBgGgDQgGgDgGgDQgGgEgEgFIgIgKIgGgLIgEgNIgBgMIABgOQABgHADgHQADgHAFgHQAFgIAIgFQAFgFAOgGIAMgDIAMgBIAPABQAHABAGAEIAMAGQAGAEAEAEIAJAKIAGANIAEAMQABAHAAAGQAAAHgBAGIgEAOIgGALIgJALIgKAIIgMAHIgOADQgHACgHAAQgHAAgHgCgAgPgjQgGAEgFAFQgFAGgCAGQgCAIAAAGQAAAIACAGQADAIAEAFQAFAGAHADQAHADAHAAQAJAAAHgDQAGgEAFgGQAFgFACgIQACgGAAgHQAAgFgCgIQgCgGgFgGQgFgGgGgDQgHgFgJAAQgIABgHADg");
	this.shape_5.setTransform(47.6,17.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAWBCIAAg1IgrAAIAAA1IgiAAIAAiEIAiAAIAAAzIArAAIAAgzIAiAAIAACEg");
	this.shape_6.setTransform(33.2,17.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgLBEIgLgDIgIgFIgHgFQgFgHgCgIQgCgGAAgHIAAgFIAiAAQAAAGABAEQABADADADQAEACADAAQAGAAAEgDQADgEAAgFQAAgHgFgDIgUgKQgggMAAgZIABgJIADgIQAEgGAHgGQAGgFAJgDQAIgCAHAAQAHAAANADIAJAFQAEADADAEQAGAHACAHIABAMIgiAAQgBgNgLAAQgDAAgEADQgDADAAAEQAAAHAEADIAWALQAJAEAGAEQAGAEAEAEQADAFACAFQABAFAAAGQAAAIgCAHQgDAHgFAGQgFAGgJAEQgNADgJAAIgMgBg");
	this.shape_7.setTransform(21.3,17.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(60));

	// Layer 3
	this.instance = new lib.redcta();
	this.instance.parent = this;
	this.instance.setTransform(75,16.5,1,1,0,0,0,75,16.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},29).to({alpha:0},30).wait(1));

	// Layer 1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F578C5").s().p("ArtClIAAlJIXbAAIAAFJg");
	this.shape_8.setTransform(75,16.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,150,33);


// stage content:
(lib._300x250_2 = function(mode,startPosition,loop) {
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
	this.button_clicktag.setTransform(0,0,8.451,7.042);
	new cjs.ButtonHelper(this.button_clicktag, 0, 1, 2, false, new lib.button_clicktag(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_clicktag).wait(113));

	// cta flicker copy 3
	this.instance = new lib.flicker();
	this.instance.parent = this;
	this.instance.setTransform(162,233.5,1,1.052,0,18.1,0,5,16.5);
	this.instance.alpha = 0.75;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(103).to({_off:false},0).to({x:310.5},8).to({_off:true},1).wait(1));

	// cta flicker copy 2
	this.instance_1 = new lib.flicker();
	this.instance_1.parent = this;
	this.instance_1.setTransform(161,233.5,1,1.052,0,18.1,0,5,16.5);
	this.instance_1.alpha = 0.75;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(100).to({_off:false},0).to({x:310.5},8).to({_off:true},1).wait(4));

	// cta flicker copy
	this.instance_2 = new lib.flicker();
	this.instance_2.parent = this;
	this.instance_2.setTransform(161,233.5,1,1.052,0,18.1,0,5,16.5);
	this.instance_2.alpha = 0.75;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(95).to({_off:false},0).to({x:310.5},8).to({_off:true},1).wait(9));

	// cta flicker
	this.instance_3 = new lib.flicker();
	this.instance_3.parent = this;
	this.instance_3.setTransform(160,233.5,1,1.052,0,18.1,0,5,16.5);
	this.instance_3.alpha = 0.75;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(89).to({_off:false},0).to({x:310.4},8).to({_off:true},1).wait(15));

	// shop now
	this.instance_4 = new lib.ctapng_();
	this.instance_4.parent = this;
	this.instance_4.setTransform(376,233.5,1,1,0,0,0,75,16.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(62).to({_off:false},0).to({x:225},14,cjs.Ease.get(1)).wait(37));

	// right shoes
	this.instance_5 = new lib.shoesjpg_();
	this.instance_5.parent = this;
	this.instance_5.setTransform(377,125,1,1,0,0,0,75,125);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(20).to({_off:false},0).to({x:225},10,cjs.Ease.get(1)).wait(83));

	// logoend
	this.instance_6 = new lib.logo_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-53,35);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(35).to({_off:false},0).to({x:73},11,cjs.Ease.get(1)).wait(67));

	// txt - new vip
	this.instance_7 = new lib.txt1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-57.9,56,1,1,0,0,0,67.1,-7);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(40).to({_off:false},0).to({x:81.1},11,cjs.Ease.get(1)).wait(62));

	// txt - 2pairs
	this.instance_8 = new lib.txt2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-32,119,1,1,0,0,0,55,16);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(44).to({_off:false},0).to({x:86},12,cjs.Ease.get(1)).wait(21).to({regX:44.8,regY:26.2,x:75.8,y:129.2},0).to({scaleX:1.27,scaleY:1.27},4).to({scaleX:1,scaleY:1},4).wait(28));

	// txt - 995
	this.instance_9 = new lib.txt2b();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-50.5,184.2,1,1,0,0,0,44.8,26.2);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(48).to({_off:false},0).to({x:72.8},12,cjs.Ease.get(1)).wait(21).to({scaleX:1.27,scaleY:1.27},4).to({scaleX:1,scaleY:1},4).wait(24));

	// txt - see site
	this.instance_10 = new lib.txt3();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-46.1,227,1,1,0,0,0,63.8,16);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(52).to({_off:false},0).to({x:83.8},12,cjs.Ease.get(1)).wait(49));

	// left dots
	this.instance_11 = new lib.bg_leftpng_();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-73,125,1,1,0,0,0,75,125);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(20).to({_off:false},0).to({x:75},10,cjs.Ease.get(1)).wait(83));

	// logostart
	this.instance_12 = new lib.logo_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(150,125);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({alpha:1},10).to({_off:true},20).wait(83));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,125,300,250);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 30,
	color: "#EAEAEA",
	opacity: 1.00,
	manifest: [
		{src:"images/300x250_2_atlas_.png?1482438303341", id:"300x250_2_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;