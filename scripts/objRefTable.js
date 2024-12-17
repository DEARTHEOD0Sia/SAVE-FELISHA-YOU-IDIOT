const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.scrollto,
		C3.Behaviors.Platform,
		C3.Behaviors.solid,
		C3.Plugins.Particles,
		C3.Plugins.TiledBg,
		C3.Plugins.Text,
		C3.Plugins.Audio,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.System.Acts.ResetGlobals,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.Sprite.Acts.MoveForward,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Behaviors.Platform.Acts.SimulateControl,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.Sprite.Cnds.OnDestroyed,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Plugins.Audio.Acts.StopAll,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.System.Cnds.OnLayoutStart
	];
};
self.C3_JsPropNameTable = [
	{ScrollTo: 0},
	{Platform: 0},
	{BOB: 0},
	{Solid: 0},
	{Platforms: 0},
	{Spike: 0},
	{CANNON: 0},
	{Particles: 0},
	{Object: 0},
	{TiledBackground: 0},
	{CANNONBALL: 0},
	{Move: 0},
	{ENEMYYY: 0},
	{Sprite: 0},
	{notherOne: 0},
	{WOOPS: 0},
	{FELISHA: 0},
	{Sprite2: 0},
	{CAGES: 0},
	{Score_Label: 0},
	{SCORE: 0},
	{BACKROUND: 0},
	{Text: 0},
	{Score: 0}
];

self.InstanceType = {
	BOB: class extends self.ISpriteInstance {},
	Platforms: class extends self.ISpriteInstance {},
	Spike: class extends self.ISpriteInstance {},
	CANNON: class extends self.ISpriteInstance {},
	Particles: class extends self.IParticlesInstance {},
	Object: class extends self.ISpriteInstance {},
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	CANNONBALL: class extends self.ISpriteInstance {},
	ENEMYYY: class extends self.ISpriteInstance {},
	Sprite: class extends self.ISpriteInstance {},
	notherOne: class extends self.ISpriteInstance {},
	WOOPS: class extends self.ISpriteInstance {},
	FELISHA: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	CAGES: class extends self.ISpriteInstance {},
	Score_Label: class extends self.ITextInstance {},
	SCORE: class extends self.ITextInstance {},
	BACKROUND: class extends self.IInstance {},
	Text: class extends self.ITextInstance {}
}