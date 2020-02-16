(window.webpackJsonp = window.webpackJsonp || []).push([
    [0], {
        41: function(e, t, a) {
            e.exports = a(73)
        },
        46: function(e, t, a) {},
        72: function(e, t, a) {},
        73: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(0),
                o = a.n(n),
                l = a(3),
                s = a.n(l),
                r = (a(46), a(29)),
                i = a(30),
                c = a(40),
                u = a(31),
                m = a(12),
                d = a(39),
                h = a(32),
                p = a(22),
                g = a(38),
                f = (a(72), function(e) {
                    function t(e) {
                        var a;
                        return Object(r.a)(this, t), (a = Object(c.a)(this, Object(u.a)(t).call(this, e))).onOpenModal = function() {
                            a.setState({
                                modalOpen: !0
                            })
                        }, a.onCloseModal = function() {
                            a.setState({
                                modalOpen: !1
                            })
                        }, a.onOpenModalClear = function() {
                            a.setState({
                                modalClearOpen: !0
                            })
                        }, a.onCloseModalClear = function() {
                            a.setState({
                                modalClearOpen: !1
                            })
                        }, a.changeSelector = function() {
                            a.setState({
                                inputStatus: "left" === a.state.inputStatus ? "right" : "left"
                            })
                        }, a.handleInput = function(e) {
                            if (e.target.value) {
                                var t = a.state.chat;
                                t.push({
                                    type: a.state.inputStatus,
                                    text: e.target.value
                                }), a.setState({
                                    chat: t
                                }), a.refs.chat_input.value = "", g.animateScroll.scrollToBottom({
                                    containerId: "chat_messages"
                                })
                            }
                        }, a.handleClear = function() {
                            a.setState({
                                chat: []
                            })
                        }, a.state = {
                            inputStatus: "left",
                            theme: localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
                            modalOpen: !1,
                            modalClearOpen: !1,
                            chat: [{
                                type: "left",
                                text: "Hi! How are you?"
                            }, {
                                type: "right",
                                text: "Hello! Much better now that you are with me."
                            }, {
                                type: "left",
                                text: "Use left-shift to be me."
                            }, {
                                type: "right",
                                text: "No! press right-shift and be you."
                            }, {
                                type: "right",
                                text: "Also, press Esc anytime to clear all our secrets, while typing."
                            }]
                        }, a.handleInput = a.handleInput.bind(Object(m.a)(a)), a
                    }
                    return Object(d.a)(t, e), Object(i.a)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            window.addEventListener("keydown", function(t) {
                                e.refs.chat_input.value || ("Shift1" === (t.key + t.location) && e.setState({
                                    inputStatus: "left"
                                }), "Shift2" === (t.key + t.location) && e.setState({
                                    inputStatus: "right"
                                }))
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = {
                                    modal: {
                                        padding: "0 20px 20px",
                                        borderRadius: "5px"
                                    },
                                    closeButton: {
                                        cursor: "pointer"
                                    }
                                },
                                a = this.state.steps;
                            return o.a.createElement("div", {
                                className: "App " + this.state.theme
                            }, o.a.createElement(h.a, {
                                steps: a,
                                showSkipButton: !0,
                                showProgress: !0,
                                continuous: !0,
                                run: !this.state.isGuided,
                                callback: this.handleJoyrideCallback,
                                styles: {
                                    options: {}
                                }
                            }), o.a.createElement("h1", null, "Selftalker"), o.a.createElement("p", {
                                className: "desc"
                            }, "Sometimes you need to talk with Yourself"), o.a.createElement("div", {
                                className: "chat"
                            }, o.a.createElement("div", {
                                className: "chat_messages",
                                id: "chat_messages"
                            }, this.state.chat.map(function(t) {
                                return o.a.createElement("div", {
                                    className: t.type + " message",
                                    key: e.state.chat.indexOf(t)
                                }, t.text)
                            })), o.a.createElement("div", {
                                className: "chat_input"
                            }, o.a.createElement("input", {
                                autoFocus: !0,
                                className: "chat_input",
                                id: "chat_input",
                                ref: "chat_input",
                                placeholder: "Write a message...",
                                onKeyPress: function(t) {
                                    "Enter" === t.key && e.handleInput(t)
                                },
                                onKeyDown: function(t) {
                                	"Escape" === t.key && e.handleClear()
                                }
                            }), o.a.createElement("span", {
                                className: "chat_selector",
                                onClick: this.changeSelector,
                                role: "img"
                            }, "left" === this.state.inputStatus ? "\u2b05\ufe0f" : "\u27a1\ufe0f"))), o.a.createElement("div", {
                                className: "buttons"
                            }, o.a.createElement("h7", {
                                onClick: this.handleClear,
                            }, "Clear")))
                        }
                    }]), t
                }(n.Component));
            Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
            s.a.render(o.a.createElement(f, null), document.getElementById("root")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then(function(e) {
                e.unregister()
            })
        }
    },
    [
        [41, 1, 2]
    ]
]);
