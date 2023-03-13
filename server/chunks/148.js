"use strict";
exports.id = 148;
exports.ids = [148];
exports.modules = {

/***/ 8148:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ login)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(358);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(9816);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
;// CONCATENATED MODULE: ./src/components/AuthForm.tsx





const AuthForm = ({ setError , isRegistration =false  })=>{
    const [email, setEmail] = (0,external_react_.useState)("");
    const [password, setPassword] = (0,external_react_.useState)("");
    const handleAuth = (event)=>{
        event.preventDefault();
        if (isRegistration) {
            localStorage.setItem("userData", JSON.stringify({
                email,
                password
            }));
            router_default().push("/login?success=true");
        } else {
            const storedData = localStorage.getItem("userData");
            if (storedData) {
                const { email: storedEmail , password: storedPassword  } = JSON.parse(storedData);
                if (email === storedEmail && password === storedPassword) {
                    localStorage.setItem("isLoggedIn", "true");
                    router_default().push("/search");
                } else {
                    setError("Incorrect email or password");
                }
            } else {
                setError("No registration data found. Please register first.");
            }
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "jsx-15dc1d72fa5984f2" + " " + "d-flex justify-content-center align-items-center h-100 body",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form, {
                onSubmit: handleAuth,
                className: "border-0 p-4 rounded bg-dark",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Group, {
                        controlId: "formBasicEmail",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Label, {
                                className: "text-white",
                                children: "Email address"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Control, {
                                type: "email",
                                placeholder: "Enter email",
                                value: email,
                                onChange: (event)=>setEmail(event.target.value)
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Group, {
                        className: "mt-2",
                        controlId: "formBasicPassword",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Label, {
                                className: "text-white",
                                children: "Password"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Control, {
                                type: "password",
                                placeholder: "Password",
                                value: password,
                                onChange: (event)=>setPassword(event.target.value)
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Button, {
                        className: "mt-3 w-100",
                        variant: "primary",
                        type: "submit",
                        children: isRegistration ? "Register" : "Log In"
                    })
                ]
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "15dc1d72fa5984f2",
                children: ".body.jsx-15dc1d72fa5984f2{background:-webkit-linear-gradient(45deg,#e6f2ff,#fff);background:-moz-linear-gradient(45deg,#e6f2ff,#fff);background:-o-linear-gradient(45deg,#e6f2ff,#fff);background:linear-gradient(45deg,#e6f2ff,#fff)}"
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/RegistrationForm.tsx





const RegistrationForm = ({ setError  })=>{
    const [email, setEmail] = (0,external_react_.useState)("");
    const [password, setPassword] = (0,external_react_.useState)("");
    const [showAuthForm, setShowAuthForm] = (0,external_react_.useState)(false);
    const handleRegistration = (event)=>{
        event.preventDefault();
        localStorage.setItem("userData", JSON.stringify({
            email,
            password
        }));
        setShowAuthForm(true);
    };
    if (showAuthForm) {
        return /*#__PURE__*/ jsx_runtime_.jsx(AuthForm, {
            setError: setError,
            isRegistration: false
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "jsx-15dc1d72fa5984f2" + " " + "d-flex justify-content-center align-items-center vh-100 body",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form, {
                onSubmit: handleRegistration,
                className: "border-0 p-4 rounded bg-dark",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Group, {
                        controlId: "formBasicEmail",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Label, {
                                className: "text-white",
                                children: "Email address"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Control, {
                                type: "email",
                                placeholder: "Enter email",
                                value: email,
                                onChange: (event)=>setEmail(event.target.value)
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Group, {
                        className: "mt-2",
                        controlId: "formBasicPassword",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Label, {
                                className: "text-white",
                                children: "Password"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Form.Control, {
                                type: "password",
                                placeholder: "Password",
                                value: password,
                                onChange: (event)=>setPassword(event.target.value)
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Button, {
                        className: "mt-3 w-100",
                        variant: "primary",
                        type: "submit",
                        children: "Register"
                    })
                ]
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "15dc1d72fa5984f2",
                children: ".body.jsx-15dc1d72fa5984f2{background:-webkit-linear-gradient(45deg,#e6f2ff,#fff);background:-moz-linear-gradient(45deg,#e6f2ff,#fff);background:-o-linear-gradient(45deg,#e6f2ff,#fff);background:linear-gradient(45deg,#e6f2ff,#fff)}"
            })
        ]
    });
};

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./src/pages/login.tsx







const LoginPage = ()=>{
    const router = (0,router_.useRouter)();
    const [error, setError] = (0,external_react_.useState)("");
    const [showRegistration, setShowRegistration] = (0,external_react_.useState)(router.query.isRegistration === "true");
    const handleToggleRegistration = ()=>setShowRegistration(!showRegistration);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "Next TV"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "d-flex flex-column vh-100",
                children: [
                    error && /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Alert, {
                        variant: "danger",
                        children: error
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "text-center p-4 bg-dark text-white",
                        children: showRegistration ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                            children: [
                                "Already have an account?",
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Button, {
                                    variant: "primary",
                                    className: "link-button danger",
                                    onClick: handleToggleRegistration,
                                    children: "Log in here"
                                })
                            ]
                        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                            children: [
                                "Don't have an account yet?",
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_bootstrap_.Button, {
                                    variant: "primary",
                                    className: "link-button",
                                    onClick: handleToggleRegistration,
                                    children: "Register here"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "d-flex flex-column bg-dark",
                        style: {
                            height: "100vh",
                            overflow: "hidden"
                        },
                        children: showRegistration ? /*#__PURE__*/ jsx_runtime_.jsx(RegistrationForm, {
                            setError: setError
                        }) : /*#__PURE__*/ jsx_runtime_.jsx(AuthForm, {
                            setError: setError,
                            isRegistration: false
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const login = (LoginPage);


/***/ })

};
;