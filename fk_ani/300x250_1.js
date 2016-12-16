(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"300x250_1_atlas_", frames: [[0,0,150,250],[304,205,150,33],[304,240,100,34],[304,0,142,203],[152,0,150,250]]}
];


// symbols:



(lib.bg_left = function() {
	this.spriteSheet = ss["300x250_1_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.cta = function() {
	this.spriteSheet = ss["300x250_1_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.spriteSheet = ss["300x250_1_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.offer = function() {
	this.spriteSheet = ss["300x250_1_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.shoes = function() {
	this.spriteSheet = ss["300x250_1_atlas_"];
	this.gotoAndStop(4);
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


(lib.shoesjpg_ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shoes();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.shoesjpg_, new cjs.Rectangle(0,0,150,250), null);


(lib.offerpng_ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.offer();
	this.instance.parent = this;
	this.instance.setTransform(0,48);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.offerpng_, new cjs.Rectangle(0,48,142,203), null);


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


(lib.ctapng_ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cta();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ctapng_, new cjs.Rectangle(0,0,150,33), null);


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


// stage content:
(lib._300x250_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_103 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(103).call(this.frame_103).wait(1));

	// clicktag
	this.button_clicktag = new lib.button_clicktag();
	this.button_clicktag.parent = this;
	this.button_clicktag.setTransform(0,0,8.451,7.042);
	new cjs.ButtonHelper(this.button_clicktag, 0, 1, 2, false, new lib.button_clicktag(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_clicktag).wait(104));

	// cta flicker copy 3
	this.instance = new lib.flicker();
	this.instance.parent = this;
	this.instance.setTransform(146,233.5,1,1.052,0,18.1,0,5,16.5);
	this.instance.alpha = 0.75;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(94).to({_off:false},0).to({x:310.5},8).to({_off:true},1).wait(1));

	// cta flicker copy 2
	this.instance_1 = new lib.flicker();
	this.instance_1.parent = this;
	this.instance_1.setTransform(146,233.5,1,1.052,0,18.1,0,5,16.5);
	this.instance_1.alpha = 0.75;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(91).to({_off:false},0).to({x:310.5},8).to({_off:true},1).wait(4));

	// cta flicker copy
	this.instance_2 = new lib.flicker();
	this.instance_2.parent = this;
	this.instance_2.setTransform(146,233.5,1,1.052,0,18.1,0,5,16.5);
	this.instance_2.alpha = 0.75;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(86).to({_off:false},0).to({x:310.5},8).to({_off:true},1).wait(9));

	// cta flicker
	this.instance_3 = new lib.flicker();
	this.instance_3.parent = this;
	this.instance_3.setTransform(146,233.5,1,1.052,0,18.1,0,5,16.5);
	this.instance_3.alpha = 0.75;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(80).to({_off:false},0).to({x:310.4},8).to({_off:true},1).wait(15));

	// shop now
	this.instance_4 = new lib.ctapng_();
	this.instance_4.parent = this;
	this.instance_4.setTransform(376,233.5,1,1,0,0,0,75,16.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(65).to({_off:false},0).to({x:225},14,cjs.Ease.get(1)).wait(25));

	// right shoes
	this.instance_5 = new lib.shoesjpg_();
	this.instance_5.parent = this;
	this.instance_5.setTransform(377,125,1,1,0,0,0,75,125);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(20).to({_off:false},0).to({x:225},16,cjs.Ease.get(1)).wait(68));

	// logoend
	this.instance_6 = new lib.logo_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-53,35);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(40).to({_off:false},0).to({x:73},12,cjs.Ease.get(1)).wait(52));

	// text
	this.instance_7 = new lib.offerpng_();
	this.instance_7.parent = this;
	this.instance_7.setTransform(209.5,125,1,1,0,0,0,72.5,125);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(55).to({_off:false},0).to({x:72.5},14,cjs.Ease.get(1)).wait(35));

	// left dots
	this.instance_8 = new lib.bg_leftpng_();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-73,125,1,1,0,0,0,75,125);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(20).to({_off:false},0).to({x:75},16,cjs.Ease.get(1)).wait(68));

	// logostart
	this.instance_9 = new lib.logo_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(150,125);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({alpha:1},10).to({_off:true},26).wait(68));

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
		{src:"images/300x250_1_atlas_.png?1481910881051", id:"300x250_1_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;