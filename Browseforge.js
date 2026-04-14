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
                "id": "Browseforge",
                "name": "BrowseForge",
                "color1": "#ca0207",
                "blocks": [{
                    "opcode": "block_cef24bca292cf8f9",
                    "text": "Alert [812ae77a5da60697]",
                    "blockType": "command",
                    "arguments": {
                        "812ae77a5da60697": {
                            "type": "string",
                            "defaultValue": "Hello world!"
                        }
                    }
                }, {
                    "opcode": "block_1e57477d5a7a815c",
                    "text": "Log in console [a0886c161ffceb09]",
                    "blockType": "command",
                    "arguments": {
                        "a0886c161ffceb09": {
                            "type": "string",
                            "defaultValue": "Hello world!"
                        }
                    }
                }, {
                    "opcode": "block_eb112617fd944246",
                    "text": "Log error in console [5445a25818c8acb5]",
                    "blockType": "command",
                    "arguments": {
                        "5445a25818c8acb5": {
                            "type": "string",
                            "defaultValue": "Somethings wrong!"
                        }
                    }
                }, {
                    "opcode": "block_5ee9306d33ffe69c",
                    "text": "Log warning in console [dd4ba24c60b6e40e]",
                    "blockType": "command",
                    "arguments": {
                        "dd4ba24c60b6e40e": {
                            "type": "string",
                            "defaultValue": "this penguin is silly "
                        }
                    }
                }]
            }
        }
        async block_cef24bca292cf8f9(args) {
            eval(String.prototype.concat(String("alert(\""), args["812ae77a5da60697"], String("\")")))
        }
        async block_1e57477d5a7a815c(args) {
            eval(String.prototype.concat(String("console.log(\""), args["a0886c161ffceb09"], String("\")")))
        }
        async block_eb112617fd944246(args) {
            eval(String.prototype.concat(String("console.error(\""), args["5445a25818c8acb5"], String("\")")))
        }
        async block_5ee9306d33ffe69c(args) {
            eval(String.prototype.concat(String("console.warn(\""), args["dd4ba24c60b6e40e"], String("\")")))
        }
    }

    let extension = new Extension();
    // code compiled from extforge
    (async () => {
        eval(("alert(\"hello! this is GGoobyJohnbrit's first extension! its for stuff with the browser. TY for using BrowseForge!\")"))
    })();

    Scratch.extensions.register(extension);
})(Scratch);