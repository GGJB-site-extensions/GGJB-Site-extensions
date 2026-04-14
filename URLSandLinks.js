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
                "id": "URLsandLinks",
                "name": "URLs and Links",
                "color1": "#968ef4",
                "blocks": [{
                    "opcode": "block_9201ef140a1ad2bf",
                    "text": "Seperate domain name from URL: [18b905a42db7396d]",
                    "blockType": "reporter",
                    "arguments": {
                        "18b905a42db7396d": {
                            "type": "string",
                            "defaultValue": "https://www.youtube.com/"
                        }
                    }
                }, {
                    "opcode": "block_89eb7644cc5206cf",
                    "text": "Length of URL [33f26535336fad28]",
                    "blockType": "reporter",
                    "arguments": {
                        "33f26535336fad28": {
                            "type": "string",
                            "defaultValue": "https://www.youtube.com/"
                        }
                    }
                }]
            }
        }
        async block_9201ef140a1ad2bf(args) {
            if ((args["18b905a42db7396d"] == ("https://www.youtube.com/"))) {
                return (("youtube.com"))
            } else if ((args["18b905a42db7396d"] == ("https://www.reddit.com/"))) {
                return (("reddit.com"))
            } else if ((args["18b905a42db7396d"] == ("https://twitter.com/"))) {
                return (("twitter.com"))
            } else if ((args["18b905a42db7396d"] == ("https://x.com/"))) {
                return (("x.com"))
            } else if ((args["18b905a42db7396d"] == ("https://.archive.org/"))) {
                return (("archive.org"))
            } else if ((args["18b905a42db7396d"] == ("https://web.archive.org/"))) {
                return (("web.archive.org"))
            } else if ((args["18b905a42db7396d"] == ("https://scratch.mit.edu/"))) {
                return (("scratch.mit.edu"))
            } else {
                return (("URL is unknown or no longer exists."))
            };
        }
        async block_89eb7644cc5206cf(args) {
            if (((args["33f26535336fad28"].startsWith(("https://"))) || (args["33f26535336fad28"].startsWith(("http://"))))) {
                return (String.prototype.concat(args["33f26535336fad28"], String(" has "), Scratch.Cast.toString((args["33f26535336fad28"].length)), String(" characters")))
            } else if ((!((args["33f26535336fad28"].includes(("https://"))) || (args["33f26535336fad28"].includes(("http://")))))) {
                return (("URL doesn't contain https:// or http:// ."))
            };
        }
    }

    let extension = new Extension();
    // code compiled from extforge

    Scratch.extensions.register(extension);
})(Scratch);