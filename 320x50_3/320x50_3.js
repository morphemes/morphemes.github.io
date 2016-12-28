(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"320x50_3_atlas_", frames: [[0,47,70,24],[0,0,50,45]]}
];


// symbols:



(lib.logo = function() {
	this.spriteSheet = ss["320x50_3_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.shoes = function() {
	this.spriteSheet = ss["320x50_3_atlas_"];
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
	this.shape.graphics.f("#454545").s().p("AgEAcIgHgDIgFgGIgCgEIAAgFIAKAAQAAAEADADIADACIADABQADAAACgCQADgCAAgEQAAgDgDgCIgGgDQgHgDgDgBIgEgFQgBgDAAgEIABgGQABgDACgCQACgDAEgBQADgBADAAIAFABIAGACQADACABADQACAEAAAEIgLAAQAAgDgCgCQAAgBgBAAQAAAAgBAAQAAgBgBAAQgBAAgBAAQgCAAgBACQgBAAAAABQAAAAgBABQAAAAAAABQAAABAAAAQAAADADACIAFACQAQAFAAAMIgBAHIgEAGIgGAEQgDABgFAAIgEgBg");
	this.shape.setTransform(137.2,6.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#454545").s().p("AgFAdIgFgCQgHgEgCgDIgGgJIgCgFIAAgGIACgLQABgDAFgGIAJgGIAFgCIAFAAQAEAAAHACQAFACAEAEIAGAJQACAHAAAEIAAAFIgtAAQABADACADIAEAFIAGADIAEABIAGgBIAEgCQAEgDACgEIAKAAQgBAFgEAEIgHAGIgHADIgHABIgFAAgAASgCIgCgGIgEgGIgFgDQgDgCgEAAIgGACIgGADIgDAGIgCAGIAjAAIAAAAg");
	this.shape_1.setTransform(131.9,6.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#454545").s().p("AgEAlIAAhJIAJAAIAABJg");
	this.shape_2.setTransform(127.5,5.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#454545").s().p("AgNAlIAIgUIgWg1IALAAIAQAqIAQgqIAMAAIgeBJg");
	this.shape_3.setTransform(123.5,7.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#454545").s().p("AgFAlIAAgtIgHAAIAAgJIAHAAIAAgTIAJAAIAAATIAJAAIAAAJIgJAAIAAAtg");
	this.shape_4.setTransform(119.3,5.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#454545").s().p("AgHAlIgHgEQgEgDgCgEIgBgFIgBgGIALAAQABANAKABIAFgBQAAgBABAAQAAAAABAAQAAgBAAAAQABgBAAAAIADgEIABgFIgBgFIgDgDIgIgEIgJgEIgGgEIgEgFIgBgIIABgHIAEgHQADgDAEgBQAEgCAEAAQAEAAAEABIAHAEIAEAHQACADAAAFIgLAAIgBgFIgCgDQgDgCgEAAIgDABIgEACQgCADAAAEQAAAAAAABQAAAAAAABQAAAAABABQAAABAAAAIADADIAFADIAHACIAIAFIAFAFIACAFIABAGQAAAFgCAEQgCAEgDADQgDADgEACQgEABgFAAIgHgBg");
	this.shape_5.setTransform(115.4,5.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#454545").s().p("AgFAdIgFgCQgHgEgCgDIgGgJIgCgFIAAgGIACgLQABgDAFgGIAJgGIAFgCIAFAAQAEAAAHACQAFACAEAEIAGAJQACAHAAAEIAAAFIgtAAQABADACADIAEAFIAGADIAEABIAGgBIAEgCQAEgDACgEIAKAAQgBAFgEAEIgHAGIgHADIgHABIgFAAgAASgCIgCgGIgEgGIgFgDQgDgCgEAAIgGACIgGADIgDAGIgCAGIAjAAIAAAAg");
	this.shape_6.setTransform(107,6.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#454545").s().p("AgEAlIAAhJIAJAAIAABJg");
	this.shape_7.setTransform(102.6,5.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#454545").s().p("AgIAkIgFgDIgFgFIAAAIIgKAAIAAhJIAKAAIAAAbIABAAIADgFIAFgCIAFgCIAFgBQADAAAHADQAFACAEAEQAFAFACAEIACAEIAAAHIAAAFIgCAGIgGAJIgJAGIgFACIgGABQgEAAgFgCgAgHgJIgGAFIgEAFIgBAHQAAAFACAEQABADADADIAGAEQADABADAAQAEAAADgBIAGgFIAEgGQACgDAAgEQAAgEgCgEQgBgCgDgDIgFgFIgIgBQgDAAgEABg");
	this.shape_8.setTransform(98.1,5.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#454545").s().p("AgGAdIgGgCIgFgDIgEgEQgDgEgCgFQgCgFAAgGIABgJQACgFAEgFIAEgDIAFgDIAGgCIAGgBIAGAAIAFACIAEADIAEAEIAAgIIAKAAIAAA3IgKAAIAAgJIgEAFIgEADIgGACIgFAAIgGAAgAgHgRQgEACgCADQgDADgBADIgBAGIABAHIAEAHIAGAEQAEACADAAQAEAAADgCQAEgBADgDIAEgGQABgEAAgEQAAgDgBgEQgCgEgCgCIgHgEQgDgCgEAAQgEAAgDACg");
	this.shape_9.setTransform(91,6.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#454545").s().p("AgEAlIAAhJIAJAAIAABJg");
	this.shape_10.setTransform(86.5,5.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#454545").s().p("AgEAlIAAg2IAJAAIAAA2gAgEgYIAAgMIAJAAIAAAMg");
	this.shape_11.setTransform(84.1,5.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#454545").s().p("AgGAdIgGgCIgFgDIgEgEQgDgEgCgFQgCgFAAgGIABgJQACgFAEgFIAEgDIAFgDIAGgCIAGgBIAGAAIAFACIAEADIAEAEIAAgIIAKAAIAAA3IgKAAIAAgJIgEAFIgEADIgGACIgFAAIgGAAgAgHgRQgEACgCADQgDADgBADIgBAGIABAHIAEAHIAGAEQAEACADAAQAEAAADgCQAEgBADgDIAEgGQABgEAAgEQAAgDgBgEQgCgEgCgCIgHgEQgDgCgEAAQgEAAgDACg");
	this.shape_12.setTransform(79.4,6.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#454545").s().p("AgCAcIgXg3IALAAIAOAnIAPgnIALAAIgXA3g");
	this.shape_13.setTransform(73.4,6.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#454545").s().p("AAVAlIgIgWIgZAAIgJAWIgLAAIAchJIAJAAIAcBJgAAKAFIgKgbIAAAAIgJAbIATAAg");
	this.shape_14.setTransform(67.3,5.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#454545").s().p("AgLAcIAAg2IAKAAIAAAFQAEgGAJgBIAAALQgDAAgFADQgCABgCADQAAADAAAGIAAAdg");
	this.shape_15.setTransform(59.8,6.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#454545").s().p("AgGAcIgGgBIgFgDIgEgEQgEgFgCgFQgCgFAAgFIACgKQACgEAFgFIAEgEIAFgDIAGgCIAFAAIAGAAIAGACIAJAGIAHAKIABAFIABAFQAAAFgCAFQgCAFgEAFQgGAFgDABIgGACIgHABIgGgBgAgHgRIgGAEIgEAHIgCAGQAAAEACADIAEAHIAGAEQAEACADAAQAEAAAEgCIAGgEQADgDABgEQABgDAAgEIgBgGIgEgHIgGgEQgEgCgEAAIgHACg");
	this.shape_16.setTransform(54.6,6.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#454545").s().p("AgHAlIAAgtIgEAAIAAgJIAEAAIAAgDQABgEABgDQACgEADgCIAFgCIAHgBIAAAKQgFAAgCABQAAABgBAAQAAABAAAAQgBABAAABQAAAAAAABIAAADIAJAAIAAAJIgJAAIAAAtg");
	this.shape_17.setTransform(49.9,5.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#454545").s().p("AgFAdIgFgCQgHgEgCgDIgGgJIgCgFIAAgGIACgLQABgDAFgGIAJgGIAFgCIAFAAQAEAAAHACQAFACAEAEIAGAJQACAHAAAEIAAAFIgtAAQABADACADIAEAFIAGADIAEABIAGgBIAEgCQAEgDACgEIAKAAQgBAFgEAEIgHAGIgHADIgHABIgFAAgAASgCIgCgGIgEgGIgFgDQgDgCgEAAIgGACIgGADIgDAGIgCAGIAjAAIAAAAg");
	this.shape_18.setTransform(42.5,6.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#454545").s().p("AgFAlIAAgtIgHAAIAAgJIAHAAIAAgTIAKAAIAAATIAJAAIAAAJIgJAAIAAAtg");
	this.shape_19.setTransform(38,5.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#454545").s().p("AgEAlIAAg2IAJAAIAAA2gAgEgYIAAgMIAJAAIAAAMg");
	this.shape_20.setTransform(35.4,5.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#454545").s().p("AgHAlIgHgEQgEgDgCgEIgBgFIgBgGIALAAQABANAKABIAFgBQAAgBABAAQAAAAABAAQAAgBAAAAQABgBAAAAIADgEIABgFIgBgFIgDgDIgIgEIgJgEIgGgEIgEgFIgBgIIABgHIAEgHQADgDAEgBQAEgCAEAAQAEAAAEABIAHAEIAEAHQACADAAAFIgLAAIgBgFIgCgDQgDgCgEAAIgDABIgEACQgCADAAAEQAAAAAAABQAAAAAAABQAAAAABABQAAABAAAAIADADIAFADIAHACIAIAFIAFAFIACAFIABAGQAAAFgCAEQgCAEgDADQgDADgEACQgEABgFAAIgHgBg");
	this.shape_21.setTransform(31.7,5.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#454545").s().p("AgFAdIgFgCQgHgEgCgDIgGgJIgCgFIAAgGIACgLQABgDAFgGIAJgGIAFgCIAFAAQAEAAAHACQAFACAEAEIAGAJQACAHAAAEIAAAFIgtAAQABADACADIAEAFIAGADIAEABIAGgBIAEgCQAEgDACgEIAKAAQgBAFgEAEIgHAGIgHADIgHABIgFAAgAASgCIgCgGIgEgGIgFgDQgDgCgEAAIgGACIgGADIgDAGIgCAGIAjAAIAAAAg");
	this.shape_22.setTransform(23.3,6.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#454545").s().p("AgFAdIgFgCQgHgEgCgDIgGgJIgCgFIAAgGIACgLQABgDAFgGIAJgGIAFgCIAFAAQAEAAAHACQAFACAEAEIAGAJQACAHAAAEIAAAFIgtAAQABADACADIAEAFIAGADIAEABIAGgBIAEgCQAEgDACgEIAKAAQgBAFgEAEIgHAGIgHADIgHABIgFAAgAASgCIgCgGIgEgGIgFgDQgDgCgEAAIgGACIgGADIgDAGIgCAGIAjAAIAAAAg");
	this.shape_23.setTransform(16.9,6.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#454545").s().p("AgHAlIgHgEQgEgDgCgEIgBgFIgBgGIALAAQABANAKABIAFgBQAAgBABAAQAAAAABAAQAAgBAAAAQABgBAAAAIADgEIABgFIgBgFIgDgDIgIgEIgJgEIgGgEIgEgFIgBgIIABgHIAEgHQADgDAEgBQAEgCAEAAQAEAAAEABIAHAEIAEAHQACADAAAFIgLAAIgBgFIgCgDQgDgCgEAAIgDABIgEACQgCADAAAEQAAAAAAABQAAAAAAABQAAAAABABQAAABAAAAIADADIAFADIAHACIAIAFIAFAFIACAFIABAGQAAAFgCAEQgCAEgDADQgDADgEACQgEABgFAAIgHgBg");
	this.shape_24.setTransform(11.2,5.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt3, new cjs.Rectangle(0,0,148.1,13.3), null);


(lib.txt2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E92076").s().p("AgQA6QgIgDgGgEQgFgFgEgGQgEgHgBgHIAeAAQAEAGAFABIAFAAQAGAAAEgEQADgCABgDIABgGQAAgGgEgFIgFgDIgGgBQgFAAgEACQgEACgCAGIgZgHIAKhBIBBAAIAAAZIgpAAIgDAQIAGgCQADgCAGABIAKAAIAIADQAHAEAFAGQAFAGACAHQACAGAAAGQAAAIgCAHQgDAIgFAFQgJAJgFACIgKADIgLABQgIAAgIgCg");
	this.shape.setTransform(137.7,8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E92076").s().p("AgcA8IAagkIgGABQgHAAgGgDQgHgDgFgFQgGgFgDgHIgDgHIgBgJIABgKIADgJQACgFAIgJQAGgGAJgDQAFgCAMgBIAKABIAKADQAFABAEADIAIAHIAFAHIADAHQACAHAAAJIgBAJIgDAHQgDAHgFAIIgdArgAgKgcQgDACgBADQgBADAAADQAAAGAEAFIAFAEQADABADAAQAEAAADgBQADgBACgDQAEgEAAgGQAAgEgBgEQgBgDgDgCQgFgEgGAAQgGAAgEAFg");
	this.shape_1.setTransform(127.9,7.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E92076").s().p("AgNANIAAgaIAbAAIAAAag");
	this.shape_2.setTransform(120.4,12.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E92076").s().p("AgcA8IAagkIgGABQgHAAgGgDQgHgDgFgFQgGgFgDgHIgDgHIgBgJIABgKIADgJQACgFAIgJQAGgGAJgDQAFgCAMgBIAKABIAKADQAFABAEADIAIAHIAFAHIADAHQACAHAAAJIgBAJIgDAHQgDAHgFAIIgdArgAgKgcQgDACgBADQgBADAAADQAAAGAEAFIAFAEQADABADAAQAEAAADgBQADgBACgDQAEgEAAgGQAAgEgBgEQgBgDgDgCQgFgEgGAAQgGAAgEAFg");
	this.shape_3.setTransform(113,7.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E92076").s().p("AgJBHIAAgQQgNgDgHgIQgDgEgBgFQgCgGAAgEIAAgCIAbAAIACAHIACADQACACACgBQADABADgDQAEgDAAgEQAAgFgEgDQgDgDgIgDQgOgFgFgFQgFgDgDgGQgCgFAAgIQAAgHACgGQABgGAFgEQADgEAEgCQAFgDAFgBIAAgQIAVAAIAAAQQAFABAEADQADACAEAEQADAFABAEQACAGgBAGIgYAAQgBgLgIAAQgDABgCADQgCACAAADQAAADABADIAEAEQADACAMAFQAHADAFAEQAEADADAEIAEAJIABAHQAAAHgEAHQgDAGgEAEQgJAGgFACIAAARg");
	this.shape_4.setTransform(103.2,7.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E92076").s().p("AgXAuIAAhYIAYAAIAAAJQADgEAEgDQACgDAEAAQAEgCAGAAIAAAbQgMABgDACQgDACgCADQgBAEAAAEIAAAwg");
	this.shape_5.setTransform(90.8,9.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E92076").s().p("AgKAuIgKgDIgIgFIgHgGQgGgHgDgJQgDgHAAgJQAAgIADgHQADgJAGgGIAHgHIAIgFIAKgDIAKgBIALABIAKADIAIAFQAEADADAEQAGAGADAJQADAHAAAIQAAAJgDAHQgDAJgGAHIgHAGIgIAFIgKADIgLABIgKgBgAgHgUQgEACgDADIgFAHIgBAIIABAJIAFAHIAHAFQAEABADABIAIgCQAEgCADgDQADgDACgEIABgJIgBgIQgCgEgDgDQgDgDgEgCQgEgBgEAAQgDAAgEABg");
	this.shape_6.setTransform(82.2,9.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E92076").s().p("AggA7IAAh1IBAAAIAAAaIgjAAIAAAVIAiAAIAAAZIgiAAIAAAtg");
	this.shape_7.setTransform(73.1,7.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E92076").s().p("AgKAuQgHgCgEgCQgGgEgEgGQgDgFgBgJIAaAAQABAJAJgBQADAAACgCQAEgBAAgDQAAgFgGgDIgRgHIgIgDIgHgEQgDgDgBgEQgCgDAAgFQAAgHADgFQACgGAFgDQAFgEAGgDQAHgCAGAAIAKABQAFACAFADQAGADADAGQAEAGAAAHIgaAAQAAgGgHAAQgEAAgCACQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAABQAAADADADIAJADIALAEIALAEQAEADACAEQADAFAAAHQAAAHgDAGQgCAFgGAFQgFADgGACQgGADgIAAIgKgCg");
	this.shape_8.setTransform(60,9.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E92076").s().p("AgXAuIAAhYIAYAAIAAAJQADgEAEgDQACgDAEAAQAEgCAGAAIAAAbQgMABgDACQgDACgCADQgBAEAAAEIAAAwg");
	this.shape_9.setTransform(53.5,9.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E92076").s().p("AgMA7IAAhYIAZAAIAABYgAgMgmIAAgUIAZAAIAAAUg");
	this.shape_10.setTransform(47.9,7.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E92076").s().p("AgNAvIgJgEQgEgBgEgDIgGgGQgGgGgDgJQgDgIAAgKIABgKIADgJQACgGAIgIQAGgHAIgDQAIgDAJgBIAJACIAHADQAGADADAFIAAAAIAAgKIAbAAIAABYIgbAAIAAgJIAAAAIgFAGQgCACgEABQgHAEgHAAIgKgBgAgJgUQgEACgDAEQgDADgBAFIgBAGIABAHIAEAIQADAEAEACQAEACAFAAQAGAAAEgCQAEgCADgEQADgDABgFIABgHIgBgHIgEgHIgHgGQgFgBgFAAQgFAAgEABg");
	this.shape_11.setTransform(39.8,9.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E92076").s().p("AgsA7IAAh1IAnAAQAKAAANACQAHACAGAEIAGAHIAEAIIADAIIABAJQgCAMgCAFIgEAHIgFAGQgGAFgHADQgMACgIAAIgOAAIAAAlgAgPgDIANAAQAGAAAEgCQAEgCACgCQACgEAAgFQAAgOgTAAIgMAAg");
	this.shape_12.setTransform(29.7,7.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E92076").s().p("AgoA8IAAgXIATgOQAJgHAIgIIAJgLIAEgJQACgFAAgEQAAgFgCgDQgDgEgGAAQgDAAgDACQgCACgCADQgCAEAAAIIgdAAIABgNQACgIAEgGQADgGAGgEQAEgDAGgCQAGgDAKAAQAKAAAIADQAHACAFAFQAFAFADAHQADAGAAAGIgBAJIgDAJQgDAHgGAIIgNAOIgOANIAoAAIAAAZg");
	this.shape_13.setTransform(14.4,7.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt2, new cjs.Rectangle(0,0,152.1,18.8), null);


(lib.txt1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#454545").s().p("AgFAdIgFgCQgHgEgCgDIgGgJIgCgFIAAgGIACgLQABgDAFgGIAJgGIAFgCIAFAAQAEAAAHACQAFACAEAEIAGAJQACAHAAAEIAAAFIgtAAQABADACADIAEAFIAGADIAEABIAGgBIAEgCQAEgDACgEIAKAAQgBAFgEAEIgHAGIgHADIgHABIgFAAgAASgCIgCgGIgEgGIgFgDQgDgCgEAAIgGACIgGADIgDAGIgCAGIAjAAIAAAAg");
	this.shape.setTransform(132.6,6.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#454545").s().p("AgCAcIgXg3IAMAAIANAnIAPgnIAKAAIgVA3g");
	this.shape_1.setTransform(126.7,6.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#454545").s().p("AgEAlIAAg2IAJAAIAAA2gAgEgYIAAgMIAJAAIAAAMg");
	this.shape_2.setTransform(122.8,5.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#454545").s().p("AgFAcIgGgDIgFgGIgBgEIgBgFIALAAQgBAEADADIADACIADABQADAAADgCQACgCAAgEQAAgDgDgCIgGgDQgHgDgDgBIgEgFQgBgDAAgEIABgGQABgDADgCQACgDACgBQAEgBADAAIAFABIAFACQADACACADQACAEAAAEIgKAAQgBgDgCgCQAAgBgBAAQAAAAgBAAQAAgBgBAAQgBAAAAAAQgDAAgCACQAAAAAAABQAAAAgBABQAAAAAAABQAAABAAAAQAAADACACIAFACQARAFAAAMIgBAHIgEAGIgFAEQgEABgEAAIgGgBg");
	this.shape_3.setTransform(119.6,6.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#454545").s().p("AgJAbIgHgEIgDgEIgCgEIgCgGIgBgIIAAgcIALAAIAAAcIABAJQABAEACACIAEACIAFABIAGgBQADgBABgCIADgGQACgDAAgFIAAgcIAKAAIAAA2IgKAAIAAgGIgDADIgEADQgEABgEAAQgFABgEgCg");
	this.shape_4.setTransform(114.4,6.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#454545").s().p("AgEAlIAAhJIAJAAIAABJg");
	this.shape_5.setTransform(110.1,5.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#454545").s().p("AgFAcIgGgBIgFgDIgEgEQgDgEgCgFIgCgLQAAgFACgFQACgFAEgEIAEgEIAFgDIAFgBIAGgBQAFAAAFACIAIAFIAGAGIADAHIgMAAIgEgHIgFgDIgGgBQgEAAgEACQgDACgCADQgDADgBADIgBAGQAAAEACADQABAEACACQACADAEACQADACADAAIAGgBIAEgCIAEgEIACgEIAMAAQgCAFgDAEIgGAGIgIAEQgEABgFAAIgFgBg");
	this.shape_6.setTransform(105.8,6.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#454545").s().p("AAOAcIgOgUIgMAUIgNAAIAUgcIgTgbIANAAIALATIAMgTIANAAIgSAbIATAcg");
	this.shape_7.setTransform(100.1,6.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#454545").s().p("AgTAlIAAhJIAnAAIAAAKIgcAAIAAAVIAcAAIAAAJIgcAAIAAAXIAcAAIAAAKg");
	this.shape_8.setTransform(95,5.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#454545").s().p("AgLAcIAAg2IAKAAIAAAFQAEgGAJgBIAAALQgEAAgDADQgDABgBADQgCADAAAGIAAAdg");
	this.shape_9.setTransform(88.2,6.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#454545").s().p("AgFAdIgFgCQgHgEgCgDIgGgJIgCgFIAAgGIACgLQABgDAFgGIAJgGIAFgCIAFAAQAEAAAHACQAFACAEAEIAGAJQACAHAAAEIAAAFIgtAAQABADACADIAEAFIAGADIAEABIAGgBIAEgCQAEgDACgEIAKAAQgBAFgEAEIgHAGIgHADIgHABIgFAAgAASgCIgCgGIgEgGIgFgDQgDgCgEAAIgGACIgGADIgDAGIgCAGIAjAAIAAAAg");
	this.shape_10.setTransform(83.2,6.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#454545").s().p("AgIAkIgFgDIgFgFIAAAIIgKAAIAAhJIAKAAIAAAbIABAAIADgFIAFgCIAFgCIAFgBQADAAAHADQAFACAEAEQAFAFACAEIACAEIAAAHIAAAFIgCAGIgGAJIgJAGIgFACIgGABQgEAAgFgCgAgHgJIgGAFIgEAFIgBAHQAAAFACAEQABADADADIAGAEQADABADAAQAEAAADgBIAGgFIAEgGQACgDAAgEQAAgEgCgEQgBgCgDgDIgFgFIgIgBQgDAAgEABg");
	this.shape_11.setTransform(76.7,5.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#454545").s().p("AAfAcIAAgeIAAgEIgCgFQgBgDgCgCQgDgCgEAAQgFAAgDACQgDACgBADIgCAFIAAAEIAAAeIgJAAIAAgeIgBgGIgCgEQgBgDgDgCIgFgBQgPAAAAAQIAAAeIgKAAIAAg2IAKAAIAAAGQAFgHALgBIAFABIAFACIAEADIACAEQADgEADgCIAEgDIAIgBIAHABIAFACIAFAEIADADIACAHIABAHIAAAgg");
	this.shape_12.setTransform(68.3,6.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#454545").s().p("AgFAdIgFgCQgHgEgCgDIgGgJIgCgFIAAgGIACgLQABgDAFgGIAJgGIAFgCIAFAAQAEAAAHACQAFACAEAEIAGAJQACAHAAAEIAAAFIgtAAQABADACADIAEAFIAGADIAEABIAGgBIAEgCQAEgDACgEIAKAAQgBAFgEAEIgHAGIgHADIgHABIgFAAgAASgCIgCgGIgEgGIgFgDQgDgCgEAAIgGACIgGADIgDAGIgCAGIAjAAIAAAAg");
	this.shape_13.setTransform(60.2,6.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#454545").s().p("AAcAlIAAg+IgZA+IgFAAIgZg+IAAA+IgLAAIAAhJIARAAIAVA4IAWg4IARAAIAABJg");
	this.shape_14.setTransform(52.4,5.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#454545").s().p("AgXAlIAAhJIAWAAQAFAAAFACQAFABADADQAEADABAEQACAFAAAEQAAAGgCADQgBAFgEABQgDADgFACQgFACgFAAIgLAAIAAAdgAgMgBIALAAQADAAADgCQADgBACgCIACgDIABgFIgBgEIgCgEQgCgCgDgBIgGgBIgLAAg");
	this.shape_15.setTransform(42.4,5.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#454545").s().p("AgEAlIAAhJIAKAAIAABJg");
	this.shape_16.setTransform(38.2,5.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#454545").s().p("AgCAlIgehJIAMAAIAUA3IAWg3IALAAIgdBJg");
	this.shape_17.setTransform(33.5,5.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#454545").s().p("AAMAcIgMglIAAAAIgLAlIgGAAIgUg3IALAAIAMAjIAAAAIAMgjIAFAAIAMAjIAAAAIAMgjIALAAIgUA3g");
	this.shape_18.setTransform(23.3,6.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#454545").s().p("AgFAdIgFgCQgHgEgCgDIgGgJIgCgFIAAgGIACgLQABgDAFgGIAJgGIAFgCIAFAAQAEAAAHACQAFACAEAEIAGAJQACAHAAAEIAAAFIgtAAQABADACADIAEAFIAGADIAEABIAGgBIAEgCQAEgDACgEIAKAAQgBAFgEAEIgHAGIgHADIgHABIgFAAgAASgCIgCgGIgEgGIgFgDQgDgCgEAAIgGACIgGADIgDAGIgCAGIAjAAIAAAAg");
	this.shape_19.setTransform(16.2,6.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#454545").s().p("AASAlIgjg4IAAA4IgLAAIAAhJIAMAAIAjA4IAAg4IAKAAIAABJg");
	this.shape_20.setTransform(9.3,5.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt1, new cjs.Rectangle(0,0,141.4,13.3), null);


(lib.shoesjpg_ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shoes();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.shoesjpg_, new cjs.Rectangle(0,0,50,45), null);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-50,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(-50,-17,70,24), null);


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

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FABBE2").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg_leftpng_, new cjs.Rectangle(0,0,320,50), null);


// stage content:
(lib._320x50_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_61 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(61).call(this.frame_61).wait(1));

	// clicktag
	this.button_clicktag = new lib.button_clicktag();
	this.button_clicktag.parent = this;
	this.button_clicktag.setTransform(0,0,9.014,1.408);
	new cjs.ButtonHelper(this.button_clicktag, 0, 1, 2, false, new lib.button_clicktag(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_clicktag).wait(62));

	// right shoes
	this.instance = new lib.shoesjpg_();
	this.instance.parent = this;
	this.instance.setTransform(353,27.5,1,1,0,0,0,25,22.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).to({x:284,y:25.5},10,cjs.Ease.get(1)).wait(32));

	// logoend
	this.instance_1 = new lib.logo_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-20,33);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).to({x:63},11,cjs.Ease.get(1)).wait(41));

	// txt - new vip
	this.instance_2 = new lib.txt1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(168.1,-24,1,1,0,0,0,67.1,-7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30).to({_off:false},0).to({y:-1},11,cjs.Ease.get(1)).wait(21));

	// txt - 2pairs
	this.instance_3 = new lib.txt2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(151,34,1,1,0,0,0,55,16);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(39).to({_off:false},0).to({alpha:1},12,cjs.Ease.get(1)).wait(11));

	// txt - see site
	this.instance_4 = new lib.txt3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(160.8,67,1,0.996,0,0,0,63.8,16);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(49).to({_off:false},0).to({y:52},12,cjs.Ease.get(1)).wait(1));

	// bg
	this.instance_5 = new lib.bg_leftpng_();
	this.instance_5.parent = this;
	this.instance_5.setTransform(160,25,1,1,0,0,0,160,25);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({alpha:1},12,cjs.Ease.get(1)).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(160,25,320,50);
// library properties:
lib.properties = {
	width: 320,
	height: 50,
	fps: 30,
	color: "#EAEAEA",
	opacity: 1.00,
	manifest: [
		{src:"images/320x50_3_atlas_.png?1482448036341", id:"320x50_3_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;