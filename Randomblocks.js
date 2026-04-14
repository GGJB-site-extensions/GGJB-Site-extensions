/*
   Random Blocks Extension
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

    class Extension { // THIS IS WHERE IT WORKS!(dont remove this, or the extension will not work)
        getInfo() {
            return {
                "id": "RandomBlocksHD",
                "name": "Random Blocks",
                "color1": "#56dbb3",
                "blocks": [
				 {
                  opcode: 'mouse',
                  text: 'Mouse Blocks',
                  blockType: Scratch.BlockType.LABEL,
                },
				{
                    "opcode": "block_ebc17b94925c7ec2",
                    "text": "Mouse X and Mouse Y",
                    "blockType": "reporter",
                    "arguments": {}
                }, 
				{
					opcode: 'KeyboardBlocks',
					text: 'Keyboard Blocks',
					blockType: Scratch.BlockType.LABEL,
				}, 
				{
                    "opcode": "block_2875a832e633f362",
                    "text": "Keys Pressed",
                    "blockType": "reporter",
                    "arguments": {}
                }, 
				{
					opcode: 'Math',
					text: 'Math (Kinda useless)',
					blockType: Scratch.BlockType.LABEL,
				},
				{
                    "opcode": "block_43d94d5450510d3e",
                    "text": "Random number",
                    "blockType": "reporter",
                    "arguments": {}
                }, 
				{
					opcode: 'projectruntime',
					text: 'Project Runtime',
					blockType: Scratch.BlockType.LABEL,
				},
				{
                    "opcode": "block_f922ab9b0e4f8cec",
                    "text": "FPS",
                    "blockType": "reporter",
                    "arguments": {}
                }, {
                    "opcode": "block_56d83543c358291d",
                    "text": "Split [f06cfde8391ff2e7] with delimiter [0b5172b88a3d1c95]",
                    "blockType": "reporter",
                    "arguments": {
                        "f06cfde8391ff2e7": {
                            "type": "string",
                            "defaultValue": "a, b, c"
                        },
                        "0b5172b88a3d1c95": {
                            "type": "string",
                            "defaultValue": ","
                        }
                    }
                }, {
                    "opcode": "block_c52230704e55b052",
                    "text": "Wait [a1f48af115101c28] seconds then [20e764972da1b02a]",
                    "blockType": "command",
                    "arguments": {
                        "a1f48af115101c28": {
                            "type": "number",
                            "defaultValue": 1
                        },
                        "20e764972da1b02a": {
                            "type": "string",
                            "defaultValue": "Start project"
                        }
                    }
                }]
            }
        }
        async block_ebc17b94925c7ec2(args) {
            return (String.prototype.concat(String("Mouse X:"), Scratch.Cast.toString(Scratch.vm.runtime.ioDevices.mouse.getScratchX()), String(" Mouse Y:"), Scratch.Cast.toString(Scratch.vm.runtime.ioDevices.mouse.getScratchY())))
        }
        async block_2875a832e633f362(args) {
            return (Scratch.vm.runtime.ioDevices.keyboard.getAllKeysPressed())
        }
        async block_43d94d5450510d3e(args) {
            return ((Math.random() > .5))
        }
        async block_f922ab9b0e4f8cec(args) {
            return (Scratch.vm.runtime.frameLoop.framerate)
        }
        async block_56d83543c358291d(args) {
            return ((args["f06cfde8391ff2e7"].split(args["0b5172b88a3d1c95"])))
        }
        async block_c52230704e55b052(args) {
            if ((args["20e764972da1b02a"] == ("Start project"))) {
                await new Promise(resolve => setTimeout(() => resolve(), args["a1f48af115101c28"] * 1000));
                Scratch.vm.greenFlag();
            } else if ((args["20e764972da1b02a"] == ("Stop project"))) {
                await new Promise(resolve => setTimeout(() => resolve(), args["a1f48af115101c28"] * 1000));
                Scratch.vm.stopAll();
            } else if ((args["20e764972da1b02a"] == ("Turn on Turbo mode"))) {
                await new Promise(resolve => setTimeout(() => resolve(), args["a1f48af115101c28"] * 1000));
                Scratch.vm.runtime.turboMode = true;
            } else if ((args["20e764972da1b02a"] == ("Turn off Turbo mode"))) {
                await new Promise(resolve => setTimeout(() => resolve(), args["a1f48af115101c28"] * 1000));
                Scratch.vm.runtime.turboMode = false;
            } else {};
        }
    }

    let extension = new Extension();
    // code compiled from extforge

    Scratch.extensions.register(extension);
})(Scratch);