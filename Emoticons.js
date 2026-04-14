/*
   Emoticons extension
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
                "id": "Emoticons",
                "name": "Emoticons",
                "color1": "#bcbcbc",
                "blocks": [{
                    "opcode": "block_f778bd5dd04042b3",
                    "text": "Show Emoticon [0a36c8faeac69665]",
                    "blockType": "Boolean",
                    "arguments": {
                        "0a36c8faeac69665": {
                            "type": "string",
                            "defaultValue": "Happy face"
                        }
                    }
                }, {
                    "opcode": "block_674e8833879b4705",
                    "text": "[c99dda9ef4d5f8da] Is emoticon?",
                    "blockType": "Boolean",
                    "arguments": {
                        "c99dda9ef4d5f8da": {
                            "type": "string",
                            "defaultValue": "Laughing Face"
                        }
                    }
                }, {
                    "opcode": "block_fba09af738486df2",
                    "text": "Are Emoticons better than Emojis?",
                    "blockType": "reporter",
                    "arguments": {}
                }, {
                    "opcode": "block_4eb5423793be2a43",
                    "text": "Emoticon extension similar with CATS extension?",
                    "blockType": "Boolean",
                    "arguments": {}
                }]
            }
        }
        async block_f778bd5dd04042b3(args) {
            if ((args["0a36c8faeac69665"] == ("Happy face"))) {
                return ((":)"))
            } else if ((args["0a36c8faeac69665"] == ("Sad face"))) {
                return ((":("))
            } else if ((args["0a36c8faeac69665"] == ("Crying face"))) {
                return ((";-;"))
            } else if ((args["0a36c8faeac69665"] == ("Laughing face"))) {
                return (("XD"))
            } else {
                return (String.prototype.concat(String("Error:"), String("\""), args["0a36c8faeac69665"], String("\" Is not an Emoticon or is not reconized.")))
            };
        }
        async block_674e8833879b4705(args) {
            if ((args["c99dda9ef4d5f8da"] == ("Sad face"))) {
                return (("True"))
            } else if ((args["c99dda9ef4d5f8da"] == ("Happy face"))) {
                return (("True"))
            } else if ((args["c99dda9ef4d5f8da"] == ("Crying face"))) {
                return (("True"))
            } else if ((args["c99dda9ef4d5f8da"] == ("Laughing face"))) {
                return (("True"))
            } else {
                return (("False"))
            };
        }
        async block_fba09af738486df2(args) {
            return (("Yes"))
        }
        async block_4eb5423793be2a43(args) {
            return (("Yep"))
        }
    }

    let extension = new Extension();
    // code compiled from extforge

    Scratch.extensions.register(extension);
})(Scratch);