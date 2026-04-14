/*
   Created with ExtForge
   https://jwklong.github.io/extforge
*/
(async function(Scratch) {
    const variables = {};


    if (!Scratch.extensions.unsandboxed) {
        alert("This extension needs to be unsandboxed to run!")
        return
    }

    const ExtForge = {
        Broadcasts: new function() {
            this.raw_ = {};
            this.register = (name, blocks) => {
                this.raw_[name] = blocks;
            };
            this.execute = async (name) => {
                if (this.raw_[name]) {
                    await this.raw_[name]();
                };
            };
        },

        Variables: new function() {
            this.raw_ = {};
            this.set = (name, value) => {
                this.raw_[name] = value;
            };
            this.get = (name) => {
                return this.raw_[name] ?? null;
            }
        },

        Vector: class {
            constructor(x, y) {
                this.x = x;
                this.y = y;
            }

            static from(v) {
                if (v instanceof ExtForge.Vector) return v
                if (v instanceof Array) return new ExtForge.Vector(Number(v[0]), Number(v[1]))
                if (v instanceof Object) return new ExtForge.Vector(Number(v.x), Number(v.y))
                return new ExtForge.Vector()
            }

            add(v) {
                return new Vector(this.x + v.x, this.y + v.y);
            }

            set(x, y) {
                return new Vector(x ?? this.x, y ?? this.y)
            }
        },

        Utils: {
            setList: (list, index, value) => {
                [...list][index] = value;
                return list;
            },
            lists_foreach: {
                index: [0],
                value: [null],
                depth: 0
            },
            countString: (x, y) => {
                return y.length == 0 ? 0 : x.split(y).length - 1
            }
        }
    }

    class Extension {
        getInfo() {
            return {
                "id": "PAMextension",
                "name": "Pranks And Memes",
                "color1": "#c6b806",
                "blocks": [
				{
					opcode: 'project',
					text: 'Project stuff',
					blockType: Scratch.BlockType.LABEL,
				},
				{
                    "opcode": "block_7d6f1c935abfc2d7",
                    "text": "Prank this project's FPS",
                    "blockType": "command",
                    "arguments": {}
                }, {
                    "opcode": "block_fd857359d07268da",
                    "text": "random number",
                    "blockType": "Boolean",
                    "arguments": {}
                }, {
                    "opcode": "block_3fea69bc5c429703",
                    "text": "DO NOT RUN ON 3AMM!!!!!1111!!1!!!",
                    "blockType": "command",
                    "arguments": {}
                }]
            }
        }
        async block_7d6f1c935abfc2d7(args) {
            await new Promise(resolve => setTimeout(() => resolve(), (10) * 1000));
            ExtForge.Broadcasts.execute(("broadcast1"));
        }
        async block_fd857359d07268da(args) {
            return (Scratch.Cast.toBoolean((Scratch.Cast.toNumber((Math.random() > .5)) + (1))))
        }
        async block_3fea69bc5c429703(args) {
            eval(("alert(\"GET TROLLLEDDD!!111!!1!!!1!!!!\")"))
            await new Promise(resolve => setTimeout(() => resolve(), (1) * 1000));
            for (var temp_5bbb06fc0752f83e35edc4fe = 0; temp_5bbb06fc0752f83e35edc4fe < (10); temp_5bbb06fc0752f83e35edc4fe++) {
                Scratch.vm.stopAll();
                await new Promise(resolve => setTimeout(() => resolve(), (1) * 1000));
                Scratch.vm.greenFlag();
            };
            await new Promise(resolve => setTimeout(() => resolve(), (10) * 1000));
            ExtForge.Broadcasts.execute(("broadcast1"));
        }
    }

    let extension = new Extension();
    // code compiled from extforge
    ExtForge.Broadcasts.register(("broadcast1"), (async () => {
        Scratch.vm.runtime.frameLoop.setFramerate((10));
        await new Promise(resolve => setTimeout(() => resolve(), (7) * 1000));
        Scratch.vm.runtime.frameLoop.setFramerate((10000));
        await new Promise(resolve => setTimeout(() => resolve(), (3) * 1000));
        Scratch.vm.runtime.frameLoop.setFramerate((1));
        await new Promise(resolve => setTimeout(() => resolve(), (9) * 1000));
        Scratch.vm.runtime.frameLoop.setFramerate((30));
    })());
    (async () => {
        eval(("alert(\"Warning!: this extension can mess with your project's fps, start and stop, and more. this is made ONLY FOR FUN! do you accept that this extension will prank you?\")"))
    })();

    Scratch.extensions.register(extension);
})(Scratch);