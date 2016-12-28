(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"300x600_3_atlas_", frames: [[0,302,100,34],[0,0,300,300]]}
];


// symbols:



(lib.logo = function() {
	this.spriteSheet = ss["300x600_3_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.shoes = function() {
	this.spriteSheet = ss["300x600_3_atlas_"];
	this.gotoAndStop(1);
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
	this.shape.graphics.f("#454545").s().p("AgIAtQgGgCgEgDQgFgEgDgGIgDgHIgBgIIARAAQABAIADAEIAFADIAFABQAGAAADgDQAEgDAAgGQAAgFgFgDQgDgDgHgCQgLgEgFgDQgEgDgCgFQgDgFAAgGQAAgFACgFQACgEAEgEQAEgEAFgCQAFgCAFAAIAJABQAFACAEADQAEADACAFQADAFABAHIgRAAQgBgFgDgDQgDgDgFAAQgDAAgDADQgDADAAAEQAAAFAEADIAJADQAbAIAAAUQAAAGgCAFQgCAFgEAEQgEAEgGACQgFADgHAAIgJgCg");
	this.shape.setTransform(212.8,9.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#454545").s().p("AgJAuIgIgDQgKgGgEgEQgHgHgDgIIgDgJIAAgJQAAgGADgMQACgFAIgJQAEgFAKgFIAJgDIAIgBQAGAAALAEQAIADAGAGQAIAJACAGQAEALAAAHIAAAHIhJAAQACAGADAFQADAFAEADQAEACAFACQAEABADAAIAJgBIAHgDQAGgEAEgHIAQAAQgDAJgFAGQgFAFgGAEIgMAFQgGACgFAAIgJgBgAAcgFQAAgFgCgEQgCgFgEgDQgEgEgFgCQgFgDgGAAQgFAAgFADQgFACgEAEQgEADgCAFQgDAEAAAFIA4AAIAAAAg");
	this.shape_1.setTransform(204.3,9.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#454545").s().p("AgIA7IAAh1IAQAAIAAB1g");
	this.shape_2.setTransform(197.3,7.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#454545").s().p("AgVA7IANggIgjhVIASAAIAZBDIAbhDIARAAIgvB1g");
	this.shape_3.setTransform(190.8,10.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#454545").s().p("AgJA7IAAhIIgMAAIAAgPIAMAAIAAgeIAQAAIAAAeIAPAAIAAAPIgPAAIAABIg");
	this.shape_4.setTransform(184,7.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#454545").s().p("AgLA7QgHgCgFgFQgGgEgDgHIgCgIIgBgJIARAAQACAVAQAAQAEAAAEgBIAGgEIAEgGQABgEAAgFQAAgEgCgEQgBgDgDgCIgNgGIgPgGIgJgGQgEgEgCgGQgCgGAAgHQAAgFACgFQACgGAEgEQAFgGAGgCQAGgDAHgBQAHABAHACQAGACAEAEQAFAFADAGQACAGAAAHIgRAAQAAgEgCgEIgEgFQgEgEgHAAQgDAAgDACIgFAEQgEAFAAAFQAAAFACADIAEAEQADACAGADIAMAEQAHADAFAEQAGADADAGIADAIIAAAJQAAAIgCAHQgDAGgFAFQgEAFgHADQgHACgIAAQgFABgGgDg");
	this.shape_5.setTransform(177.8,7.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#454545").s().p("AgJAuIgIgDQgKgGgEgEQgHgHgDgIIgDgJIAAgJQAAgGADgMQACgFAIgJQAEgFAKgFIAJgDIAIgBQAGAAALAEQAIADAGAGQAIAJACAGQAEALAAAHIAAAHIhJAAQACAGADAFQADAFAEADQAEACAFACQAEABADAAIAJgBIAHgDQAGgEAEgHIAQAAQgDAJgFAGQgFAFgGAEIgMAFQgGACgFAAIgJgBgAAcgFQAAgFgCgEQgCgFgEgDQgEgEgFgCQgFgDgGAAQgFAAgFADQgFACgEAEQgEADgCAFQgDAEAAAFIA4AAIAAAAg");
	this.shape_6.setTransform(164.4,9.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#454545").s().p("AgIA7IAAh1IAQAAIAAB1g");
	this.shape_7.setTransform(157.3,7.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#454545").s().p("AgNA6IgIgGIgIgHIAAAAIAAANIgRAAIAAh1IARAAIAAApIAHgGIAHgFIAIgCIAIgBQAGAAALADQAIAEAHAGQAHAJADAGIADAIIABAKIgBAJIgDAJQgFAKgEAFQgJAHgGADIgIACIgKABQgHAAgHgCgAgMgOQgFACgEAFQgEAFgCAEQgCAGAAAGQAAAGACAHQADAFAEAEQAEAEAGADQAFACAFAAQAGAAAFgDQAGgCAEgEQAEgEADgGQACgGAAgGQAAgGgCgGQgCgFgEgFQgFgEgFgCQgGgDgGAAQgGAAgGADg");
	this.shape_8.setTransform(150.1,8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#454545").s().p("AgJAuIgKgDIgIgFIgHgGQgFgGgEgJQgDgIAAgJQAAgHADgIQADgJAFgGIAHgHQAEgDAFgBQAEgDAFgBIAKgBIAJABIAIADIAIAFQADACACAEIAAAAIAAgMIARAAIAABXIgRAAIAAgNIAAAAIgFAHQgDADgFACIgIADIgJABIgJgBgAgMgcQgGADgEAFQgDAFgCAFQgCAGAAAEQAAAGACAGQACAFAFAFQAEAEAFADQAGACAFAAQAGAAAGgCQAFgDAFgEQAEgEACgGQADgGAAgGQAAgGgDgGQgCgGgEgEQgFgEgFgCQgGgDgGAAQgGAAgGADg");
	this.shape_9.setTransform(138.7,9.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#454545").s().p("AgIA7IAAh1IARAAIAAB1g");
	this.shape_10.setTransform(131.5,7.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#454545").s().p("AgHA7IAAhXIAQAAIAABXgAgHgnIAAgTIAQAAIAAATg");
	this.shape_11.setTransform(127.7,7.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#454545").s().p("AgJAuIgKgDIgIgFIgHgGQgFgGgEgJQgDgIAAgJQAAgHADgIQADgJAGgGIAGgHQAEgDAFgBQAEgDAFgBIAKgBIAJABIAJADIAHAFQADACACAEIAAAAIAAgMIARAAIAABXIgRAAIAAgNIAAAAIgFAHQgDADgFACIgIADIgJABIgJgBgAgMgcQgGADgEAFQgDAFgCAFQgCAGgBAEQAAAGADAGQACAFAEAFQAFAEAFADQAFACAGAAQAGAAAGgCQAFgDAFgEQAEgEACgGQADgGAAgGQAAgGgDgGQgCgGgEgEQgFgEgFgCQgGgDgGAAQgGAAgGADg");
	this.shape_12.setTransform(120,9.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#454545").s().p("AgFAsIgjhXIASAAIAWA+IABAAIAWg+IASAAIgjBXg");
	this.shape_13.setTransform(110.5,9.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#454545").s().p("AAiA7IgNgjIgpAAIgNAjIgTAAIAth1IAPAAIAtB1gAAPAJIgPgtIAAAAIgOAtIAdAAg");
	this.shape_14.setTransform(100.7,7.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#454545").s().p("AgSAtIAAhXIAQAAIAAAIQAGgKAPgBIAAARQgFABgHADQgEACgDAFQgBAGAAAJIAAAvg");
	this.shape_15.setTransform(88.7,9.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#454545").s().p("AgKAtIgJgDIgJgFIgGgGQgGgGgEgJQgDgIAAgIQAAgGADgLQADgGAHgJIAHgGIAJgEIAJgDIAJgBIAJABIAJADQAHACAJAIQAHAJADAGIADAIIABAJQAAAIgEAIQgDAIgGAHQgJAIgGADIgKADQgFACgFAAQgFAAgFgCgAgMgcQgFADgEAEQgFAFgCAFQgDAGABAFQgBAGADAFQACAGAFAFQADAEAHADQAFACAGAAQAGAAAHgCQAFgDAFgEQADgFACgFQADgGAAgGQAAgFgCgGQgCgFgEgFQgFgEgFgDQgHgDgGAAQgGAAgGADg");
	this.shape_16.setTransform(80.4,9.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#454545").s().p("AgMA7IAAhIIgHAAIAAgPIAHAAIAAgFQAAgHADgFQADgFAFgDQAFgDAEgBIAMgBIAAAPQgIAAgEADQgDACgBAFIAAAFIAQAAIAAAPIgQAAIAABIg");
	this.shape_17.setTransform(72.9,7.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#454545").s().p("AgJAuIgIgDQgKgGgEgEQgHgHgDgIIgDgJIAAgJQAAgGADgMQACgFAIgJQAEgFAKgFIAJgDIAIgBQAGAAALAEQAIADAGAGQAIAJACAGQAEALAAAHIAAAHIhJAAQACAGADAFQADAFAEADQAEACAFACQAEABADAAIAJgBIAHgDQAGgEAEgHIAQAAQgDAJgFAGQgFAFgGAEIgMAFQgGACgFAAIgJgBgAAcgFQAAgFgCgEQgCgFgEgDQgEgEgFgCQgFgDgGAAQgFAAgFADQgFACgEAEQgEADgCAFQgDAEAAAFIA4AAIAAAAg");
	this.shape_18.setTransform(61.1,9.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#454545").s().p("AgJA7IAAhIIgMAAIAAgPIAMAAIAAgeIAQAAIAAAeIAPAAIAAAPIgPAAIAABIg");
	this.shape_19.setTransform(53.7,7.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#454545").s().p("AgHA7IAAhXIAQAAIAABXgAgHgnIAAgTIAQAAIAAATg");
	this.shape_20.setTransform(49.6,7.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#454545").s().p("AgLA7QgHgCgFgFQgGgEgDgHIgCgIIgBgJIARAAQACAVAQAAQAEAAAEgBIAGgEIAEgGQABgEAAgFQAAgEgCgEQgBgDgDgCIgNgGIgPgGIgJgGQgEgEgCgGQgCgGAAgHQAAgFACgFQACgGAEgEQAFgGAGgCQAGgDAHgBQAHABAHACQAGACAEAEQAFAFADAGQACAGAAAHIgRAAQAAgEgCgEIgEgFQgEgEgHAAQgDAAgDACIgFAEQgEAFAAAFQAAAFACADIAEAEQADACAGADIAMAEQAHADAFAEQAGADADAGIADAIIAAAJQAAAIgCAHQgDAGgFAFQgEAFgHADQgHACgIAAQgFABgGgDg");
	this.shape_21.setTransform(43.7,7.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#454545").s().p("AgJAuIgIgDQgKgGgEgEQgHgHgDgIIgDgJIAAgJQAAgGADgMQACgFAIgJQAEgFAKgFIAJgDIAIgBQAGAAALAEQAIADAGAGQAIAJACAGQAEALAAAHIAAAHIhJAAQACAGADAFQADAFAEADQAEACAFACQAEABADAAIAJgBIAHgDQAGgEAEgHIAQAAQgDAJgFAGQgFAFgGAEIgMAFQgGACgFAAIgJgBgAAcgFQAAgFgCgEQgCgFgEgDQgEgEgFgCQgFgDgGAAQgFAAgFADQgFACgEAEQgEADgCAFQgDAEAAAFIA4AAIAAAAg");
	this.shape_22.setTransform(30.3,9.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#454545").s().p("AgJAuIgIgDQgKgGgEgEQgHgHgDgIIgDgJIAAgJQAAgGADgMQACgFAIgJQAEgFAKgFIAJgDIAIgBQAGAAALAEQAIADAGAGQAIAJACAGQAEALAAAHIAAAHIhJAAQACAGADAFQADAFAEADQAEACAFACQAEABADAAIAJgBIAHgDQAGgEAEgHIAQAAQgDAJgFAGQgFAFgGAEIgMAFQgGACgFAAIgJgBgAAcgFQAAgFgCgEQgCgFgEgDQgEgEgFgCQgFgDgGAAQgFAAgFADQgFACgEAEQgEADgCAFQgDAEAAAFIA4AAIAAAAg");
	this.shape_23.setTransform(20,9.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#454545").s().p("AgLA7QgHgCgFgFQgGgEgDgHIgCgIIgBgJIARAAQACAVAQAAQAEAAAEgBIAGgEIAEgGQABgEAAgFQAAgEgCgEQgBgDgDgCIgNgGIgPgGIgJgGQgEgEgCgGQgCgGAAgHQAAgFACgFQACgGAEgEQAFgGAGgCQAGgDAHgBQAHABAHACQAGACAEAEQAFAFADAGQACAGAAAHIgRAAQAAgEgCgEIgEgFQgEgEgHAAQgDAAgDACIgFAEQgEAFAAAFQAAAFACADIAEAEQADACAGADIAMAEQAHADAFAEQAGADADAGIADAIIAAAJQAAAIgCAHQgDAGgFAFQgEAFgHADQgHACgIAAQgFABgGgDg");
	this.shape_24.setTransform(10.8,7.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt3, new cjs.Rectangle(0,0,223.1,18.8), null);


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
	this.shape.graphics.f("#E92076").s().p("AgyBiIAAi8IA0AAIAAAUIABAAQAGgLAIgGQAFgFAIgCQAJgDAMABIAAA4QgYACgIAFQgGAEgEAGQgDAIAAAJIAABog");
	this.shape.setTransform(177.7,17.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E92076").s().p("AgXBiQgLgDgKgEQgJgEgIgHQgIgFgHgIQgMgOgGgSQgHgRAAgSQAAgRAHgRQAGgTAMgOQAHgHAIgGQAIgGAJgEQAKgFALgCQALgCAMAAQANAAALACQALACAKAFQAJAEAIAGQAIAGAHAHQAMAOAGATQAHARAAARQAAASgHARQgGASgMAOQgHAIgIAFQgIAHgJAEQgKAEgLADQgLACgNAAQgMAAgLgCgAgQgrQgJADgGAHQgGAGgEAJQgDAJAAAJQAAAKADAJQAEAIAGAHQAGAGAJAEQAIADAIAAQAJAAAIgDQAJgEAGgGQAGgHAEgIQADgJAAgKQAAgJgDgJQgEgJgGgGQgGgHgJgDQgIgEgJAAQgIAAgIAEg");
	this.shape_1.setTransform(159.4,17.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E92076").s().p("AhEB+IAAj7ICJAAIAAA5IhLAAIAAArIBIAAIAAA3IhIAAIAABgg");
	this.shape_2.setTransform(140,14.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E92076").s().p("AgXBiQgNgDgKgHQgMgIgIgLQgIgNgCgSIA4AAQACASATAAQAHAAAGgEQAGgFAAgGQAAgKgLgFIglgPIgSgIQgJgEgGgFQgFgHgEgHQgDgIAAgKQAAgNAFgMQAGgLALgJQAKgIANgFQANgEAPAAQAJAAALACQAMADALAGQALAHAIALQAHANACASIg3AAQgCgPgPAAQgIAAgFAFQgDADAAAFQAAAHAJAFQAHAEAMAEIAYAIQANAEAIAGQAKAGAFAJQAGALAAAOQAAAPgGAMQgGAMgLAIQgKAJgPAEQgOAFgPAAQgLAAgMgDg");
	this.shape_3.setTransform(111.9,17.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E92076").s().p("AgyBiIAAi8IA0AAIAAAUIABAAQAGgLAIgGQAFgFAIgCQAJgDAMABIAAA4QgYACgJAFQgFAEgEAGQgDAIAAAJIAABog");
	this.shape_4.setTransform(98.2,17.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E92076").s().p("AgbB+IAAi8IA3AAIAAC8gAgbhSIAAgrIA3AAIAAArg");
	this.shape_5.setTransform(86.3,14.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E92076").s().p("AgdBjQgKgCgIgEQgKgEgHgGIgOgMQgLgOgHgTQgHgSABgUQAAgLACgKQABgLAFgJQAEgMAQgUQANgNARgHQARgHATAAQAKAAAKADQAJACAHAEQAMAHAGALIABAAIAAgVIA5AAIAAC8Ig5AAIAAgUIgBAAQgDAGgGAGQgGAFgHADQgPAHgRAAQgLAAgKgCgAgUgrQgJAEgGAIQgGAHgDAJQgCAIAAAHQAAAIACAHQADAJAFAHQAHAIAJAEQAJAFALAAQANAAAKgFQAIgEAFgIQAGgHACgJQADgIAAgHQAAgIgDgIQgDgJgGgHQgGgHgJgEQgJgEgLAAQgLAAgJAEg");
	this.shape_6.setTransform(69,17.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E92076").s().p("AheB+IAAj7IBTAAQAWAAAcAFQAPAEALAJQAIAGAFAIQAGAIADAIIAGASIACATQgDAagEAMIgJAPQgFAHgGAFQgNAMgPAEQgZAGgTAAIgcAAIAABPgAgggJIAaAAQAPAAAJgDQAHgEAEgFQAEgHAAgLQAAgdgpAAIgYAAg");
	this.shape_7.setTransform(47.6,14.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E92076").s().p("AhWCAIAAgyQAdgTAMgJQATgPAQgSQAMgOAIgLQAGgKAEgJQAEgKAAgJQAAgKgFgGQgGgJgNAAQgIAAgGAFQgFADgDAHQgEAIgCARIg9AAIADgbQADgRAJgOQAIgLALgJQAJgHAMgEQAOgGAXgBQAUAAARAGQAPAGAMALQAKAKAGAOQAFAMAAAOQAAAKgCAJIgFATQgHAQgNARQgKAOgQAQIgeAbIBVAAIAAA2g");
	this.shape_8.setTransform(14.9,14.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt2, new cjs.Rectangle(0,0,187.4,35.5), null);


(lib.txt1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#454545").s().p("AgJAuIgIgDQgKgGgEgEQgHgHgDgIIgDgJIAAgJQAAgGADgMQACgFAIgJQAEgFAKgFIAJgDIAIgBQAGAAALAEQAIADAGAGQAIAJACAGQAEALAAAHIAAAHIhJAAQACAGADAFQADAFAEADQAEACAFACQAEABADAAIAJgBIAHgDQAGgEAEgHIAQAAQgDAJgFAGQgFAFgGAEIgMAFQgGACgFAAIgJgBgAAcgFQAAgFgCgEQgCgFgEgDQgEgEgFgCQgFgDgGAAQgFAAgFADQgFACgEAEQgEADgCAFQgDAEAAAFIA4AAIAAAAg");
	this.shape.setTransform(210.6,9.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#454545").s().p("AgFAsIgjhXIASAAIAWA+IAAAAIAXg+IASAAIgjBXg");
	this.shape_1.setTransform(201.2,9.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#454545").s().p("AgIA7IAAhXIAQAAIAABXgAgIgnIAAgTIAQAAIAAATg");
	this.shape_2.setTransform(195,7.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#454545").s().p("AgIAtQgGgCgEgDQgFgEgDgGIgDgHIgBgIIARAAQABAIADAEIAFADIAFABQAGAAADgDQAEgDAAgGQAAgFgFgDQgDgDgHgCQgLgEgFgDQgEgDgCgFQgDgFAAgGQAAgFACgFQACgEAEgEQAEgEAFgCQAFgCAFAAIAJABQAFACAEADQAEADACAFQADAFABAHIgRAAQgBgFgDgDQgDgDgFAAQgDAAgDADQgDADAAAEQAAAFAEADIAJADQAbAIAAAUQAAAGgCAFQgCAFgEAEQgEAEgGACQgFADgHAAIgJgCg");
	this.shape_3.setTransform(189.7,9.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#454545").s().p("AgPArQgHgDgEgEIgFgFIgEgHIgCgJIgBgNIAAgvIAQAAIAAAvQAAAJACAFQACAFADAEQADADAEABIAIABQAFAAAEgCQAEgCADgDQADgDACgFQACgGAAgHIAAgvIAQAAIAABYIgPAAIAAgJIAAAAIgFAEIgGAEQgHADgHAAQgIABgGgDg");
	this.shape_4.setTransform(181.4,9.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#454545").s().p("AgIA7IAAh1IAQAAIAAB1g");
	this.shape_5.setTransform(174.5,7.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#454545").s().p("AgJAtIgJgDQgEgBgDgDIgGgGQgHgHgCgIQgEgJAAgIQAAgIAEgJQADgIAGgHIAGgFQAEgDAEgCIAJgDIAJgBQAJAAAIADQAHADAGAFQAGAFADAGQADAFABAFIgSAAQgDgHgFgDQgCgDgEgCQgFgCgGAAQgGAAgGADQgGADgDAFQgEAEgCAGQgBAFAAAFQAAAGACAFQACAGADAEQAFAFAFADQAFACAGAAIAIgBIAHgDIAGgGIAEgGIASAAQgCAHgEAGQgEAGgHAEQgFAEgHACQgHADgHAAQgFAAgFgCg");
	this.shape_6.setTransform(167.7,9.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#454545").s().p("AAVAsIgVgfIgVAfIgTAAIAegsIgdgrIAUAAIATAdIATgdIAUAAIgdArIAfAsg");
	this.shape_7.setTransform(158.5,9.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#454545").s().p("AgfA7IAAh1IA/AAIAAAQIguAAIAAAjIAuAAIAAAOIguAAIAAAkIAuAAIAAAQg");
	this.shape_8.setTransform(150.3,7.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#454545").s().p("AgSAtIAAhXIAQAAIAAAIQAGgKAPgBIAAARQgFABgHADQgEACgDAFQgBAGAAAJIAAAvg");
	this.shape_9.setTransform(139.5,9.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#454545").s().p("AgJAuIgIgDQgKgGgEgEQgHgHgDgIIgDgJIAAgJQAAgGADgMQACgFAIgJQAEgFAKgFIAJgDIAIgBQAGAAALAEQAIADAGAGQAIAJACAGQAEALAAAHIAAAHIhJAAQACAGADAFQADAFAEADQAEACAFACQAEABADAAIAJgBIAHgDQAGgEAEgHIAQAAQgDAJgFAGQgFAFgGAEIgMAFQgGACgFAAIgJgBgAAcgFQAAgFgCgEQgCgFgEgDQgEgEgFgCQgFgDgGAAQgFAAgFADQgFACgEAEQgEADgCAFQgDAEAAAFIA4AAIAAAAg");
	this.shape_10.setTransform(131.5,9.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#454545").s().p("AgNA6IgIgGIgIgHIAAAAIAAANIgRAAIAAh1IARAAIAAApIAHgGIAHgFIAIgCIAIgBQAGAAALADQAIAEAHAGQAHAJADAGIADAIIABAKIgBAJIgDAJQgFAKgEAFQgJAHgGADIgIACIgKABQgHAAgHgCgAgMgOQgFACgEAFQgEAFgCAEQgCAGAAAGQAAAGACAHQADAFAEAEQAEAEAGADQAFACAFAAQAGAAAFgDQAGgCAEgEQAEgEADgGQACgGAAgGQAAgGgCgGQgCgFgEgFQgFgEgFgCQgGgDgGAAQgGAAgGADg");
	this.shape_11.setTransform(121,8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#454545").s().p("AAyAtIAAgwIAAgHQgBgFgCgEQgCgFgEgCQgFgDgHAAQgHAAgFADQgEACgCAFQgCAEAAAFIgBAHIAAAwIgPAAIAAgwIgBgJIgDgJQgDgFgFgCQgDgBgFAAQgWgBAAAbIAAAwIgRAAIAAhXIAPAAIAAAKIABAAQAJgMAQgBIAIABIAIADQAEACADADIAEAHQADgGAFgEIAIgEQAGgBAHgBIAKABIAJAEIAHAFIAFAGQADAFABAFQABAFAAAHIAAA0g");
	this.shape_12.setTransform(107.6,9.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#454545").s().p("AgJAuIgIgDQgKgGgEgEQgHgHgDgIIgDgJIAAgJQAAgGADgMQACgFAIgJQAEgFAKgFIAJgDIAIgBQAGAAALAEQAIADAGAGQAIAJACAGQAEALAAAHIAAAHIhJAAQACAGADAFQADAFAEADQAEACAFACQAEABADAAIAJgBIAHgDQAGgEAEgHIAQAAQgDAJgFAGQgFAFgGAEIgMAFQgGACgFAAIgJgBgAAcgFQAAgFgCgEQgCgFgEgDQgEgEgFgCQgFgDgGAAQgFAAgFADQgFACgEAEQgEADgCAFQgDAEAAAFIA4AAIAAAAg");
	this.shape_13.setTransform(94.7,9.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#454545").s().p("AAuA7IAAhjIgBAAIgoBjIgJAAIgohjIAABjIgSAAIAAh1IAbAAIAjBaIAkhaIAbAAIAAB1g");
	this.shape_14.setTransform(82.1,7.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#454545").s().p("AglA7IAAh1IAiAAQAJAAAJACQAHADAFAFQAGAFACAGQADAHAAAIQAAAIgDAGQgCAHgGAEQgFAEgHADQgJADgJAAIgRAAIAAAugAgUgCIARAAQAGAAAFgCQAFgCADgDQADgDAAgDIABgHIgBgHQAAgEgDgDQgDgDgFgBQgFgCgGAAIgRAAg");
	this.shape_15.setTransform(66.2,7.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#454545").s().p("AgIA7IAAh1IARAAIAAB1g");
	this.shape_16.setTransform(59.3,7.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#454545").s().p("AgEA7Igwh1IATAAIAhBYIAjhYIASAAIgwB1g");
	this.shape_17.setTransform(51.8,7.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#454545").s().p("AATAsIgTg6IAAAAIgSA6IgJAAIgihXIASAAIAUA4IAAAAIASg4IALAAIASA4IABAAIATg4IASAAIghBXg");
	this.shape_18.setTransform(35.6,9.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#454545").s().p("AgJAuIgIgDQgKgGgEgEQgHgHgDgIIgDgJIAAgJQAAgGADgMQACgFAIgJQAEgFAKgFIAJgDIAIgBQAGAAALAEQAIADAGAGQAIAJACAGQAEALAAAHIAAAHIhJAAQACAGADAFQADAFAEADQAEACAFACQAEABADAAIAJgBIAHgDQAGgEAEgHIAQAAQgDAJgFAGQgFAFgGAEIgMAFQgGACgFAAIgJgBgAAcgFQAAgFgCgEQgCgFgEgDQgEgEgFgCQgFgDgGAAQgFAAgFADQgFACgEAEQgEADgCAFQgDAEAAAFIA4AAIAAAAg");
	this.shape_19.setTransform(24.2,9.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#454545").s().p("AAdA7Ig5haIAABaIgSAAIAAh1IATAAIA4BZIABAAIAAhZIARAAIAAB1g");
	this.shape_20.setTransform(13.1,7.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt1, new cjs.Rectangle(0,0,222.9,18.8), null);


(lib.shoesjpg_ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FABBE2").s().p("A3bXcMAAAgu3MAu3AAAMAAAAu3g");
	this.shape.setTransform(150,150);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.shoesjpg_, new cjs.Rectangle(0,0,300,300), null);


(lib.redcta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F578C5").s().p("ArtClIAAlJIXbAAIAAFJg");
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
	this.shape.graphics.f("#FFFFFF").s().p("AgxDVIAAmqIBjAAIAAGqg");
	this.shape.setTransform(5,21.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.flicker, new cjs.Rectangle(0,0,10,42.7), null);


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
	this.instance = new lib.shoes();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg_leftpng_, new cjs.Rectangle(0,0,300,300), null);


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
	this.shape_8.graphics.f("#E92076").s().p("ArtClIAAlJIXbAAIAAFJg");
	this.shape_8.setTransform(75,16.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,150,33);


// stage content:
(lib._300x600_3 = function(mode,startPosition,loop) {
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
	this.button_clicktag.setTransform(0,0,8.451,16.902);
	new cjs.ButtonHelper(this.button_clicktag, 0, 1, 2, false, new lib.button_clicktag(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_clicktag).wait(113));

	// cta flicker copy 3
	this.instance = new lib.flicker();
	this.instance.parent = this;
	this.instance.setTransform(58.1,263.5,1,1.052,0,18.1,0,5,16.5);
	this.instance.alpha = 0.75;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(102).to({_off:false},0).to({x:243.6},8).to({_off:true},1).wait(2));

	// cta flicker copy 2
	this.instance_1 = new lib.flicker();
	this.instance_1.parent = this;
	this.instance_1.setTransform(58.1,263.5,1,1.052,0,18.1,0,5,16.5);
	this.instance_1.alpha = 0.75;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(97).to({_off:false},0).to({x:243.6},8).to({_off:true},1).wait(7));

	// cta flicker copy
	this.instance_2 = new lib.flicker();
	this.instance_2.parent = this;
	this.instance_2.setTransform(58.1,263.5,1,1.052,0,18.1,0,5,16.5);
	this.instance_2.alpha = 0.75;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(94).to({_off:false},0).to({x:243.6},8).to({_off:true},1).wait(10));

	// cta flicker
	this.instance_3 = new lib.flicker();
	this.instance_3.parent = this;
	this.instance_3.setTransform(58.1,263.5,1,1.052,0,18.1,0,5,16.5);
	this.instance_3.alpha = 0.75;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(89).to({_off:false},0).to({x:243.6},8).to({_off:true},1).wait(15));

	// shop now
	this.instance_4 = new lib.ctapng_();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-112,267.9,1.32,1.32,0,0,0,75,16.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(62).to({_off:false},0).to({x:151},14,cjs.Ease.get(1)).wait(37));

	// logoend
	this.instance_5 = new lib.logo_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-75,44);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(35).to({_off:false},0).to({x:148},11,cjs.Ease.get(1)).wait(67));

	// txt - new vip
	this.instance_6 = new lib.txt1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-169.9,75,1,1,0,0,0,67.1,-7);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(40).to({_off:false},0).to({x:105.1},11,cjs.Ease.get(1)).wait(62));

	// txt - 2pairs
	this.instance_7 = new lib.txt2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-167.2,139.2,1,1,0,0,0,44.8,26.2);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(44).to({_off:false},0).to({x:102.8},12,cjs.Ease.get(1)).wait(21).to({scaleX:1.1,scaleY:1.1,x:98.3,y:140.8},4).to({scaleX:1,scaleY:1,x:102.8,y:139.2},4).wait(28));

	// txt - 995
	this.instance_8 = new lib.txt2b();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-102.3,193.3,1.574,1.574,0,0,0,44.9,26.2);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(48).to({_off:false},0).to({x:143.7},12,cjs.Ease.get(1)).wait(21).to({scaleX:1.68,scaleY:1.68,x:144.7,y:195.3},4).to({scaleX:1.57,scaleY:1.57,x:143.7,y:193.3},4).wait(24));

	// txt - see site
	this.instance_9 = new lib.txt3();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-170.7,239.1,1,1,0,0,0,63.8,16);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(52).to({_off:false},0).to({x:102.3},12,cjs.Ease.get(1)).wait(49));

	// right shoes
	this.instance_10 = new lib.shoesjpg_();
	this.instance_10.parent = this;
	this.instance_10.setTransform(75,-173.9,1,1,0,0,0,75,125);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(20).to({_off:false},0).to({y:125},10,cjs.Ease.get(1)).wait(83));

	// left dots
	this.instance_11 = new lib.bg_leftpng_();
	this.instance_11.parent = this;
	this.instance_11.setTransform(75,727,1,1,0,0,0,75,125);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(20).to({_off:false},0).to({y:425},10,cjs.Ease.get(1)).wait(83));

	// logostart
	this.instance_12 = new lib.logo_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(150,300);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({alpha:1},10).to({_off:true},20).wait(83));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,300,300,600);
// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 30,
	color: "#EAEAEA",
	opacity: 1.00,
	manifest: [
		{src:"images/300x600_3_atlas_.png?1482949403358", id:"300x600_3_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;