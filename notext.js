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
                "id": "notext",
                "name": "no text",
                "color1": "#ffffff",
                "blocks": [{
					opcode: 'nothingtext',
					text: 'There is no text on these blocks',
					blockType: Scratch.BlockType.LABEL,
				},
				{
                    "opcode": "block_5f5baac66636a230",
                    "text": "",
                    "blockType": "command",
                    "arguments": {}
                }, {
                    "opcode": "block_c848996f562e1857",
                    "text": "",
                    "blockType": "reporter",
                    "arguments": {}
                }, {
                    "opcode": "block_464789e7471be075",
                    "text": "",
                    "blockType": "Boolean",
                    "arguments": {}
                }]
            }
        }
        async block_5f5baac66636a230(args) {
            return ((" "))
        }
        async block_c848996f562e1857(args) {
            return ((" "))
        }
        async block_464789e7471be075(args) {
            return ((" "))
        }
    }

    let extension = new Extension();
    // code compiled from extforge

    Scratch.extensions.register(extension);
})(Scratch);