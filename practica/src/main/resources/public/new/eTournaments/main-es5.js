function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/_servicies/adminauthguard.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/_servicies/adminauthguard.service.ts ***!
    \******************************************************/

  /*! exports provided: AdminAuthGuardService, UserAuthGuardService */

  /***/
  function srcApp_serviciesAdminauthguardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminAuthGuardService", function () {
      return AdminAuthGuardService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserAuthGuardService", function () {
      return UserAuthGuardService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AdminAuthGuardService =
    /*#__PURE__*/
    function () {
      function AdminAuthGuardService(router) {
        _classCallCheck(this, AdminAuthGuardService);

        this.router = router;
      }

      _createClass(AdminAuthGuardService, [{
        key: "canActivate",
        value: function canActivate()
        /*next:ActivatedRouteSnapshot,state:RouterStateSnapshot */
        {
          if (localStorage.getItem('role') === "ADMIN") {
            return true;
          } else {
            this.router.navigate(['/']);
            return false;
          }
        }
      }]);

      return AdminAuthGuardService;
    }();

    AdminAuthGuardService.ɵfac = function AdminAuthGuardService_Factory(t) {
      return new (t || AdminAuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    AdminAuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AdminAuthGuardService,
      factory: AdminAuthGuardService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminAuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();

    var UserAuthGuardService =
    /*#__PURE__*/
    function () {
      function UserAuthGuardService(router) {
        _classCallCheck(this, UserAuthGuardService);

        this.router = router;
      }

      _createClass(UserAuthGuardService, [{
        key: "canActivate",
        value: function canActivate()
        /*next:ActivatedRouteSnapshot,state:RouterStateSnapshot */
        {
          if (localStorage.getItem('role') === "ADMIN" || localStorage.getItem('role') === "USER") {
            return true;
          } else {
            this.router.navigate(['/login']);
            return false;
          }
        }
      }]);

      return UserAuthGuardService;
    }();

    UserAuthGuardService.ɵfac = function UserAuthGuardService_Factory(t) {
      return new (t || UserAuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    UserAuthGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UserAuthGuardService,
      factory: UserAuthGuardService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserAuthGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/_servicies/auth.interceptor.ts":
  /*!************************************************!*\
    !*** ./src/app/_servicies/auth.interceptor.ts ***!
    \************************************************/

  /*! exports provided: AuthInterceptor */

  /***/
  function srcApp_serviciesAuthInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
      return AuthInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthInterceptor =
    /*#__PURE__*/
    function () {
      function AuthInterceptor(router) {
        _classCallCheck(this, AuthInterceptor);

        this.router = router;
      }

      _createClass(AuthInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var idToken = localStorage.getItem("id_token");

          if (idToken) {
            var cloned = req.clone({
              headers: req.headers.set("Authorization", "Basic " + idToken)
            });
            return next.handle(cloned);
          } else {
            var cloned2 = req.clone({
              headers: req.headers.set("Authorization", "Basic " + idToken)
            });

            if (req.method === "POST") {
              return next.handle(req);
            } else {
              return next.handle(cloned2);
            }
          }
        }
      }]);

      return AuthInterceptor;
    }();

    AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) {
      return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthInterceptor,
      factory: AuthInterceptor.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/_servicies/match.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/_servicies/match.service.ts ***!
    \*********************************************/

  /*! exports provided: MatchService, resultBody */

  /***/
  function srcApp_serviciesMatchServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatchService", function () {
      return MatchService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "resultBody", function () {
      return resultBody;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _models_play_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../models/play.model */
    "./src/app/models/play.model.ts");
    /* harmony import */


    var _tournament_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tournament.service */
    "./src/app/_servicies/tournament.service.ts");
    /* harmony import */


    var _teams_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./teams.service */
    "./src/app/_servicies/teams.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var BASE_URL = '/api/teamsOnGame/';
    var GAME_URL = '/api/tournaments/';

    var MatchService =
    /*#__PURE__*/
    function () {
      function MatchService(tournamentservice, teamsservice, httpClient, router) {
        _classCallCheck(this, MatchService);

        this.tournamentservice = tournamentservice;
        this.teamsservice = teamsservice;
        this.httpClient = httpClient;
        this.router = router;
        this.play = new _models_play_model__WEBPACK_IMPORTED_MODULE_4__["Play"]();
      }

      _createClass(MatchService, [{
        key: "getGames",
        value: function getGames(idTournament) {
          var _this = this;

          return this.httpClient.get(GAME_URL + idTournament + '/games').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return _this.handleError(error);
          }));
        }
      }, {
        key: "updateMatch",
        value: function updateMatch(games, idPlay, id, resultArray) {
          this.putGame(games[idPlay - 1], id[0], id[1], resultArray).subscribe(function (_) {
            window.history.back();
          }, function (error) {
            return console.error('Error updating match: ' + error);
          });
        }
      }, {
        key: "putGame",
        value: function putGame(game, id1, id2, resultArray) {
          var _this2 = this;

          var body = JSON.stringify(resultArray);
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
          return this.httpClient.put(BASE_URL + id1 + "+" + id2 + "+" + game.id_game, body, {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return _this2.handleError(error);
          }));
        }
      }, {
        key: "handleError",
        value: function handleError(error) {
          console.error(error);

          if (error.status === 403 || error.status === 401 || error.status === 0) {
            this.router.navigate(["/login"]);
          }

          return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]["throw"]("Server error (" + error.status + "): " + error.text());
        }
      }]);

      return MatchService;
    }();

    MatchService.ɵfac = function MatchService_Factory(t) {
      return new (t || MatchService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_tournament_service__WEBPACK_IMPORTED_MODULE_5__["TournamentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_teams_service__WEBPACK_IMPORTED_MODULE_6__["TeamsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]));
    };

    MatchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MatchService,
      factory: MatchService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatchService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _tournament_service__WEBPACK_IMPORTED_MODULE_5__["TournamentService"]
        }, {
          type: _teams_service__WEBPACK_IMPORTED_MODULE_6__["TeamsService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }];
      }, null);
    })();

    var resultBody = function resultBody() {
      _classCallCheck(this, resultBody);
    };
    /***/

  },

  /***/
  "./src/app/_servicies/players.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/_servicies/players.service.ts ***!
    \***********************************************/

  /*! exports provided: PlayersService */

  /***/
  function srcApp_serviciesPlayersServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlayersService", function () {
      return PlayersService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var BASE_URL = '/api/player/';

    var PlayersService =
    /*#__PURE__*/
    function () {
      function PlayersService(httpClient, router) {
        _classCallCheck(this, PlayersService);

        this.httpClient = httpClient;
        this.router = router;
      }

      _createClass(PlayersService, [{
        key: "getPlayerByUserId",
        value: function getPlayerByUserId(userId) {
          var _this3 = this;

          return this.httpClient.get(BASE_URL + userId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return _this3.handleError(error);
          }));
        }
      }, {
        key: "updatePlayerTeam",
        value: function updatePlayerTeam(idPlayer, team) {
          var _this4 = this;

          return this.httpClient.put(BASE_URL + idPlayer + "/team", team).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return _this4.handleError(error);
          }));
        }
      }, {
        key: "handleError",
        value: function handleError(error) {
          console.error(error);

          if (error.status === 403 || error.status === 401 || error.status === 0) {
            this.router.navigate(["/login"]);
          }

          return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]["throw"]("Server error (" + error.status + "): " + error.text());
        }
      }]);

      return PlayersService;
    }();

    PlayersService.ɵfac = function PlayersService_Factory(t) {
      return new (t || PlayersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    PlayersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PlayersService,
      factory: PlayersService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/_servicies/profile.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/_servicies/profile.service.ts ***!
    \***********************************************/

  /*! exports provided: ProfileService */

  /***/
  function srcApp_serviciesProfileServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileService", function () {
      return ProfileService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var BASE_URL = '/api/player/';

    var ProfileService =
    /*#__PURE__*/
    function () {
      function ProfileService(httpClient, router) {
        _classCallCheck(this, ProfileService);

        this.httpClient = httpClient;
        this.router = router;
      }

      _createClass(ProfileService, [{
        key: "getPlayerByUserId",
        value: function getPlayerByUserId(userId) {
          var _this5 = this;

          return this.httpClient.get(BASE_URL + userId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
            return _this5.handleError(error);
          }));
        }
        /* updatePlayerTeam(idPlayer: number, team: Team) {
             return this.httpClient.put(BASE_URL + idPlayer + "/team", team).pipe(
                 catchError(error => this.handleError(error))
             )
         }*/

      }, {
        key: "handleError",
        value: function handleError(error) {
          console.error(error);

          if (error.status === 403 || error.status === 401 || error.status === 0) {
            this.router.navigate(["/login"]);
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])("Server error (" + error.status + "): " + error.text());
        }
      }, {
        key: "uploadProfilePicture",
        value: function uploadProfilePicture(file, idUser) {
          var _this6 = this;

          return this.httpClient.post("/api/user/" + idUser + "/image", file).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
            return _this6.handleError(error);
          }));
        }
      }, {
        key: "updateProfile",
        value: function updateProfile(wrapper) {
          var _this7 = this;

          console.log(JSON.stringify(wrapper));
          return this.httpClient.put("/api/user/" + wrapper.user.iduser, wrapper).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
            return _this7.handleError(error);
          }));
        }
      }]);

      return ProfileService;
    }();

    ProfileService.ɵfac = function ProfileService_Factory(t) {
      return new (t || ProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    ProfileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ProfileService,
      factory: ProfileService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/_servicies/rocketleague.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/_servicies/rocketleague.service.ts ***!
    \****************************************************/

  /*! exports provided: RocketleagueService */

  /***/
  function srcApp_serviciesRocketleagueServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RocketleagueService", function () {
      return RocketleagueService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var BASE_URL = '/api/tournaments';

    var RocketleagueService =
    /*#__PURE__*/
    function () {
      function RocketleagueService(httpClient, router) {
        _classCallCheck(this, RocketleagueService);

        this.httpClient = httpClient;
        this.router = router;
      }

      _createClass(RocketleagueService, [{
        key: "getTournaments",
        value: function getTournaments() {
          var _this8 = this;

          return this.httpClient.get(BASE_URL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return _this8.handleError(error);
          }));
        }
      }, {
        key: "handleError",
        value: function handleError(error) {
          console.error(error);

          if (error.status === 403 || error.status === 401 || error.status === 0) {
            this.router.navigate(["/login"]);
          }

          return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]["throw"]("Server error (" + error.status + "): " + error.text());
        }
      }]);

      return RocketleagueService;
    }();

    RocketleagueService.ɵfac = function RocketleagueService_Factory(t) {
      return new (t || RocketleagueService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    RocketleagueService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: RocketleagueService,
      factory: RocketleagueService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RocketleagueService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/_servicies/teams.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/_servicies/teams.service.ts ***!
    \*********************************************/

  /*! exports provided: TeamsService */

  /***/
  function srcApp_serviciesTeamsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeamsService", function () {
      return TeamsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var BASE_URL = '/api/teams/';
    var LEADERBOARD_URL = '/api/leaderBoardLoaded/';

    var TeamsService =
    /*#__PURE__*/
    function () {
      function TeamsService(httpClient, router) {
        _classCallCheck(this, TeamsService);

        this.httpClient = httpClient;
        this.router = router;
      }

      _createClass(TeamsService, [{
        key: "getLeaderBoard",
        value: function getLeaderBoard() {
          var _this9 = this;

          return this.httpClient.get(LEADERBOARD_URL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
            return _this9.handleError(error);
          }));
        }
      }, {
        key: "getTeams",
        value: function getTeams(page) {
          var _this10 = this;

          return this.httpClient.get(BASE_URL + "page=" + page).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
            return _this10.handleError(error);
          }));
        }
      }, {
        key: "getTeambyName",
        value: function getTeambyName(name) {
          var _this11 = this;

          return this.httpClient.get(BASE_URL + name).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
            return _this11.handleError(error);
          }));
        }
      }, {
        key: "addTeam",
        value: function addTeam(team) {
          var _this12 = this;

          return this.httpClient.post(BASE_URL, team).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
            return _this12.handleError(error);
          }));
        }
      }, {
        key: "updateTeam",
        value: function updateTeam(team) {
          var _this13 = this;

          return this.httpClient.put(BASE_URL + team.idTeam, team).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
            return _this13.handleError(error);
          }));
        }
      }, {
        key: "handleError",
        value: function handleError(error) {
          console.error(error);

          if (error.status === 403 || error.status === 401 || error.status === 0) {
            this.router.navigate(["/login"]);
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])("Server error (" + error.status + "): " + error.text);
        }
      }]);

      return TeamsService;
    }();

    TeamsService.ɵfac = function TeamsService_Factory(t) {
      return new (t || TeamsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    TeamsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TeamsService,
      factory: TeamsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/_servicies/tournament.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/_servicies/tournament.service.ts ***!
    \**************************************************/

  /*! exports provided: TournamentService */

  /***/
  function srcApp_serviciesTournamentServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TournamentService", function () {
      return TournamentService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var BASE_URL = '/api/tournaments';
    var MAP_URL = '/api/loadCoordenates';

    var TournamentService =
    /*#__PURE__*/
    function () {
      function TournamentService(httpClient, router) {
        _classCallCheck(this, TournamentService);

        this.httpClient = httpClient;
        this.router = router;
      }

      _createClass(TournamentService, [{
        key: "getPlays",
        value: function getPlays(id) {
          var _this14 = this;

          return this.httpClient.get(BASE_URL + '/' + id + '/matches').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return _this14.handleError(error);
          }));
        }
      }, {
        key: "getTournamentById",
        value: function getTournamentById(id) {
          var _this15 = this;

          return this.httpClient.get(BASE_URL + '/' + +id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return _this15.handleError(error);
          }));
        }
      }, {
        key: "addTournament",
        value: function addTournament(tournament) {
          var _this16 = this;

          var body = JSON.stringify(tournament);
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
          return this.httpClient.post(BASE_URL, body, {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return _this16.handleError(error);
          }));
        }
      }, {
        key: "joinTournament",
        value: function joinTournament(idTournament, team) {
          var _this17 = this;

          var body = JSON.stringify(team);
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json'
          });
          return this.httpClient.post(BASE_URL + '/' + idTournament + '/teams', body, {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return _this17.handleError(error);
          }));
        }
      }, {
        key: "handleError",
        value: function handleError(error) {
          if (error.status === 403 || error.status === 401 || error.status === 0) {
            this.router.navigate(["/login"]);
          }

          console.error(error);
          return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]["throw"]("Server error (" + error.status + "): " + error.text());
        }
      }]);

      return TournamentService;
    }();

    TournamentService.ɵfac = function TournamentService_Factory(t) {
      return new (t || TournamentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    TournamentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TournamentService,
      factory: TournamentService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TournamentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/_servicies/users.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/_servicies/users.service.ts ***!
    \*********************************************/

  /*! exports provided: UsersService */

  /***/
  function srcApp_serviciesUsersServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersService", function () {
      return UsersService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var BASE_URL = '/api/user/';

    var UsersService =
    /*#__PURE__*/
    function () {
      function UsersService(http, router) {
        _classCallCheck(this, UsersService);

        this.http = http;
        this.router = router;
        this.redirectToHome = "/index";
        this.logged = false; //this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        //this.currentUser = this.currentUserSubject.asObservable();
      }

      _createClass(UsersService, [{
        key: "login",
        value: function login(user, pass, oldUser) {
          var _this18 = this;

          var basic = btoa(user + ':' + pass);
          localStorage.setItem('id_token', basic);
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'X-Requested-With': 'XMLHttpRequest',
              'Authorization': 'Basic ' + basic
            })
          };
          return this.http.get('/api/logIn', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
            //user.authData = window.btoa(user + ':' + pass);
            localStorage.setItem('currentUser', JSON.stringify(user)); //localStorage.setItem('currentUser', user.authData);
            //this.currentUserSubject.next(user);

            _this18.loggedUser = user;
            _this18.logged = true;
            _this18.actualUser = user;
            _this18.actualUserName = user.username;
            _this18.actualPass = pass;
            localStorage.setItem('loggedString', "true");
            localStorage.setItem('actualUserName', _this18.actualUserName);
            localStorage.setItem('role', _this18.loggedUser.rol.rolDes);
          }));
        }
      }, {
        key: "logOut",
        value: function logOut() {
          var _this19 = this;

          return this.http.get('/api/logOut').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return _this19.handleError(error);
          }));
        }
      }, {
        key: "logOutProcedure",
        value: function logOutProcedure() {
          localStorage.setItem('id_token', '');
          this.logged = false;
          this.actualUser = null;
          this.actualUserName = null;
          this.actualPass = null;
          localStorage.setItem('loggedString', "false");
          localStorage.setItem('actualUserName', this.actualUserName);
          localStorage.setItem('role', "");
        }
      }, {
        key: "getLogged",
        value: function getLogged() {
          var loggedS = localStorage.getItem('loggedString');

          if (loggedS === "true") {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "getActualUserName",
        value: function getActualUserName() {
          var userNameString = localStorage.getItem('actualUserName');
          return userNameString;
        }
      }, {
        key: "getUserByUserName",
        value: function getUserByUserName(userName) {
          var _this20 = this;

          return this.http.get(BASE_URL + "name=" + userName).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return _this20.handleError(error);
          }));
        }
      }, {
        key: "createUser",
        value: function createUser(user) {
          var _this21 = this;

          return this.http.post(BASE_URL, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return _this21.handleError(error);
          }));
        }
      }, {
        key: "handleError",
        value: function handleError(error) {
          console.error(error);

          if (error.status === 403 || error.status === 401 || error.status === 0) {
            this.router.navigate(["/login"]);
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])("Server error (" + error.status + "): " + error.text);
        }
      }, {
        key: "logout",
        value: function logout() {
          return this.http.get('/api/logout');
        }
      }]);

      return UsersService;
    }();

    UsersService.ɵfac = function UsersService_Factory(t) {
      return new (t || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    UsersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UsersService,
      factory: UsersService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: routing */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routing", function () {
      return routing;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _rocketleague_rocketleague_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./rocketleague/rocketleague.component */
    "./src/app/rocketleague/rocketleague.component.ts");
    /* harmony import */


    var _createTournament_createtournament_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./createTournament/createtournament.component */
    "./src/app/createTournament/createtournament.component.ts");
    /* harmony import */


    var _tournament_tournament_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tournament/tournament.component */
    "./src/app/tournament/tournament.component.ts");
    /* harmony import */


    var _team_team_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./team/team.component */
    "./src/app/team/team.component.ts");
    /* harmony import */


    var _leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./leaderboard/leaderboard.component */
    "./src/app/leaderboard/leaderboard.component.ts");
    /* harmony import */


    var _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./profile/profile.component */
    "./src/app/profile/profile.component.ts");
    /* harmony import */


    var _info_info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./info/info.component */
    "./src/app/info/info.component.ts");
    /* harmony import */


    var _updateMatch_updateMatch_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./updateMatch/updateMatch.component */
    "./src/app/updateMatch/updateMatch.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");
    /* harmony import */


    var _updateProfile_updateProfile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./updateProfile/updateProfile.component */
    "./src/app/updateProfile/updateProfile.component.ts");
    /* harmony import */


    var _servicies_adminauthguard_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./_servicies/adminauthguard.service */
    "./src/app/_servicies/adminauthguard.service.ts");

    var routes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
    }, {
      path: 'tournaments',
      component: _rocketleague_rocketleague_component__WEBPACK_IMPORTED_MODULE_3__["RocketleagueComponent"],
      canActivate: [_servicies_adminauthguard_service__WEBPACK_IMPORTED_MODULE_13__["UserAuthGuardService"]]
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    }, {
      path: 'createtournament',
      component: _createTournament_createtournament_component__WEBPACK_IMPORTED_MODULE_4__["CreatetournamentComponent"],
      canActivate: [_servicies_adminauthguard_service__WEBPACK_IMPORTED_MODULE_13__["AdminAuthGuardService"]]
    }, {
      path: 'tournament/:idTournament',
      component: _tournament_tournament_component__WEBPACK_IMPORTED_MODULE_5__["TournamentComponent"],
      canActivate: [_servicies_adminauthguard_service__WEBPACK_IMPORTED_MODULE_13__["UserAuthGuardService"]]
    }, {
      path: 'createTeam',
      component: _team_team_component__WEBPACK_IMPORTED_MODULE_6__["TeamComponent"],
      canActivate: [_servicies_adminauthguard_service__WEBPACK_IMPORTED_MODULE_13__["AdminAuthGuardService"]]
    }, {
      path: 'leaderboard',
      component: _leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_7__["LeaderboardComponent"],
      canActivate: [_servicies_adminauthguard_service__WEBPACK_IMPORTED_MODULE_13__["UserAuthGuardService"]]
    }, {
      path: 'profile/:id',
      component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"]
    }, {
      path: 'info',
      component: _info_info_component__WEBPACK_IMPORTED_MODULE_9__["InfoComponent"],
      canActivate: [_servicies_adminauthguard_service__WEBPACK_IMPORTED_MODULE_13__["UserAuthGuardService"]]
    }, {
      path: 'updateMatch/:idTournament/:pos',
      component: _updateMatch_updateMatch_component__WEBPACK_IMPORTED_MODULE_10__["UpdateMatchComponent"],
      canActivate: [_servicies_adminauthguard_service__WEBPACK_IMPORTED_MODULE_13__["AdminAuthGuardService"]]
    }, {
      path: 'register',
      component: _register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"]
    }, {
      path: 'updateProfile',
      component: _updateProfile_updateProfile_component__WEBPACK_IMPORTED_MODULE_12__["UpdateProfileComponent"],
      canActivate: [_servicies_adminauthguard_service__WEBPACK_IMPORTED_MODULE_13__["UserAuthGuardService"]]
    }];

    var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes); // Aqui van las rutas de los componentes
    // Más tarde, a la hora de poner links, los links cambian el componente activo

    /*
    @NgModule({
    
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
    })
    export class AppRoutingModule { }
    */

    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./models/user.model */
    "./src/app/models/user.model.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _servicies_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./_servicies/users.service */
    "./src/app/_servicies/users.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0() {
      return ["/login"];
    };

    function AppComponent_li_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Sign in");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
      }
    }

    var _c1 = function _c1(a1) {
      return ["/profile/", a1];
    };

    function AppComponent_li_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c1, ctx_r1.userLoggedId));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.userLoggedName);
      }
    }

    var _c2 = function _c2() {
      return ["/createTeam"];
    };

    function AppComponent_li_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Create team");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c2));
      }
    }

    var _c3 = function _c3() {
      return ["/createtournament"];
    };

    function AppComponent_li_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Create tournament");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c3));
      }
    }

    var _c4 = function _c4() {
      return ["/register"];
    };

    function AppComponent_li_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Register");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c4));
      }
    }

    function AppComponent_li_22_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_li_22_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r6.logOut();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Log out");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var _c5 = function _c5() {
      return ["/"];
    };

    var _c6 = function _c6() {
      return ["/leaderboard"];
    };

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(userService) {
        _classCallCheck(this, AppComponent);

        this.userService = userService;
        this.title = 'eTournaments';
        this.userLoggued = new _models_user_model__WEBPACK_IMPORTED_MODULE_0__["User"]();
        this.imgWebIconUrl = "assets/web-icon-white.png";
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          /*
          this.userService.currentUser.subscribe(
            response => {
              let data: any = response;
              this.userLoggedName = data.username;
              this.userLoggedId = data.iduser;
            }
          );
            */
          this.userLoggedName = this.userService.getActualUserName();
          this.logged = this.userService.getLogged();

          if (this.logged) {
            this.notLogged = false;
          } else {
            this.notLogged = true;
          }

          this.adminLogged = false;

          if (this.userLoggedName != "undefined" && this.userLoggedName != "null" && this.userLoggedName != null) {
            this.setUserId(this.userLoggedName);
          }
        }
      }, {
        key: "isUserLogged",
        value: function isUserLogged() {
          return this.logged;
        }
      }, {
        key: "isAdminLogged",
        value: function isAdminLogged() {
          return this.adminLogged;
        }
      }, {
        key: "logOut",
        value: function logOut() {
          var _this22 = this;

          this.userService.logOut().subscribe(function (response) {
            _this22.userService.logOutProcedure();

            window.location.reload();
          }, function (error) {
            return console.error('Error in logOut ' + error);
          });
        }
      }, {
        key: "setUserId",
        value: function setUserId(name) {
          var _this23 = this;

          this.userService.getUserByUserName(name).subscribe(function (user) {
            var data = user;
            _this23.userLoggedId = data.iduser;
            _this23.userLoggued = data;

            if (_this23.userLoggued.rol.rolDes === "ADMIN") {
              _this23.adminLogged = true;
            } else {
              _this23.adminLogged = false;
            }
          }, function (error) {
            return console.error('Error finding user: ' + error);
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          var _this24 = this;

          return new Promise(function (resolve, reject) {
            _this24.userService.logout().subscribe(function (res) {
              // remove user from local storage to log user out
              localStorage.removeItem('currentUser');

              _this24.userService.currentUserSubject.next(null);

              _this24.userService.logged = false;
            }, function (error) {
              console.log("marcos");
            });
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_servicies_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 24,
      vars: 11,
      consts: [[1, "navbar", "navbar-expand-md", "navbar-dark", "fixed-top", "bg-dark"], ["href", "#", 1, "navbar-brand"], ["width", "30", "height", "30", "alt", "", 3, "src"], [1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarCollapse", "aria-controls", "navbarCollapse", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarCollapse", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "active"], [1, "nav-link", 3, "routerLink"], ["class", "nav-item active", 4, "ngIf"], [1, "navbar-nav", "ml-auto"], [1, "buttonNoBack", 3, "click"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "eTournaments");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, AppComponent_li_13_Template, 3, 2, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, AppComponent_li_14_Template, 3, 4, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Leaderboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, AppComponent_li_18_Template, 3, 2, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, AppComponent_li_19_Template, 3, 2, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ul", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, AppComponent_li_21_Template, 3, 2, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, AppComponent_li_22_Template, 3, 0, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "router-outlet");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.imgWebIconUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c5));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.notLogged);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.logged);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c6));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.adminLogged);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.adminLogged);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.notLogged);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.logged);
        }
      },
      directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]],
      styles: ["body[_ngcontent-%COMP%] {\r\n  padding-top: 3rem;\r\n  padding-bottom: 3rem;\r\n  color: #5a5a5a;\r\n}\r\n\r\n\r\n.carousel[_ngcontent-%COMP%] {\r\n  margin-bottom: 4rem;\r\n}\r\n\r\n.carousel-caption[_ngcontent-%COMP%] {\r\n  bottom: 3rem;\r\n  z-index: 20;\r\n}\r\n\r\n.carousel-item[_ngcontent-%COMP%] {\r\n  height: 32rem;\r\n}\r\n.carousel-item[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  min-width: 100%;\r\n  height: 52rem;\r\n}\r\n\r\n\r\n.marketing[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%] {\r\n  margin-bottom: 1.5rem;\r\n  text-align: center;\r\n}\r\n.marketing[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  font-weight: 400;\r\n}\r\n.marketing[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin-right: .75rem;\r\n  margin-left: .75rem;\r\n}\r\n\r\n.featurette-divider[_ngcontent-%COMP%] {\r\n  margin: 5rem 0; \r\n}\r\n\r\n.featurette-heading[_ngcontent-%COMP%] {\r\n  font-weight: 300;\r\n  line-height: 1;\r\n  letter-spacing: -.05rem;\r\n}\r\n\r\n@media (min-width: 40em) {\r\n  \r\n  .carousel-caption[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin-bottom: 1.25rem;\r\n    font-size: 2.25rem;\r\n    font-weight: bold; \r\n    color: #D3D3D3;\r\n    line-height: 1.4;\r\n\ttext-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;\r\n  }\r\n  \r\n  .carousel-caption[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    margin-bottom: 1.25rem;\r\n    font-size: 3.25rem;\r\n    font-weight: bold;\r\n    color: #D3D3D3;\r\n    line-height: 1.4;\r\n    text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;\r\n  }\r\n\r\n  .featurette-heading[_ngcontent-%COMP%] {\r\n    font-size: 50px;\r\n  }\r\n}\r\n@media (min-width: 62em) {\r\n  .featurette-heading[_ngcontent-%COMP%] {\r\n    margin-top: 7rem;\r\n  }\r\n}\r\n.button[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    transition-duration: 1s;\r\n    color: white;\r\n    border-width: 2px;\r\n    border-style: inset;\r\n    border-radius: 10px;\r\n    transition-duration: 0.4s;\r\n    background-color: #1E90FF;\r\n    text-align: center;\r\n    -moz-text-align-last: center;\r\n         text-align-last: center;\r\n    font-size: 20px;\r\n    font-family: \"Lucida Sans Unicode\";\r\n    font-weight: auto;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 30px;\r\n    margin-bottom: auto;\r\n}\r\n.button[_ngcontent-%COMP%]:hover {\r\n    color: black;\r\n    border-width: 2px;\r\n    border-style: inset;\r\n    border-radius: 10px;\r\n    transition-duration: 0.4s;\r\n    background-color: #87CEFA;\r\n    text-align: center;\r\n    -moz-text-align-last: center;\r\n         text-align-last: center;\r\n    font-size: 20px;\r\n    font-family: \"Lucida Sans Unicode\";\r\n    font-weight: auto;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 30px;\r\n    margin-bottom: auto;\r\n}\r\n.buttonNoBack[_ngcontent-%COMP%] {\r\n  color: white;\r\n  background-color: rgba(30, 143, 255, 0);\r\n  text-align: center;\r\n  -moz-text-align-last: center;\r\n       text-align-last: center;\r\n  font-size: 15px;\r\n  font-family: \"Lucida Sans Unicode\";\r\n  font-weight: auto;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jYXJvdXNlbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO29EQUNvRDtBQUNwRCxtREFBbUQ7QUFFbkQ7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGNBQWM7QUFDaEI7QUFHQTtvREFDb0Q7QUFFcEQsd0JBQXdCO0FBQ3hCO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0EsaUVBQWlFO0FBQ2pFO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjtBQUVBLDBEQUEwRDtBQUMxRDtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsZUFBZTtFQUNmLGFBQWE7QUFDZjtBQUdBO29EQUNvRDtBQUVwRCxzRUFBc0U7QUFDdEU7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixtQkFBbUI7QUFDckI7QUFHQTsyQkFDMkI7QUFFM0I7RUFDRSxjQUFjLEVBQUUsc0NBQXNDO0FBQ3hEO0FBRUEsb0NBQW9DO0FBQ3BDO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCx1QkFBdUI7QUFDekI7QUFHQTtvREFDb0Q7QUFFcEQ7RUFDRSxxQ0FBcUM7RUFDckM7SUFDRSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsZ0JBQWdCO0NBQ25CLGlFQUFpRTtFQUNoRTs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsaUVBQWlFO0VBQ25FOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGO0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGO0FBRUE7SUFDSSxlQUFlO0lBRWYsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQiw0QkFBdUI7U0FBdkIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixrQ0FBa0M7SUFDbEMsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLDRCQUF1QjtTQUF2Qix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGtDQUFrQztJQUNsQyxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCO0FBRUE7RUFDRSxZQUFZO0VBQ1osdUNBQXVDO0VBQ3ZDLGtCQUFrQjtFQUNsQiw0QkFBdUI7T0FBdkIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixrQ0FBa0M7RUFDbEMsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvY2Fyb3VzZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEdMT0JBTCBTVFlMRVNcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuLyogUGFkZGluZyBiZWxvdyB0aGUgZm9vdGVyIGFuZCBsaWdodGVyIGJvZHkgdGV4dCAqL1xyXG5cclxuYm9keSB7XHJcbiAgcGFkZGluZy10b3A6IDNyZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDNyZW07XHJcbiAgY29sb3I6ICM1YTVhNWE7XHJcbn1cclxuXHJcblxyXG4vKiBDVVNUT01JWkUgVEhFIENBUk9VU0VMXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4vKiBDYXJvdXNlbCBiYXNlIGNsYXNzICovXHJcbi5jYXJvdXNlbCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNHJlbTtcclxufVxyXG4vKiBTaW5jZSBwb3NpdGlvbmluZyB0aGUgaW1hZ2UsIHdlIG5lZWQgdG8gaGVscCBvdXQgdGhlIGNhcHRpb24gKi9cclxuLmNhcm91c2VsLWNhcHRpb24ge1xyXG4gIGJvdHRvbTogM3JlbTtcclxuICB6LWluZGV4OiAyMDtcclxufVxyXG5cclxuLyogRGVjbGFyZSBoZWlnaHRzIGJlY2F1c2Ugb2YgcG9zaXRpb25pbmcgb2YgaW1nIGVsZW1lbnQgKi9cclxuLmNhcm91c2VsLWl0ZW0ge1xyXG4gIGhlaWdodDogMzJyZW07XHJcbn1cclxuLmNhcm91c2VsLWl0ZW0gPiBpbWcge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1MnJlbTtcclxufVxyXG5cclxuXHJcbi8qIE1BUktFVElORyBDT05URU5UXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4vKiBDZW50ZXIgYWxpZ24gdGhlIHRleHQgd2l0aGluIHRoZSB0aHJlZSBjb2x1bW5zIGJlbG93IHRoZSBjYXJvdXNlbCAqL1xyXG4ubWFya2V0aW5nIC5jb2wtbGctNCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubWFya2V0aW5nIGgyIHtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcbi5tYXJrZXRpbmcgLmNvbC1sZy00IHAge1xyXG4gIG1hcmdpbi1yaWdodDogLjc1cmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAuNzVyZW07XHJcbn1cclxuXHJcblxyXG4vKiBGZWF0dXJldHRlc1xyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4uZmVhdHVyZXR0ZS1kaXZpZGVyIHtcclxuICBtYXJnaW46IDVyZW0gMDsgLyogU3BhY2Ugb3V0IHRoZSBCb290c3RyYXAgPGhyPiBtb3JlICovXHJcbn1cclxuXHJcbi8qIFRoaW4gb3V0IHRoZSBtYXJrZXRpbmcgaGVhZGluZ3MgKi9cclxuLmZlYXR1cmV0dGUtaGVhZGluZyB7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICBsZXR0ZXItc3BhY2luZzogLS4wNXJlbTtcclxufVxyXG5cclxuXHJcbi8qIFJFU1BPTlNJVkUgQ1NTXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNDBlbSkge1xyXG4gIC8qIEJ1bXAgdXAgc2l6ZSBvZiBjYXJvdXNlbCBjb250ZW50ICovXHJcbiAgLmNhcm91c2VsLWNhcHRpb24gcCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xyXG4gICAgZm9udC1zaXplOiAyLjI1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IFxyXG4gICAgY29sb3I6ICNEM0QzRDM7XHJcbiAgICBsaW5lLWhlaWdodDogMS40O1xyXG5cdHRleHQtc2hhZG93OiAtMnB4IDAgYmxhY2ssIDAgMnB4IGJsYWNrLCAycHggMCBibGFjaywgMCAtMnB4IGJsYWNrO1xyXG4gIH1cclxuICBcclxuICAuY2Fyb3VzZWwtY2FwdGlvbiBoMSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xyXG4gICAgZm9udC1zaXplOiAzLjI1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogI0QzRDNEMztcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgICB0ZXh0LXNoYWRvdzogLTJweCAwIGJsYWNrLCAwIDJweCBibGFjaywgMnB4IDAgYmxhY2ssIDAgLTJweCBibGFjaztcclxuICB9XHJcblxyXG4gIC5mZWF0dXJldHRlLWhlYWRpbmcge1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDYyZW0pIHtcclxuICAuZmVhdHVyZXR0ZS1oZWFkaW5nIHtcclxuICAgIG1hcmdpbi10b3A6IDdyZW07XHJcbiAgfVxyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci13aWR0aDogMnB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBpbnNldDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFFOTBGRjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ24tbGFzdDogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTHVjaWRhIFNhbnMgVW5pY29kZVwiO1xyXG4gICAgZm9udC13ZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG59XHJcblxyXG4uYnV0dG9uOmhvdmVyIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlci13aWR0aDogMnB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBpbnNldDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg3Q0VGQTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ24tbGFzdDogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTHVjaWRhIFNhbnMgVW5pY29kZVwiO1xyXG4gICAgZm9udC13ZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG59XHJcblxyXG4uYnV0dG9uTm9CYWNrIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMCwgMTQzLCAyNTUsIDApO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduLWxhc3Q6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiTHVjaWRhIFNhbnMgVW5pY29kZVwiO1xyXG4gIGZvbnQtd2VpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./home/carousel.component.css']
        }]
      }], function () {
        return [{
          type: _servicies_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _servicies_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./_servicies/users.service */
    "./src/app/_servicies/users.service.ts");
    /* harmony import */


    var _rocketleague_rocketleague_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./rocketleague/rocketleague.component */
    "./src/app/rocketleague/rocketleague.component.ts");
    /* harmony import */


    var _team_team_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./team/team.component */
    "./src/app/team/team.component.ts");
    /* harmony import */


    var _leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./leaderboard/leaderboard.component */
    "./src/app/leaderboard/leaderboard.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _createTournament_createtournament_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./createTournament/createtournament.component */
    "./src/app/createTournament/createtournament.component.ts");
    /* harmony import */


    var _tournament_tournament_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./tournament/tournament.component */
    "./src/app/tournament/tournament.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _updateMatch_updateMatch_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./updateMatch/updateMatch.component */
    "./src/app/updateMatch/updateMatch.component.ts");
    /* harmony import */


    var _servicies_auth_interceptor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./_servicies/auth.interceptor */
    "./src/app/_servicies/auth.interceptor.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");
    /* harmony import */


    var _updateProfile_updateProfile_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./updateProfile/updateProfile.component */
    "./src/app/updateProfile/updateProfile.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _profile_profile_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./profile/profile.component */
    "./src/app/profile/profile.component.ts");
    /* harmony import */


    var _servicies_adminauthguard_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./_servicies/adminauthguard.service */
    "./src/app/_servicies/adminauthguard.service.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_servicies_adminauthguard_service__WEBPACK_IMPORTED_MODULE_21__["UserAuthGuardService"], _servicies_adminauthguard_service__WEBPACK_IMPORTED_MODULE_21__["AdminAuthGuardService"], _servicies_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HTTP_INTERCEPTORS"],
        useClass: _servicies_auth_interceptor__WEBPACK_IMPORTED_MODULE_16__["AuthInterceptor"],
        multi: true
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["routing"]], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"], _rocketleague_rocketleague_component__WEBPACK_IMPORTED_MODULE_6__["RocketleagueComponent"], _createTournament_createtournament_component__WEBPACK_IMPORTED_MODULE_12__["CreatetournamentComponent"], _tournament_tournament_component__WEBPACK_IMPORTED_MODULE_13__["TournamentComponent"], _team_team_component__WEBPACK_IMPORTED_MODULE_7__["TeamComponent"], _leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_8__["LeaderboardComponent"], _updateMatch_updateMatch_component__WEBPACK_IMPORTED_MODULE_15__["UpdateMatchComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_17__["RegisterComponent"], _updateProfile_updateProfile_component__WEBPACK_IMPORTED_MODULE_18__["UpdateProfileComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_20__["ProfileComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterModule"]],
        exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"], _rocketleague_rocketleague_component__WEBPACK_IMPORTED_MODULE_6__["RocketleagueComponent"], _createTournament_createtournament_component__WEBPACK_IMPORTED_MODULE_12__["CreatetournamentComponent"], _tournament_tournament_component__WEBPACK_IMPORTED_MODULE_13__["TournamentComponent"], _team_team_component__WEBPACK_IMPORTED_MODULE_7__["TeamComponent"], _leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_8__["LeaderboardComponent"], _updateMatch_updateMatch_component__WEBPACK_IMPORTED_MODULE_15__["UpdateMatchComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_17__["RegisterComponent"], _updateProfile_updateProfile_component__WEBPACK_IMPORTED_MODULE_18__["UpdateProfileComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_20__["ProfileComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["routing"]],
          providers: [_servicies_adminauthguard_service__WEBPACK_IMPORTED_MODULE_21__["UserAuthGuardService"], _servicies_adminauthguard_service__WEBPACK_IMPORTED_MODULE_21__["AdminAuthGuardService"], _servicies_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"], {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HTTP_INTERCEPTORS"],
            useClass: _servicies_auth_interceptor__WEBPACK_IMPORTED_MODULE_16__["AuthInterceptor"],
            multi: true
          }],
          exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["RouterModule"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/createTournament/createtournament.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/createTournament/createtournament.component.ts ***!
    \****************************************************************/

  /*! exports provided: CreatetournamentComponent */

  /***/
  function srcAppCreateTournamentCreatetournamentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreatetournamentComponent", function () {
      return CreatetournamentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_tournament_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../models/tournament.model */
    "./src/app/models/tournament.model.ts");
    /* harmony import */


    var _servicies_tournament_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../_servicies/tournament.service */
    "./src/app/_servicies/tournament.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var CreatetournamentComponent =
    /*#__PURE__*/
    function () {
      function CreatetournamentComponent(tournamentService) {
        _classCallCheck(this, CreatetournamentComponent);

        this.tournamentService = tournamentService;
        this.tournament = new _models_tournament_model__WEBPACK_IMPORTED_MODULE_1__["Tournament"]();
      }

      _createClass(CreatetournamentComponent, [{
        key: "save",
        value: function save() {
          this.tournamentService.addTournament(this.tournament).subscribe(function (_) {
            window.history.back();
          }, function (error) {
            return console.error('Error creating new tournament: ' + error);
          });
        }
      }]);

      return CreatetournamentComponent;
    }();

    CreatetournamentComponent.ɵfac = function CreatetournamentComponent_Factory(t) {
      return new (t || CreatetournamentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servicies_tournament_service__WEBPACK_IMPORTED_MODULE_2__["TournamentService"]));
    };

    CreatetournamentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CreatetournamentComponent,
      selectors: [["createtournament"]],
      decls: 62,
      vars: 5,
      consts: [["href", "/core/bootstrap.min.css", "rel", "stylesheet"], ["href", "/css/TeamCreation/teamCreation_files/style.css", "rel", "stylesheet"], ["href", "/css/TeamCreation/teamCreation_files/teamCreation.css", "rel", "stylesheet"], [1, "container"], [1, "well", "form-horizontal"], ["tournamentForm", "ngForm"], [1, "form-group"], [1, "col-md-4", "control-label"], [1, "col-md-4", "inputGroupContainer"], [1, "input-group"], [1, "input-group-addon"], [1, "glyphicon", "glyphicon-user"], ["placeholder", "Your tournament name here", "name", "name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["placeholder", "Number of teams here", "name", "numTeams", 1, "form-control", 3, "ngModel", "ngModelChange"], ["placeholder", "Description here", "type", "text", "name", "description", 1, "form-control", 3, "ngModel", "ngModelChange"], ["placeholder", "Latitude here", "type", "number", "name", "latitude", 1, "form-control", 3, "ngModel", "ngModelChange"], ["placeholder", "Longitude here", "type", "number", "name", "longitude", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "button", 3, "click"]],
      template: function CreatetournamentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "link", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "link", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "link", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "fieldset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Create tournament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Tournament name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreatetournamentComponent_Template_input_ngModelChange_25_listener($event) {
            return ctx.tournament.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Number of teams");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreatetournamentComponent_Template_input_ngModelChange_33_listener($event) {
            return ctx.tournament.numTeams = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreatetournamentComponent_Template_input_ngModelChange_41_listener($event) {
            return ctx.tournament.description = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Latitude of the location");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreatetournamentComponent_Template_input_ngModelChange_49_listener($event) {
            return ctx.tournament.latitude = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Longitude of the location");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreatetournamentComponent_Template_input_ngModelChange_57_listener($event) {
            return ctx.tournament.longitude = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreatetournamentComponent_Template_button_click_60_listener() {
            return ctx.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.tournament.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.tournament.numTeams);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.tournament.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.tournament.latitude);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.tournament.longitude);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"]],
      styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  padding-top: 40px;\r\n  padding-bottom: 40px;\r\n  background-color: #f5f5f5;\r\n}\r\n\r\n.form-signin[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  max-width: 330px;\r\n  padding: 15px;\r\n  margin: auto;\r\n}\r\n\r\n.form-signin[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%] {\r\n  font-weight: 400;\r\n}\r\n\r\n.form-signin[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  box-sizing: border-box;\r\n  height: auto;\r\n  padding: 10px;\r\n  font-size: 16px;\r\n}\r\n\r\n.form-signin[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\r\n  z-index: 2;\r\n}\r\n\r\n.form-signin[_ngcontent-%COMP%]   input[type=\"email\"][_ngcontent-%COMP%] {\r\n  margin-bottom: -1px;\r\n  border-bottom-right-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n\r\n.form-signin[_ngcontent-%COMP%]   input[type=\"password\"][_ngcontent-%COMP%] {\r\n  margin-bottom: 10px;\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\r\n}\r\n\r\n.button[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  transition-duration: 1s;\r\n  color: white;\r\n  border-width: 2px;\r\n  border-style: inset;\r\n  border-radius: 10px;\r\n  transition-duration: 0.4s;\r\n  background-color: #1E90FF;\r\n  text-align: center;\r\n  -moz-text-align-last: center;\r\n       text-align-last: center;\r\n  font-size: 20px;\r\n  font-family: \"Lucida Sans Unicode\";\r\n  font-weight: auto;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-top: 30px;\r\n  margin-bottom: auto;\r\n}\r\n\r\n.button[_ngcontent-%COMP%]:hover {\r\n  color: black;\r\n  border-width: 2px;\r\n  border-style: inset;\r\n  border-radius: 10px;\r\n  transition-duration: 0.4s;\r\n  background-color: #87CEFA;\r\n  text-align: center;\r\n  -moz-text-align-last: center;\r\n       text-align-last: center;\r\n  font-size: 20px;\r\n  font-family: \"Lucida Sans Unicode\";\r\n  font-weight: auto;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-top: 30px;\r\n  margin-bottom: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlVG91cm5hbWVudC90ZWFtQ3JlYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxZQUFZO0FBQ2Q7O0FBRUE7RUFFRSxhQUFhO0VBRWIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxVQUFVO0FBQ1o7O0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLDRCQUE0QjtBQUM5Qjs7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsZUFBZTtFQUVmLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsNEJBQXVCO09BQXZCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2Ysa0NBQWtDO0VBQ2xDLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsNEJBQXVCO09BQXZCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2Ysa0NBQWtDO0VBQ2xDLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jcmVhdGVUb3VybmFtZW50L3RlYW1DcmVhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCxcclxuYm9keSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogNDBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG59XHJcblxyXG4uZm9ybS1zaWduaW4ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMzMwcHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuLmZvcm0tc2lnbmluIC5jaGVja2JveCB7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG4uZm9ybS1zaWduaW4gLmZvcm0tY29udHJvbCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5mb3JtLXNpZ25pbiAuZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcbi5mb3JtLXNpZ25pbiBpbnB1dFt0eXBlPVwiZW1haWxcIl0ge1xyXG4gIG1hcmdpbi1ib3R0b206IC0xcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxufVxyXG4uZm9ybS1zaWduaW4gaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItd2lkdGg6IDJweDtcclxuICBib3JkZXItc3R5bGU6IGluc2V0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUU5MEZGO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduLWxhc3Q6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiTHVjaWRhIFNhbnMgVW5pY29kZVwiO1xyXG4gIGZvbnQtd2VpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbn1cclxuXHJcbi5idXR0b246aG92ZXIge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBib3JkZXItd2lkdGg6IDJweDtcclxuICBib3JkZXItc3R5bGU6IGluc2V0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODdDRUZBO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduLWxhc3Q6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiTHVjaWRhIFNhbnMgVW5pY29kZVwiO1xyXG4gIGZvbnQtd2VpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbn1cclxuIl19 */", "#success_message[_ngcontent-%COMP%]{ display: none;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlVG91cm5hbWVudC9zdHlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtCQUFrQixhQUFhLENBQUMiLCJmaWxlIjoic3JjL2FwcC9jcmVhdGVUb3VybmFtZW50L3N0eWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc3VjY2Vzc19tZXNzYWdleyBkaXNwbGF5OiBub25lO30iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreatetournamentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'createtournament',
          templateUrl: './createtournament.component.html',
          styleUrls: ['./teamCreation.component.css', './style.component.css']
        }]
      }], function () {
        return [{
          type: _servicies_tournament_service__WEBPACK_IMPORTED_MODULE_2__["TournamentService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/tournaments"];
    };

    var _c1 = function _c1() {
      return ["/leaderboard"];
    };

    var _c2 = function _c2() {
      return ["/register"];
    };

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);

        this.imgCarr1Url = "assets/main1.jpg";
        this.imgCarr2Url = "assets/main2.jpg";
        this.imgCarr3Url = "assets/main3.png";
        this.imgRlIcon = "assets/rl-icon.jpg";
        this.imgLeaderboard = "assets/leaderboardLogo.png";
        this.imgUserLogo = "assets/userLogo.png";
        this.imgWebIconUrl = "assets/web-icon-white.png";
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 64,
      vars: 12,
      consts: [["lang", "en"], ["http-equiv", "Content-Type", "content", "text/html; charset=UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1, shrink-to-fit=no"], ["name", "generator", "content", "Jekyll v3.8.6"], ["role", "main"], ["id", "myCarousel", "data-ride", "carousel", "data-interval", "5000", 1, "carousel", "slide"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["alt", "...", 1, "d-block", "w-100", 3, "src"], [1, "container"], [1, "carousel-caption", "text-right"], [1, "carousel-item"], [1, "container", "marketing"], [1, "row"], [1, "col-lg-4"], ["width", "140", "height", "140", "preserveAspectRatio", "xMidYMid slice", "focusable", "false", "role", "img", 1, "", 3, "src"], ["type", "submit", "value", "View tournaments", 1, "button", 3, "routerLink"], ["type", "submit", "value", "View leaderboard", 1, "button", 3, "routerLink"], ["type", "submit", "value", "Register", 1, "button", 3, "routerLink"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "meta", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "eTorneos - Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "main", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Exciting tournaments");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Play competitively with your friends in Rocket League matches.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Win prizes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Win awesome prizes in a variety of different tournaments.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Show your skills");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "The best teams will be in our leaderboard.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Rocket League");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Rocket League");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Play with your team in incredible tournaments.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Leaderboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Leaderboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "See the very best teams that have taken part in tournaments.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Still not have an account? Make an account to start playing.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imgCarr1Url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imgCarr2Url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imgCarr3Url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imgRlIcon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imgLeaderboard, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imgUserLogo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c2));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
      styles: ["body[_ngcontent-%COMP%] {\r\n  padding-top: 3rem;\r\n  padding-bottom: 3rem;\r\n  color: #5a5a5a;\r\n}\r\n\r\n\r\n.carousel[_ngcontent-%COMP%] {\r\n  margin-bottom: 4rem;\r\n}\r\n\r\n.carousel-caption[_ngcontent-%COMP%] {\r\n  bottom: 3rem;\r\n  z-index: 20;\r\n}\r\n\r\n.carousel-item[_ngcontent-%COMP%] {\r\n  height: 32rem;\r\n}\r\n.carousel-item[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  min-width: 100%;\r\n  height: 52rem;\r\n}\r\n\r\n\r\n.marketing[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%] {\r\n  margin-bottom: 1.5rem;\r\n  text-align: center;\r\n}\r\n.marketing[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  font-weight: 400;\r\n}\r\n.marketing[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin-right: .75rem;\r\n  margin-left: .75rem;\r\n}\r\n\r\n.featurette-divider[_ngcontent-%COMP%] {\r\n  margin: 5rem 0; \r\n}\r\n\r\n.featurette-heading[_ngcontent-%COMP%] {\r\n  font-weight: 300;\r\n  line-height: 1;\r\n  letter-spacing: -.05rem;\r\n}\r\n\r\n@media (min-width: 40em) {\r\n  \r\n  .carousel-caption[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin-bottom: 1.25rem;\r\n    font-size: 2.25rem;\r\n    font-weight: bold; \r\n    color: #D3D3D3;\r\n    line-height: 1.4;\r\n\ttext-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;\r\n  }\r\n  \r\n  .carousel-caption[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    margin-bottom: 1.25rem;\r\n    font-size: 3.25rem;\r\n    font-weight: bold;\r\n    color: #D3D3D3;\r\n    line-height: 1.4;\r\n    text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;\r\n  }\r\n\r\n  .featurette-heading[_ngcontent-%COMP%] {\r\n    font-size: 50px;\r\n  }\r\n}\r\n@media (min-width: 62em) {\r\n  .featurette-heading[_ngcontent-%COMP%] {\r\n    margin-top: 7rem;\r\n  }\r\n}\r\n.button[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    transition-duration: 1s;\r\n    color: white;\r\n    border-width: 2px;\r\n    border-style: inset;\r\n    border-radius: 10px;\r\n    transition-duration: 0.4s;\r\n    background-color: #1E90FF;\r\n    text-align: center;\r\n    -moz-text-align-last: center;\r\n         text-align-last: center;\r\n    font-size: 20px;\r\n    font-family: \"Lucida Sans Unicode\";\r\n    font-weight: auto;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 30px;\r\n    margin-bottom: auto;\r\n}\r\n.button[_ngcontent-%COMP%]:hover {\r\n    color: black;\r\n    border-width: 2px;\r\n    border-style: inset;\r\n    border-radius: 10px;\r\n    transition-duration: 0.4s;\r\n    background-color: #87CEFA;\r\n    text-align: center;\r\n    -moz-text-align-last: center;\r\n         text-align-last: center;\r\n    font-size: 20px;\r\n    font-family: \"Lucida Sans Unicode\";\r\n    font-weight: auto;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 30px;\r\n    margin-bottom: auto;\r\n}\r\n.buttonNoBack[_ngcontent-%COMP%] {\r\n  color: white;\r\n  background-color: rgba(30, 143, 255, 0);\r\n  text-align: center;\r\n  -moz-text-align-last: center;\r\n       text-align-last: center;\r\n  font-size: 15px;\r\n  font-family: \"Lucida Sans Unicode\";\r\n  font-weight: auto;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jYXJvdXNlbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO29EQUNvRDtBQUNwRCxtREFBbUQ7QUFFbkQ7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGNBQWM7QUFDaEI7QUFHQTtvREFDb0Q7QUFFcEQsd0JBQXdCO0FBQ3hCO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0EsaUVBQWlFO0FBQ2pFO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjtBQUVBLDBEQUEwRDtBQUMxRDtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsZUFBZTtFQUNmLGFBQWE7QUFDZjtBQUdBO29EQUNvRDtBQUVwRCxzRUFBc0U7QUFDdEU7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixtQkFBbUI7QUFDckI7QUFHQTsyQkFDMkI7QUFFM0I7RUFDRSxjQUFjLEVBQUUsc0NBQXNDO0FBQ3hEO0FBRUEsb0NBQW9DO0FBQ3BDO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCx1QkFBdUI7QUFDekI7QUFHQTtvREFDb0Q7QUFFcEQ7RUFDRSxxQ0FBcUM7RUFDckM7SUFDRSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsZ0JBQWdCO0NBQ25CLGlFQUFpRTtFQUNoRTs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsaUVBQWlFO0VBQ25FOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGO0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGO0FBRUE7SUFDSSxlQUFlO0lBRWYsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQiw0QkFBdUI7U0FBdkIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixrQ0FBa0M7SUFDbEMsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLDRCQUF1QjtTQUF2Qix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGtDQUFrQztJQUNsQyxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCO0FBRUE7RUFDRSxZQUFZO0VBQ1osdUNBQXVDO0VBQ3ZDLGtCQUFrQjtFQUNsQiw0QkFBdUI7T0FBdkIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixrQ0FBa0M7RUFDbEMsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvY2Fyb3VzZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEdMT0JBTCBTVFlMRVNcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuLyogUGFkZGluZyBiZWxvdyB0aGUgZm9vdGVyIGFuZCBsaWdodGVyIGJvZHkgdGV4dCAqL1xyXG5cclxuYm9keSB7XHJcbiAgcGFkZGluZy10b3A6IDNyZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDNyZW07XHJcbiAgY29sb3I6ICM1YTVhNWE7XHJcbn1cclxuXHJcblxyXG4vKiBDVVNUT01JWkUgVEhFIENBUk9VU0VMXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4vKiBDYXJvdXNlbCBiYXNlIGNsYXNzICovXHJcbi5jYXJvdXNlbCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNHJlbTtcclxufVxyXG4vKiBTaW5jZSBwb3NpdGlvbmluZyB0aGUgaW1hZ2UsIHdlIG5lZWQgdG8gaGVscCBvdXQgdGhlIGNhcHRpb24gKi9cclxuLmNhcm91c2VsLWNhcHRpb24ge1xyXG4gIGJvdHRvbTogM3JlbTtcclxuICB6LWluZGV4OiAyMDtcclxufVxyXG5cclxuLyogRGVjbGFyZSBoZWlnaHRzIGJlY2F1c2Ugb2YgcG9zaXRpb25pbmcgb2YgaW1nIGVsZW1lbnQgKi9cclxuLmNhcm91c2VsLWl0ZW0ge1xyXG4gIGhlaWdodDogMzJyZW07XHJcbn1cclxuLmNhcm91c2VsLWl0ZW0gPiBpbWcge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1MnJlbTtcclxufVxyXG5cclxuXHJcbi8qIE1BUktFVElORyBDT05URU5UXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4vKiBDZW50ZXIgYWxpZ24gdGhlIHRleHQgd2l0aGluIHRoZSB0aHJlZSBjb2x1bW5zIGJlbG93IHRoZSBjYXJvdXNlbCAqL1xyXG4ubWFya2V0aW5nIC5jb2wtbGctNCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubWFya2V0aW5nIGgyIHtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcbi5tYXJrZXRpbmcgLmNvbC1sZy00IHAge1xyXG4gIG1hcmdpbi1yaWdodDogLjc1cmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAuNzVyZW07XHJcbn1cclxuXHJcblxyXG4vKiBGZWF0dXJldHRlc1xyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4uZmVhdHVyZXR0ZS1kaXZpZGVyIHtcclxuICBtYXJnaW46IDVyZW0gMDsgLyogU3BhY2Ugb3V0IHRoZSBCb290c3RyYXAgPGhyPiBtb3JlICovXHJcbn1cclxuXHJcbi8qIFRoaW4gb3V0IHRoZSBtYXJrZXRpbmcgaGVhZGluZ3MgKi9cclxuLmZlYXR1cmV0dGUtaGVhZGluZyB7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICBsZXR0ZXItc3BhY2luZzogLS4wNXJlbTtcclxufVxyXG5cclxuXHJcbi8qIFJFU1BPTlNJVkUgQ1NTXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNDBlbSkge1xyXG4gIC8qIEJ1bXAgdXAgc2l6ZSBvZiBjYXJvdXNlbCBjb250ZW50ICovXHJcbiAgLmNhcm91c2VsLWNhcHRpb24gcCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xyXG4gICAgZm9udC1zaXplOiAyLjI1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IFxyXG4gICAgY29sb3I6ICNEM0QzRDM7XHJcbiAgICBsaW5lLWhlaWdodDogMS40O1xyXG5cdHRleHQtc2hhZG93OiAtMnB4IDAgYmxhY2ssIDAgMnB4IGJsYWNrLCAycHggMCBibGFjaywgMCAtMnB4IGJsYWNrO1xyXG4gIH1cclxuICBcclxuICAuY2Fyb3VzZWwtY2FwdGlvbiBoMSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xyXG4gICAgZm9udC1zaXplOiAzLjI1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogI0QzRDNEMztcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgICB0ZXh0LXNoYWRvdzogLTJweCAwIGJsYWNrLCAwIDJweCBibGFjaywgMnB4IDAgYmxhY2ssIDAgLTJweCBibGFjaztcclxuICB9XHJcblxyXG4gIC5mZWF0dXJldHRlLWhlYWRpbmcge1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDYyZW0pIHtcclxuICAuZmVhdHVyZXR0ZS1oZWFkaW5nIHtcclxuICAgIG1hcmdpbi10b3A6IDdyZW07XHJcbiAgfVxyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci13aWR0aDogMnB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBpbnNldDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFFOTBGRjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ24tbGFzdDogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTHVjaWRhIFNhbnMgVW5pY29kZVwiO1xyXG4gICAgZm9udC13ZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG59XHJcblxyXG4uYnV0dG9uOmhvdmVyIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlci13aWR0aDogMnB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBpbnNldDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg3Q0VGQTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ24tbGFzdDogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTHVjaWRhIFNhbnMgVW5pY29kZVwiO1xyXG4gICAgZm9udC13ZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG59XHJcblxyXG4uYnV0dG9uTm9CYWNrIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMCwgMTQzLCAyNTUsIDApO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduLWxhc3Q6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiTHVjaWRhIFNhbnMgVW5pY29kZVwiO1xyXG4gIGZvbnQtd2VpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./carousel.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/info/info.component.ts":
  /*!****************************************!*\
    !*** ./src/app/info/info.component.ts ***!
    \****************************************/

  /*! exports provided: InfoComponent */

  /***/
  function srcAppInfoInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InfoComponent", function () {
      return InfoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var InfoComponent = function InfoComponent() {
      _classCallCheck(this, InfoComponent);
    };

    InfoComponent.ɵfac = function InfoComponent_Factory(t) {
      return new (t || InfoComponent)();
    };

    InfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InfoComponent,
      selectors: [["info"]],
      decls: 19,
      vars: 0,
      consts: [["lang", "en"], ["charset", "utf-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1, shrink-to-fit=no"], [1, "masthead"], [1, "container", "h-100"], [1, "row", "h-100"], [1, "col-lg-7", "my-auto"], [1, "header-content", "mx-auto"], [1, "mb-5"], [1, "col-lg-5", "my-auto"], [1, "device-container"], ["src", "https://media.giphy.com/media/IffuxZpOBjHpPiXpaM/giphy.gif", "alt", "", 1, "img-fluid"]],
      template: function InfoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Rocket League Info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "header", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h1", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Rocket League: When football and cars collide.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Rocket League is a video game that involves the combination of car racing and soccer, created by Psyonix. In the game, players are put into two different teams and pitted against each other in a futuristic arena to duke it out. Vehicles can be customized by players in numerous ways. Rocket League is the sequel to Supersonic Acrobatic Rocket-Powered Battle-Cars, which was created by the same developer.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["body[_ngcontent-%COMP%], html[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%\r\n}\r\nbody[_ngcontent-%COMP%] {\r\n    font-family: Muli, Helvetica, Arial, sans-serif\r\n}\r\na[_ngcontent-%COMP%] {\r\n    color: #fdcc52;\r\n    transition: all .35s\r\n}\r\na[_ngcontent-%COMP%]:focus, a[_ngcontent-%COMP%]:hover {\r\n    color: #fcbd20\r\n}\r\nhr[_ngcontent-%COMP%] {\r\n    max-width: 100px;\r\n    margin: 25px auto 0;\r\n    border-width: 1px;\r\n    border-color: rgba(34, 34, 34, .1)\r\n}\r\nhr.light[_ngcontent-%COMP%] {\r\n    border-color: #fff\r\n}\r\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\r\n    font-family: Catamaran, Helvetica, Arial, sans-serif;\r\n    font-weight: 200;\r\n    letter-spacing: 1px\r\n}\r\np[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    line-height: 1.5;\r\n    margin-bottom: 20px\r\n}\r\nsection[_ngcontent-%COMP%] {\r\n    padding: 100px 0\r\n}\r\nsection[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 50px\r\n}\r\nheader.masthead[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 100%;\r\n    padding-top: 150px;\r\n    padding-bottom: 100px;\r\n    color: #fff;\r\n    background: url('bgInfoRl.jpg');\r\n\r\n}\r\nheader.masthead[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\r\n    max-width: 500px;\r\n    margin-bottom: 100px;\r\n    text-align: center\r\n}\r\nheader.masthead[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-size: 30px\r\n}\r\nheader.masthead[_ngcontent-%COMP%]   .device-container[_ngcontent-%COMP%] {\r\n    max-width: 325px;\r\n    margin-right: auto;\r\n    margin-left: auto\r\n}\r\nheader.masthead[_ngcontent-%COMP%]   .device-container[_ngcontent-%COMP%]   .screen[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    border-radius: 3px\r\n}\r\n@media (min-width:992px) {\r\n    header.masthead[_ngcontent-%COMP%] {\r\n        height: 100vh;\r\n        min-height: 775px;\r\n        padding-top: 0;\r\n        padding-bottom: 0\r\n    }\r\n\r\n    header.masthead[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\r\n        margin-bottom: 0;\r\n        text-align: left\r\n    }\r\n\r\n    header.masthead[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n        font-size: 50px\r\n    }\r\n\r\n    header.masthead[_ngcontent-%COMP%]   .device-container[_ngcontent-%COMP%] {\r\n        max-width: 325px\r\n    }\r\n}\r\nsection.download[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    padding: 150px 0\r\n}\r\nsection.download[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 50px;\r\n    margin-top: 0\r\n}\r\nsection.download[_ngcontent-%COMP%]   .badges[_ngcontent-%COMP%]   .badge-link[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin-bottom: 25px\r\n}\r\nsection.download[_ngcontent-%COMP%]   .badges[_ngcontent-%COMP%]   .badge-link[_ngcontent-%COMP%]:last-child {\r\n    margin-bottom: 0\r\n}\r\nsection.download[_ngcontent-%COMP%]   .badges[_ngcontent-%COMP%]   .badge-link[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    height: 60px\r\n}\r\n@media (min-width:768px) {\r\n    section.download[_ngcontent-%COMP%]   .badges[_ngcontent-%COMP%]   .badge-link[_ngcontent-%COMP%] {\r\n        display: inline-block;\r\n        margin-bottom: 0\r\n    }\r\n}\r\n@media (min-width:768px) {\r\n    section.download[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n        font-size: 70px\r\n    }\r\n}\r\nsection.features[_ngcontent-%COMP%]   .section-heading[_ngcontent-%COMP%] {\r\n    margin-bottom: 100px\r\n}\r\nsection.features[_ngcontent-%COMP%]   .section-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    margin-top: 0\r\n}\r\nsection.features[_ngcontent-%COMP%]   .section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin-bottom: 0\r\n}\r\nsection.features[_ngcontent-%COMP%]   .device-container[_ngcontent-%COMP%], section.features[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%] {\r\n    max-width: 325px;\r\n    margin: 0 auto\r\n}\r\nsection.features[_ngcontent-%COMP%]   .device-container[_ngcontent-%COMP%] {\r\n    margin-bottom: 100px\r\n}\r\n@media (min-width:992px) {\r\n    section.features[_ngcontent-%COMP%]   .device-container[_ngcontent-%COMP%] {\r\n        margin-bottom: 0\r\n    }\r\n}\r\nsection.features[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%] {\r\n    padding-top: 50px;\r\n    padding-bottom: 50px;\r\n    text-align: center\r\n}\r\nsection.features[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    font-size: 30px\r\n}\r\nsection.features[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 80px;\r\n    display: block;\r\n    margin-bottom: 15px;\r\n    background: linear-gradient(to left, #7b4397, #dc2430);\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent\r\n}\r\nsection.cta[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    padding: 250px 0;\r\n    \r\n    background-position: center;\r\n    background-size: cover\r\n}\r\nsection.cta[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    z-index: 1\r\n}\r\nsection.cta[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 50px;\r\n    max-width: 450px;\r\n    margin-top: 0;\r\n    margin-bottom: 25px;\r\n    color: #fff\r\n}\r\n@media (min-width:768px) {\r\n    section.cta[_ngcontent-%COMP%]   .cta-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n        font-size: 80px\r\n    }\r\n}\r\nsection.cta[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0, 0, 0, .5)\r\n}\r\nsection.contact[_ngcontent-%COMP%] {\r\n    text-align: center\r\n}\r\nsection.contact[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    margin-top: 0;\r\n    margin-bottom: 25px\r\n}\r\nsection.contact[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    color: #dd4b39\r\n}\r\nsection.contact[_ngcontent-%COMP%]   ul.list-social[_ngcontent-%COMP%] {\r\n    margin-bottom: 0\r\n}\r\nsection.contact[_ngcontent-%COMP%]   ul.list-social[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    font-size: 40px;\r\n    line-height: 80px;\r\n    display: block;\r\n    width: 80px;\r\n    height: 80px;\r\n    color: #fff;\r\n    border-radius: 100%\r\n}\r\nsection.contact[_ngcontent-%COMP%]   ul.list-social[_ngcontent-%COMP%]   li.social-twitter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    background-color: #1da1f2\r\n}\r\nsection.contact[_ngcontent-%COMP%]   ul.list-social[_ngcontent-%COMP%]   li.social-twitter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    background-color: #0d95e8\r\n}\r\nsection.contact[_ngcontent-%COMP%]   ul.list-social[_ngcontent-%COMP%]   li.social-facebook[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    background-color: #3b5998\r\n}\r\nsection.contact[_ngcontent-%COMP%]   ul.list-social[_ngcontent-%COMP%]   li.social-facebook[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    background-color: #344e86\r\n}\r\nsection.contact[_ngcontent-%COMP%]   ul.list-social[_ngcontent-%COMP%]   li.social-google-plus[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    background-color: #dd4b39\r\n}\r\nsection.contact[_ngcontent-%COMP%]   ul.list-social[_ngcontent-%COMP%]   li.social-google-plus[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    background-color: #d73925\r\n}\r\nfooter[_ngcontent-%COMP%] {\r\n    padding: 25px 0;\r\n    text-align: center;\r\n    color: rgba(255, 255, 255, .3);\r\n    background-color: #222\r\n}\r\nfooter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    margin: 0\r\n}\r\nfooter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    margin-bottom: 0\r\n}\r\nfooter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    color: rgba(255, 255, 255, .3)\r\n}\r\nfooter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active, footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus, footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    text-decoration: none\r\n}\r\n.bg-primary[_ngcontent-%COMP%] {\r\n    background: #fdcc52;\r\n    background: linear-gradient(#fdcc52, #fdc539)\r\n}\r\n.text-primary[_ngcontent-%COMP%] {\r\n    color: #fdcc52\r\n}\r\n.no-gutter[_ngcontent-%COMP%]    > [class*=col-][_ngcontent-%COMP%] {\r\n    padding-right: 0;\r\n    padding-left: 0\r\n}\r\n.btn-outline[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    border: 1px solid;\r\n    border-color: #fff\r\n}\r\n.btn-outline.active[_ngcontent-%COMP%], .btn-outline[_ngcontent-%COMP%]:active, .btn-outline[_ngcontent-%COMP%]:focus, .btn-outline[_ngcontent-%COMP%]:hover {\r\n    color: #fff;\r\n    border-color: #fdcc52;\r\n    background-color: #fdcc52\r\n}\r\n.btn[_ngcontent-%COMP%] {\r\n    border-radius: 300px;\r\n    font-family: Lato, Helvetica, Arial, sans-serif;\r\n    letter-spacing: 2px;\r\n    text-transform: uppercase\r\n}\r\n.btn-xl[_ngcontent-%COMP%] {\r\n    font-size: 11px;\r\n    padding: 15px 45px\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5mby9uZXctYWdlLmNvbXBvbmVudC5taW4uY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0VBSUU7QUFDRjs7SUFFSSxXQUFXO0lBQ1g7QUFDSjtBQUVBO0lBQ0k7QUFDSjtBQUVBO0lBQ0ksY0FBYztJQUNkO0FBQ0o7QUFFQTs7SUFFSTtBQUNKO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQjtBQUNKO0FBRUE7SUFDSTtBQUNKO0FBRUE7Ozs7OztJQU1JLG9EQUFvRDtJQUNwRCxnQkFBZ0I7SUFDaEI7QUFDSjtBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQjtBQUNKO0FBRUE7SUFDSTtBQUNKO0FBRUE7SUFDSTtBQUNKO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsV0FBVztJQUNYLCtCQUEwQzs7QUFFOUM7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEI7QUFDSjtBQUVBO0lBQ0k7QUFDSjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQjtBQUNKO0FBRUE7SUFDSTtBQUNKO0FBRUE7SUFDSTtRQUNJLGFBQWE7UUFDYixpQkFBaUI7UUFDakIsY0FBYztRQUNkO0lBQ0o7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEI7SUFDSjs7SUFFQTtRQUNJO0lBQ0o7O0lBRUE7UUFDSTtJQUNKO0FBQ0o7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQjtBQUNKO0FBRUE7SUFDSSxlQUFlO0lBQ2Y7QUFDSjtBQUVBO0lBQ0ksY0FBYztJQUNkO0FBQ0o7QUFFQTtJQUNJO0FBQ0o7QUFFQTtJQUNJO0FBQ0o7QUFFQTtJQUNJO1FBQ0kscUJBQXFCO1FBQ3JCO0lBQ0o7QUFDSjtBQUVBO0lBQ0k7UUFDSTtJQUNKO0FBQ0o7QUFFQTtJQUNJO0FBQ0o7QUFFQTtJQUNJO0FBQ0o7QUFFQTtJQUNJO0FBQ0o7QUFFQTs7SUFFSSxnQkFBZ0I7SUFDaEI7QUFDSjtBQUVBO0lBQ0k7QUFDSjtBQUVBO0lBQ0k7UUFDSTtJQUNKO0FBQ0o7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEI7QUFDSjtBQUVBO0lBQ0k7QUFDSjtBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsc0RBQXNEO0lBQ3RELDZCQUE2QjtJQUM3QjtBQUNKO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLDRDQUE0QztJQUM1QywyQkFBMkI7SUFDM0I7QUFDSjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCO0FBQ0o7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQjtBQUNKO0FBRUE7SUFDSTtRQUNJO0lBQ0o7QUFDSjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWjtBQUNKO0FBRUE7SUFDSTtBQUNKO0FBRUE7SUFDSSxhQUFhO0lBQ2I7QUFDSjtBQUVBO0lBQ0k7QUFDSjtBQUVBO0lBQ0k7QUFDSjtBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1g7QUFDSjtBQUVBO0lBQ0k7QUFDSjtBQUVBO0lBQ0k7QUFDSjtBQUVBO0lBQ0k7QUFDSjtBQUVBO0lBQ0k7QUFDSjtBQUVBO0lBQ0k7QUFDSjtBQUVBO0lBQ0k7QUFDSjtBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQiw4QkFBOEI7SUFDOUI7QUFDSjtBQUVBO0lBQ0ksZUFBZTtJQUNmO0FBQ0o7QUFFQTtJQUNJO0FBQ0o7QUFFQTtJQUNJLGVBQWU7SUFDZjtBQUNKO0FBRUE7Ozs7SUFJSTtBQUNKO0FBRUE7SUFDSSxtQkFBbUI7SUFDbkI7QUFDSjtBQUVBO0lBQ0k7QUFDSjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCO0FBQ0o7QUFFQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakI7QUFDSjtBQUVBOzs7O0lBSUksV0FBVztJQUNYLHFCQUFxQjtJQUNyQjtBQUNKO0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsK0NBQStDO0lBQy9DLG1CQUFtQjtJQUNuQjtBQUNKO0FBRUE7SUFDSSxlQUFlO0lBQ2Y7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2luZm8vbmV3LWFnZS5jb21wb25lbnQubWluLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxyXG4gKiBTdGFydCBCb290c3RyYXAgLSBOZXcgQWdlIHY1LjAuNyAoaHR0cHM6Ly9zdGFydGJvb3RzdHJhcC5jb20vdGVtcGxhdGUtb3ZlcnZpZXdzL25ldy1hZ2UpXHJcbiAqIENvcHlyaWdodCAyMDEzLTIwMTkgU3RhcnQgQm9vdHN0cmFwXHJcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL0JsYWNrcm9ja0RpZ2l0YWwvc3RhcnRib290c3RyYXAtbmV3LWFnZS9ibG9iL21hc3Rlci9MSUNFTlNFKVxyXG4gKi9cclxuYm9keSxcclxuaHRtbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJVxyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiBNdWxpLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmXHJcbn1cclxuXHJcbmEge1xyXG4gICAgY29sb3I6ICNmZGNjNTI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjM1c1xyXG59XHJcblxyXG5hOmZvY3VzLFxyXG5hOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZmNiZDIwXHJcbn1cclxuXHJcbmhyIHtcclxuICAgIG1heC13aWR0aDogMTAwcHg7XHJcbiAgICBtYXJnaW46IDI1cHggYXV0byAwO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMzQsIDM0LCAzNCwgLjEpXHJcbn1cclxuXHJcbmhyLmxpZ2h0IHtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmZlxyXG59XHJcblxyXG5oMSxcclxuaDIsXHJcbmgzLFxyXG5oNCxcclxuaDUsXHJcbmg2IHtcclxuICAgIGZvbnQtZmFtaWx5OiBDYXRhbWFyYW4sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweFxyXG59XHJcblxyXG5wIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4XHJcbn1cclxuXHJcbnNlY3Rpb24ge1xyXG4gICAgcGFkZGluZzogMTAwcHggMFxyXG59XHJcblxyXG5zZWN0aW9uIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogNTBweFxyXG59XHJcblxyXG5oZWFkZXIubWFzdGhlYWQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLXRvcDogMTUwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvYmdJbmZvUmwuanBnKTtcclxuXHJcbn1cclxuXHJcbmhlYWRlci5tYXN0aGVhZCAuaGVhZGVyLWNvbnRlbnQge1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyXHJcbn1cclxuXHJcbmhlYWRlci5tYXN0aGVhZCAuaGVhZGVyLWNvbnRlbnQgaDEge1xyXG4gICAgZm9udC1zaXplOiAzMHB4XHJcbn1cclxuXHJcbmhlYWRlci5tYXN0aGVhZCAuZGV2aWNlLWNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDMyNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG9cclxufVxyXG5cclxuaGVhZGVyLm1hc3RoZWFkIC5kZXZpY2UtY29udGFpbmVyIC5zY3JlZW4gaW1nIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweFxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDo5OTJweCkge1xyXG4gICAgaGVhZGVyLm1hc3RoZWFkIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDc3NXB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwXHJcbiAgICB9XHJcblxyXG4gICAgaGVhZGVyLm1hc3RoZWFkIC5oZWFkZXItY29udGVudCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0XHJcbiAgICB9XHJcblxyXG4gICAgaGVhZGVyLm1hc3RoZWFkIC5oZWFkZXItY29udGVudCBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiA1MHB4XHJcbiAgICB9XHJcblxyXG4gICAgaGVhZGVyLm1hc3RoZWFkIC5kZXZpY2UtY29udGFpbmVyIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDMyNXB4XHJcbiAgICB9XHJcbn1cclxuXHJcbnNlY3Rpb24uZG93bmxvYWQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMTUwcHggMFxyXG59XHJcblxyXG5zZWN0aW9uLmRvd25sb2FkIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIG1hcmdpbi10b3A6IDBcclxufVxyXG5cclxuc2VjdGlvbi5kb3dubG9hZCAuYmFkZ2VzIC5iYWRnZS1saW5rIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweFxyXG59XHJcblxyXG5zZWN0aW9uLmRvd25sb2FkIC5iYWRnZXMgLmJhZGdlLWxpbms6bGFzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwXHJcbn1cclxuXHJcbnNlY3Rpb24uZG93bmxvYWQgLmJhZGdlcyAuYmFkZ2UtbGluayBpbWcge1xyXG4gICAgaGVpZ2h0OiA2MHB4XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOjc2OHB4KSB7XHJcbiAgICBzZWN0aW9uLmRvd25sb2FkIC5iYWRnZXMgLmJhZGdlLWxpbmsge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwXHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOjc2OHB4KSB7XHJcbiAgICBzZWN0aW9uLmRvd25sb2FkIGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDcwcHhcclxuICAgIH1cclxufVxyXG5cclxuc2VjdGlvbi5mZWF0dXJlcyAuc2VjdGlvbi1oZWFkaW5nIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4XHJcbn1cclxuXHJcbnNlY3Rpb24uZmVhdHVyZXMgLnNlY3Rpb24taGVhZGluZyBoMiB7XHJcbiAgICBtYXJnaW4tdG9wOiAwXHJcbn1cclxuXHJcbnNlY3Rpb24uZmVhdHVyZXMgLnNlY3Rpb24taGVhZGluZyBwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDBcclxufVxyXG5cclxuc2VjdGlvbi5mZWF0dXJlcyAuZGV2aWNlLWNvbnRhaW5lcixcclxuc2VjdGlvbi5mZWF0dXJlcyAuZmVhdHVyZS1pdGVtIHtcclxuICAgIG1heC13aWR0aDogMzI1cHg7XHJcbiAgICBtYXJnaW46IDAgYXV0b1xyXG59XHJcblxyXG5zZWN0aW9uLmZlYXR1cmVzIC5kZXZpY2UtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOjk5MnB4KSB7XHJcbiAgICBzZWN0aW9uLmZlYXR1cmVzIC5kZXZpY2UtY29udGFpbmVyIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwXHJcbiAgICB9XHJcbn1cclxuXHJcbnNlY3Rpb24uZmVhdHVyZXMgLmZlYXR1cmUtaXRlbSB7XHJcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyXHJcbn1cclxuXHJcbnNlY3Rpb24uZmVhdHVyZXMgLmZlYXR1cmUtaXRlbSBoMyB7XHJcbiAgICBmb250LXNpemU6IDMwcHhcclxufVxyXG5cclxuc2VjdGlvbi5mZWF0dXJlcyAuZmVhdHVyZS1pdGVtIGkge1xyXG4gICAgZm9udC1zaXplOiA4MHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICM3YjQzOTcsICNkYzI0MzApO1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnRcclxufVxyXG5cclxuc2VjdGlvbi5jdGEge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMjUwcHggMDtcclxuICAgIC8qYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltZy9iZy1jdGEuanBnKTsqL1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlclxyXG59XHJcblxyXG5zZWN0aW9uLmN0YSAuY3RhLWNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMVxyXG59XHJcblxyXG5zZWN0aW9uLmN0YSAuY3RhLWNvbnRlbnQgaDIge1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiA0NTBweDtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgY29sb3I6ICNmZmZcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6NzY4cHgpIHtcclxuICAgIHNlY3Rpb24uY3RhIC5jdGEtY29udGVudCBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiA4MHB4XHJcbiAgICB9XHJcbn1cclxuXHJcbnNlY3Rpb24uY3RhIC5vdmVybGF5IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjUpXHJcbn1cclxuXHJcbnNlY3Rpb24uY29udGFjdCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxufVxyXG5cclxuc2VjdGlvbi5jb250YWN0IGgyIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4XHJcbn1cclxuXHJcbnNlY3Rpb24uY29udGFjdCBoMiBpIHtcclxuICAgIGNvbG9yOiAjZGQ0YjM5XHJcbn1cclxuXHJcbnNlY3Rpb24uY29udGFjdCB1bC5saXN0LXNvY2lhbCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwXHJcbn1cclxuXHJcbnNlY3Rpb24uY29udGFjdCB1bC5saXN0LXNvY2lhbCBsaSBhIHtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA4MHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJVxyXG59XHJcblxyXG5zZWN0aW9uLmNvbnRhY3QgdWwubGlzdC1zb2NpYWwgbGkuc29jaWFsLXR3aXR0ZXIgYSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWRhMWYyXHJcbn1cclxuXHJcbnNlY3Rpb24uY29udGFjdCB1bC5saXN0LXNvY2lhbCBsaS5zb2NpYWwtdHdpdHRlciBhOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZDk1ZThcclxufVxyXG5cclxuc2VjdGlvbi5jb250YWN0IHVsLmxpc3Qtc29jaWFsIGxpLnNvY2lhbC1mYWNlYm9vayBhIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjU5OThcclxufVxyXG5cclxuc2VjdGlvbi5jb250YWN0IHVsLmxpc3Qtc29jaWFsIGxpLnNvY2lhbC1mYWNlYm9vayBhOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDRlODZcclxufVxyXG5cclxuc2VjdGlvbi5jb250YWN0IHVsLmxpc3Qtc29jaWFsIGxpLnNvY2lhbC1nb29nbGUtcGx1cyBhIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZDRiMzlcclxufVxyXG5cclxuc2VjdGlvbi5jb250YWN0IHVsLmxpc3Qtc29jaWFsIGxpLnNvY2lhbC1nb29nbGUtcGx1cyBhOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNzM5MjVcclxufVxyXG5cclxuZm9vdGVyIHtcclxuICAgIHBhZGRpbmc6IDI1cHggMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4zKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjJcclxufVxyXG5cclxuZm9vdGVyIHAge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWFyZ2luOiAwXHJcbn1cclxuXHJcbmZvb3RlciB1bCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwXHJcbn1cclxuXHJcbmZvb3RlciB1bCBsaSBhIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4zKVxyXG59XHJcblxyXG5mb290ZXIgdWwgbGkgYS5hY3RpdmUsXHJcbmZvb3RlciB1bCBsaSBhOmFjdGl2ZSxcclxuZm9vdGVyIHVsIGxpIGE6Zm9jdXMsXHJcbmZvb3RlciB1bCBsaSBhOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZVxyXG59XHJcblxyXG4uYmctcHJpbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmRjYzUyO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNmZGNjNTIsICNmZGM1MzkpXHJcbn1cclxuXHJcbi50ZXh0LXByaW1hcnkge1xyXG4gICAgY29sb3I6ICNmZGNjNTJcclxufVxyXG5cclxuLm5vLWd1dHRlciA+IFtjbGFzcyo9Y29sLV0ge1xyXG4gICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgIHBhZGRpbmctbGVmdDogMFxyXG59XHJcblxyXG4uYnRuLW91dGxpbmUge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmZlxyXG59XHJcblxyXG4uYnRuLW91dGxpbmUuYWN0aXZlLFxyXG4uYnRuLW91dGxpbmU6YWN0aXZlLFxyXG4uYnRuLW91dGxpbmU6Zm9jdXMsXHJcbi5idG4tb3V0bGluZTpob3ZlciB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZkY2M1MjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGNjNTJcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMDBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2VcclxufVxyXG5cclxuLmJ0bi14bCB7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDQ1cHhcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'info',
          templateUrl: './info.component.html',
          styleUrls: ['./new-age.component.min.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/leaderboard/leaderboard.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/leaderboard/leaderboard.component.ts ***!
    \******************************************************/

  /*! exports provided: LeaderboardComponent */

  /***/
  function srcAppLeaderboardLeaderboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LeaderboardComponent", function () {
      return LeaderboardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _servicies_teams_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../_servicies/teams.service */
    "./src/app/_servicies/teams.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function LeaderboardComponent_tr_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var elem_r20 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](elem_r20.pos);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](elem_r20.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](elem_r20.elo);
      }
    }

    function LeaderboardComponent_button_22_Template(rf, ctx) {
      if (rf & 1) {
        var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeaderboardComponent_button_22_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r21.showMore();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Load more");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function delay(ms) {
      return new Promise(function (resolve) {
        return setTimeout(resolve, ms);
      });
    }

    var LeaderboardComponent =
    /*#__PURE__*/
    function () {
      function LeaderboardComponent(teamsService) {
        _classCallCheck(this, LeaderboardComponent);

        this.teamsService = teamsService;
        this.teamsList = new Array();
        this.pageCounter = 0;
        this.pos = 1;
        this.allShown = false;
        this.showMore();
      }

      _createClass(LeaderboardComponent, [{
        key: "showMore",
        value: function showMore() {
          var _this25 = this;

          loaderLeaderboard.loadSpinner();
          this.teamsService.getTeams(this.pageCounter).subscribe(function (response) {
            response.forEach(function (element) {
              if (element.elo != 0) {
                element.pos = _this25.pos++;

                _this25.teamsList.push(element);
              }
            });
            /*this.teamsList = response;
            this.teamsList.forEach(element => {
                if(element.elo!=0){
                    loaderLeaderboard.fn(this.pos++,element);
                }
            });*/

            _this25.pageCounter++;
          }, function (error) {
            _this25.allShown = true;
            console.error('Error getting teams: ' + error);
          });
          loaderLeaderboard.unloadSpinner();
        }
      }]);

      return LeaderboardComponent;
    }();

    LeaderboardComponent.ɵfac = function LeaderboardComponent_Factory(t) {
      return new (t || LeaderboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servicies_teams_service__WEBPACK_IMPORTED_MODULE_1__["TeamsService"]));
    };

    LeaderboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LeaderboardComponent,
      selectors: [["leaderboard"]],
      decls: 23,
      vars: 2,
      consts: [[1, "hm-gradient"], [1, "card", "mb-4"], [1, "card-body"], [1, "row"], [1, "col-md-12"], [1, "pt-5", "pb-4", "text-center", "font-bold", "font-up"], [1, "table", "table-striped"], ["id", "table"], [4, "ngFor", "ngForOf"], ["id", "loader", 1, "d-flex", "justify-content-center"], [1, "d-flex", "justify-content-center"], ["class", "button", 3, "click", 4, "ngIf"], ["scope", "row"], [1, "button", 3, "click"]],
      template: function LeaderboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "body", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Leaderboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Elo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tbody", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, LeaderboardComponent_tr_19_Template, 7, 3, "tr", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, LeaderboardComponent_button_22_Template, 2, 0, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.teamsList);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.allShown == false);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      styles: [".button[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    transition-duration: 1s;\r\n    color: white;\r\n    border-width: 2px;\r\n    border-style: inset;\r\n    border-radius: 10px;\r\n    transition-duration: 0.4s;\r\n    background-color: #1E90FF;\r\n    text-align: center;\r\n    -moz-text-align-last: center;\r\n         text-align-last: center;\r\n    font-size: 20px;\r\n    font-family: \"Lucida Sans Unicode\";\r\n    font-weight: auto;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 30px;\r\n    margin-bottom: auto;\r\n}\r\n\r\n.button[_ngcontent-%COMP%]:hover {\r\n    color: black;\r\n    border-width: 2px;\r\n    border-style: inset;\r\n    border-radius: 10px;\r\n    transition-duration: 0.4s;\r\n    background-color: #87CEFA;\r\n    text-align: center;\r\n    -moz-text-align-last: center;\r\n         text-align-last: center;\r\n    font-size: 20px;\r\n    font-family: \"Lucida Sans Unicode\";\r\n    font-weight: auto;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 30px;\r\n    margin-bottom: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGVhZGVyYm9hcmQvc3R5bGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFFZix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLDRCQUF1QjtTQUF2Qix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGtDQUFrQztJQUNsQyxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLDRCQUF1QjtTQUF2Qix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGtDQUFrQztJQUNsQyxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvbGVhZGVyYm9hcmQvc3R5bGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b24ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgICBib3JkZXItc3R5bGU6IGluc2V0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUU5MEZGO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbi1sYXN0OiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogXCJMdWNpZGEgU2FucyBVbmljb2RlXCI7XHJcbiAgICBmb250LXdlaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbn1cclxuXHJcbi5idXR0b246aG92ZXIge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgICBib3JkZXItc3R5bGU6IGluc2V0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODdDRUZBO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbi1sYXN0OiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogXCJMdWNpZGEgU2FucyBVbmljb2RlXCI7XHJcbiAgICBmb250LXdlaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LeaderboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'leaderboard',
          templateUrl: './leaderboard.component.html',
          styleUrls: ['./style.component.css']
        }]
      }], function () {
        return [{
          type: _servicies_teams_service__WEBPACK_IMPORTED_MODULE_1__["TeamsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _servicies_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../_servicies/users.service */
    "./src/app/_servicies/users.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"); //import { AlertService, AuthenticationService } from '@/_services';


    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(userService, router, route) {
        _classCallCheck(this, LoginComponent);

        this.userService = userService;
        this.router = router;
        this.route = route;
        this.credentials = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
        this.message = '';
        this.wrongInput = 'qwrong Input';
        this.imgWebIconUrl = "assets/web-icon-black.png";
      }

      _createClass(LoginComponent, [{
        key: "login",
        value: function login(username, password, event) {
          var _this26 = this;

          if (this.credentials.controls.username.value == '') {
            return;
          }

          if (this.credentials.controls.password.value == '') {
            return;
          }

          this.userService.login(username, password, false).subscribe(function (res) {
            _this26.loggedIn = true;
            _this26.notLoggedIn = false;

            _this26.navigate();
          }, function (error) {
            _this26.error = true;
            _this26.message = "Wrong data.";
            console.error(error);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.error = false;
          this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/'; //tocar esto
        }
      }, {
        key: "navigate",
        value: function navigate() {
          this.router.navigate([this.returnUrl]); //window.history.back();

          window.location.reload();
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servicies_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["login"]],
      decls: 25,
      vars: 2,
      consts: [["lang", "en"], ["http-equiv", "Content-Type", "content", "text/html; charset=UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1, shrink-to-fit=no"], ["name", "description", "content", ""], ["name", "author", "content", "Mark Otto, Jacob Thornton, and Bootstrap contributors"], ["name", "generator", "content", "Jekyll v3.8.6"], [1, "text-center"], [1, "center"], ["action", "/login", 1, "form-signin", 3, "formGroup"], ["alt", "", "width", "72", "height", "72", 1, "mb-4", 3, "src"], [1, "h3", "mb-3", "font-weight-normal"], ["for", "inputEmail", 1, "sr-only"], ["formControlName", "username", "id", "username", "name", "username", "placeholder", "Email", "type", "text", 1, "form-control"], ["username", ""], ["for", "inputPassword", 1, "sr-only"], ["formControlName", "password", "id", "password", "name", "password", "placeholder", "Password", "type", "password", 1, "form-control"], ["password", ""], ["type", "submit", 1, "button", 3, "click"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "meta", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "meta", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "meta", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Signin Template");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "body", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Please sign in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Email address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 12, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 15, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_23_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);

            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

            return ctx.login(_r8.value, _r9.value, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Log in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.credentials);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imgWebIconUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  padding-top: 40px;\r\n  padding-bottom: 40px;\r\n  background-color: #f5f5f5;\r\n}\r\n\r\n.form-signin[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  max-width: 330px;\r\n  padding: 15px;\r\n  margin: auto;\r\n}\r\n\r\n.form-signin[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%] {\r\n  font-weight: 400;\r\n}\r\n\r\n.form-signin[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  box-sizing: border-box;\r\n  height: auto;\r\n  padding: 10px;\r\n  font-size: 16px;\r\n}\r\n\r\n.form-signin[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\r\n  z-index: 2;\r\n}\r\n\r\n.form-signin[_ngcontent-%COMP%]   input[type=\"email\"][_ngcontent-%COMP%] {\r\n  margin-bottom: -1px;\r\n  border-bottom-right-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n\r\n.form-signin[_ngcontent-%COMP%]   input[type=\"password\"][_ngcontent-%COMP%] {\r\n  margin-bottom: 10px;\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\r\n}\r\n\r\n.center[_ngcontent-%COMP%] {\r\n  margin-top: 200px;\r\n  margin-left: 350px;\r\n  margin-right: 0 auto;\r\n  \r\n  width: 60%;\r\n}\r\n\r\n.button[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  transition-duration: 1s;\r\n  color: white;\r\n  border-width: 2px;\r\n  border-style: inset;\r\n  border-radius: 10px;\r\n  transition-duration: 0.4s;\r\n  background-color: #1E90FF;\r\n  text-align: center;\r\n  -moz-text-align-last: center;\r\n       text-align-last: center;\r\n  font-size: 20px;\r\n  font-family: \"Lucida Sans Unicode\";\r\n  font-weight: auto;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-top: 30px;\r\n  margin-bottom: auto;\r\n}\r\n\r\n.button[_ngcontent-%COMP%]:hover {\r\n  color: black;\r\n  border-width: 2px;\r\n  border-style: inset;\r\n  border-radius: 10px;\r\n  transition-duration: 0.4s;\r\n  background-color: #87CEFA;\r\n  text-align: center;\r\n  -moz-text-align-last: center;\r\n       text-align-last: center;\r\n  font-size: 20px;\r\n  font-family: \"Lucida Sans Unicode\";\r\n  font-weight: auto;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-top: 30px;\r\n  margin-bottom: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vc2lnbmluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsWUFBWTtBQUNkOztBQUVBO0VBRUUsYUFBYTtFQUViLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsVUFBVTtBQUNaOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3Qiw0QkFBNEI7QUFDOUI7O0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsb0JBQW9COztFQUVwQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0VBRWYsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQiw0QkFBdUI7T0FBdkIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixrQ0FBa0M7RUFDbEMsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQiw0QkFBdUI7T0FBdkIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixrQ0FBa0M7RUFDbEMsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL3NpZ25pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCxcclxuYm9keSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogNDBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG59XHJcblxyXG4uZm9ybS1zaWduaW4ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMzMwcHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuLmZvcm0tc2lnbmluIC5jaGVja2JveCB7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG4uZm9ybS1zaWduaW4gLmZvcm0tY29udHJvbCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5mb3JtLXNpZ25pbiAuZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcbi5mb3JtLXNpZ25pbiBpbnB1dFt0eXBlPVwiZW1haWxcIl0ge1xyXG4gIG1hcmdpbi1ib3R0b206IC0xcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxufVxyXG4uZm9ybS1zaWduaW4gaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XHJcbn1cclxuXHJcbi5jZW50ZXIge1xyXG4gIG1hcmdpbi10b3A6IDIwMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAzNTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDAgYXV0bztcclxuICBcclxuICB3aWR0aDogNjAlO1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBpbnNldDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFFOTBGRjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbi1sYXN0OiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcIjtcclxuICBmb250LXdlaWdodDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG59XHJcblxyXG4uYnV0dG9uOmhvdmVyIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBpbnNldDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg3Q0VGQTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbi1sYXN0OiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcIjtcclxuICBmb250LXdlaWdodDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'login',
          templateUrl: 'login.component.html',
          styleUrls: ['./signin.component.css']
        }]
      }], function () {
        return [{
          type: _servicies_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/models/play.model.ts":
  /*!**************************************!*\
    !*** ./src/app/models/play.model.ts ***!
    \**************************************/

  /*! exports provided: Play */

  /***/
  function srcAppModelsPlayModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Play", function () {
      return Play;
    });

    var Play = function Play() {
      _classCallCheck(this, Play);
    };
    /***/

  },

  /***/
  "./src/app/models/rol.model.ts":
  /*!*************************************!*\
    !*** ./src/app/models/rol.model.ts ***!
    \*************************************/

  /*! exports provided: Rol */

  /***/
  function srcAppModelsRolModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Rol", function () {
      return Rol;
    });

    var Rol = function Rol() {
      _classCallCheck(this, Rol);
    };
    /***/

  },

  /***/
  "./src/app/models/team.model.ts":
  /*!**************************************!*\
    !*** ./src/app/models/team.model.ts ***!
    \**************************************/

  /*! exports provided: Team */

  /***/
  function srcAppModelsTeamModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Team", function () {
      return Team;
    });

    var Team = function Team() {
      _classCallCheck(this, Team);
    };
    /***/

  },

  /***/
  "./src/app/models/tournament.model.ts":
  /*!********************************************!*\
    !*** ./src/app/models/tournament.model.ts ***!
    \********************************************/

  /*! exports provided: Tournament */

  /***/
  function srcAppModelsTournamentModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tournament", function () {
      return Tournament;
    });

    var Tournament = function Tournament() {
      _classCallCheck(this, Tournament);
    };
    /***/

  },

  /***/
  "./src/app/models/upwrapper.model.ts":
  /*!*******************************************!*\
    !*** ./src/app/models/upwrapper.model.ts ***!
    \*******************************************/

  /*! exports provided: UserPlayerWrapper */

  /***/
  function srcAppModelsUpwrapperModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserPlayerWrapper", function () {
      return UserPlayerWrapper;
    });

    var UserPlayerWrapper = function UserPlayerWrapper() {
      _classCallCheck(this, UserPlayerWrapper);
    };
    /***/

  },

  /***/
  "./src/app/models/user.model.ts":
  /*!**************************************!*\
    !*** ./src/app/models/user.model.ts ***!
    \**************************************/

  /*! exports provided: User */

  /***/
  function srcAppModelsUserModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });

    var User = function User() {
      _classCallCheck(this, User);
    };
    /***/

  },

  /***/
  "./src/app/profile/profile.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/profile/profile.component.ts ***!
    \**********************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _servicies_profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../_servicies/profile.service */
    "./src/app/_servicies/profile.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _servicies_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../_servicies/users.service */
    "./src/app/_servicies/users.service.ts");
    /* harmony import */


    var _servicies_players_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../_servicies/players.service */
    "./src/app/_servicies/players.service.ts");

    var _c0 = function _c0() {
      return ["/updateProfile"];
    };

    var BASE_URL = '/api/player/';

    var ProfileComponent =
    /*#__PURE__*/
    function () {
      function ProfileComponent(profileService, router, activatedRoute, usersService, playersService) {
        _classCallCheck(this, ProfileComponent);

        this.profileService = profileService;
        this.router = router;
        this.usersService = usersService;
        this.playersService = playersService;
        this.username = "";
        this.description = "";
        this.teamName = "";
        this.id = activatedRoute.snapshot.params['id'];
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this27 = this;

          //loadPie.fn(this.player.team.losses,this.player.team.wins);
          this.imgUrl = '/api/user/' + this.id + '/image';
          this.profileService.getPlayerByUserId(this.id).subscribe(function (response) {
            _this27.player = response;
            _this27.username = _this27.player.user.username;

            if (_this27.player.team != null) {
              _this27.teamName = _this27.player.team.name;
            }

            if (_this27.player.description != null) {
              _this27.description = _this27.player.description;
            }

            loadPie.fn(_this27.team.losses, _this27.team.wins);
          }, function (error) {
            return console.error('Error');
          });
        }
      }, {
        key: "buildHtml",
        value: function buildHtml(idUser) {
          this.profileService.getPlayerByUserId(this.id).subscribe;
        }
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
      return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servicies_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servicies_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servicies_players_service__WEBPACK_IMPORTED_MODULE_4__["PlayersService"]));
    };

    ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProfileComponent,
      selectors: [["profile"]],
      decls: 35,
      vars: 6,
      consts: [["lang", "en"], ["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], [1, "header-section"], [1, "container-fluid"], [1, "row"], [1, "col-md-8", "text-md-right", "header-buttons"], [1, "hero-section", "spad"], [1, "col-xl-10", "offset-xl-1"], [1, "col-lg-6"], [1, "hero-text"], [1, "hero-info"], ["type", "submit", "value", "Edit profile", 1, "button", 3, "routerLink"], [1, "hero-image"], ["alt", "5", 3, "src"], [1, "container", "my-4"], [1, "my-4"], ["id", "pieChart"]],
      template: function ProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "meta", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "meta", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "header", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "figure", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "hr", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "canvas", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Team: ", ctx.teamName, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
      styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\r\n\theight: 100%;\r\n\tfont-family: 'Josefin Sans', sans-serif;\r\n}\r\n\r\n.button[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    transition-duration: 1s;\r\n    color: white;\r\n    border-width: 2px;\r\n    border-style: inset;\r\n    border-radius: 10px;\r\n    transition-duration: 0.4s;\r\n    background-color: #1E90FF;\r\n    text-align: center;\r\n    -moz-text-align-last: center;\r\n         text-align-last: center;\r\n    font-size: 20px;\r\n    font-family: \"Lucida Sans Unicode\";\r\n    font-weight: auto;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 30px;\r\n    margin-bottom: auto;\r\n}\r\n\r\n.button[_ngcontent-%COMP%]:hover {\r\n    color: black;\r\n    border-width: 2px;\r\n    border-style: inset;\r\n    border-radius: 10px;\r\n    transition-duration: 0.4s;\r\n    background-color: #87CEFA;\r\n    text-align: center;\r\n    -moz-text-align-last: center;\r\n         text-align-last: center;\r\n    font-size: 20px;\r\n    font-family: \"Lucida Sans Unicode\";\r\n    font-weight: auto;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 30px;\r\n    margin-bottom: auto;\r\n}\r\n\r\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\r\n\tcolor: #40424a;\r\n\tmargin: 0;\r\n\tfont-weight: 600;\r\n\tfont-family: 'Josefin Sans', sans-serif;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n\tfont-size: 48px;\r\n}\r\n\r\nh3[_ngcontent-%COMP%] {\r\n\tfont-size: 30px;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n\tfont-size: 18px;\r\n\tcolor: #808181;\r\n\tline-height: 1.8;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n\tmax-width: 100%;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:focus, select[_ngcontent-%COMP%]:focus, button[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus {\r\n\toutline: none;\r\n}\r\n\r\n\r\n\r\n.spad[_ngcontent-%COMP%] {\r\n\tpadding-top: 125px;\r\n\tpadding-bottom: 110px;\r\n}\r\n\r\n.section-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n\tdisplay: inline-block;\r\n\tposition: relative;\r\n\tmargin-bottom: 110px;\r\n\tpadding-bottom: 2px;\r\n\tline-height: normal;\r\n}\r\n\r\n.section-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after {\r\n\tposition: absolute;\r\n\tcontent: '';\r\n\twidth: 100%;\r\n\theight: 2px;\r\n\tleft: 0;\r\n\tbottom: 0;\r\n\tbackground: #40424a;\r\n}\r\n\r\n.set-bg[_ngcontent-%COMP%] {\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-size: cover;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n#preloder[_ngcontent-%COMP%] {\r\n\tposition: fixed;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tz-index: 999999;\r\n\tbackground: #fff;\r\n}\r\n\r\n.loader[_ngcontent-%COMP%] {\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tborder: 3px solid #000;\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\tleft: 50%;\r\n\tmargin-top: -13px;\r\n\tmargin-left: -13px;\r\n\tborder-radius: 60px;\r\n\tborder-left-color: transparent;\r\n\tanimation: loader 0.8s linear infinite;\r\n\t-webkit-animation: loader 0.8s linear infinite;\r\n}\r\n\r\n@keyframes loader {\r\n\t0% {\r\n\t\ttransform: rotate(0deg);\r\n\t}\r\n\t50% {\r\n\t\ttransform: rotate(180deg);\r\n\t}\r\n\t100% {\r\n\t\ttransform: rotate(360deg);\r\n\t}\r\n}\r\n\r\n@-webkit-keyframes loader {\r\n\t0% {\r\n\t\t-webkit-transform: rotate(0deg);\r\n\t}\r\n\t50% {\r\n\t\t-webkit-transform: rotate(180deg);\r\n\t}\r\n\t100% {\r\n\t\t-webkit-transform: rotate(360deg);\r\n\t}\r\n}\r\n\r\n\r\n\r\n.site-btn[_ngcontent-%COMP%] {\r\n\tdisplay: inline-block;\r\n\ttext-transform: uppercase;\r\n\tfont-size: 12px;\r\n\tmin-width: 213px;\r\n\tmin-height: 20px;\r\n\ttext-align: center;\r\n\tpadding: 20px 10px 15px;\r\n\tposition: relative;\r\n\tbackground-color: #fff;\r\n\tmargin-right: 10px;\r\n\tborder: 2px solid #40424a;\r\n\tcolor: #40424a;\r\n\tfont-weight: 700;\r\n}\r\n\r\n.site-btn[_ngcontent-%COMP%]:hover {\r\n\tcolor: #40424a;\r\n}\r\n\r\n.circle-progress[_ngcontent-%COMP%] {\r\n\ttext-align: center;\r\n\tpadding-top: 30px;\r\n\tdisplay: inline-block;\r\n}\r\n\r\n.circle-progress[_ngcontent-%COMP%]   .prog-circle[_ngcontent-%COMP%] {\r\n\tmargin-bottom: -155px;\r\n}\r\n\r\n.circle-progress[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%] {\r\n\ttransform: rotate(90deg);\r\n}\r\n\r\n.circle-progress[_ngcontent-%COMP%]   .progress-info[_ngcontent-%COMP%] {\r\n\tbackground: #f2f7f8;\r\n\twidth: 127px;\r\n\theight: 127px;\r\n\tborder-radius: 150px;\r\n\tmargin: 0 auto;\r\n\tpadding-top: 45px;\r\n}\r\n\r\n.circle-progress[_ngcontent-%COMP%]   .progress-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n\tfont-size: 36px;\r\n\tcolor: #40424a !important;\r\n}\r\n\r\n.circle-progress[_ngcontent-%COMP%]   .prog-title[_ngcontent-%COMP%] {\r\n\ttext-align: center;\r\n\tmargin-top: 55px;\r\n}\r\n\r\n.circle-progress[_ngcontent-%COMP%]   .prog-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n\tfont-size: 16px;\r\n\ttext-transform: uppercase;\r\n}\r\n\r\n.circle-progress[_ngcontent-%COMP%]   .prog-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n\tfont-size: 15px;\r\n\tcolor: #808181 !important;\r\n}\r\n\r\n\r\n\r\n.img-popup-warp[_ngcontent-%COMP%]   .mfp-content[_ngcontent-%COMP%], .img-popup-warp.mfp-ready.mfp-removing[_ngcontent-%COMP%]   .mfp-content[_ngcontent-%COMP%] {\r\n\topacity: 0;\r\n\ttransform: scale(0.8);\r\n\ttransition: all 0.4s;\r\n}\r\n\r\n.img-popup-warp.mfp-ready[_ngcontent-%COMP%]   .mfp-content[_ngcontent-%COMP%] {\r\n\topacity: 1;\r\n\ttransform: scale(1);\r\n}\r\n\r\n\r\n\r\n.fact-box[_ngcontent-%COMP%] {\r\n\theight: 375px;\r\n\tdisplay: table;\r\n\twidth: 100%;\r\n\tbackground: #40424a;\r\n}\r\n\r\n.fact-box.trans[_ngcontent-%COMP%] {\r\n\tbackground-color: transparent;\r\n}\r\n\r\n.fact-box[_ngcontent-%COMP%]   .fact-content[_ngcontent-%COMP%] {\r\n\tdisplay: table-cell;\r\n\tvertical-align: middle;\r\n\ttext-align: center;\r\n}\r\n\r\n.fact-box[_ngcontent-%COMP%]   .fact-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n\twidth: 60px;\r\n\tmargin-bottom: 30px;\r\n}\r\n\r\n.fact-box[_ngcontent-%COMP%]   .fact-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n\tfont-size: 36px;\r\n\tcolor: #fff;\r\n}\r\n\r\n.fact-box[_ngcontent-%COMP%]   .fact-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n\tcolor: #fff;\r\n\tmargin-bottom: 0;\r\n}\r\n\r\n\r\n\r\n.single-progress-item[_ngcontent-%COMP%] {\r\n\tmargin-bottom: 35px;\r\n\tposition: relative;\r\n}\r\n\r\n.single-progress-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n\tcolor: #40424a;\r\n\tmargin-bottom: 0;\r\n\tfont-weight: 600;\r\n}\r\n\r\n.progress-bar-style[_ngcontent-%COMP%] {\r\n\tdisplay: block;\r\n\theight: 2px;\r\n\tposition: relative;\r\n\twidth: 100%;\r\n\tmargin-bottom: 10px;\r\n}\r\n\r\n.bar-inner[_ngcontent-%COMP%] {\r\n\tposition: absolute;\r\n\theight: 100%;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\tbackground: #40424a;\r\n}\r\n\r\n.bar-inner[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n\tposition: absolute;\r\n\tright: 0;\r\n\tbottom: -30px;\r\n\tcolor: #40424a;\r\n\tfont-weight: 600;\r\n}\r\n\r\n\r\n\r\n.language-progress[_ngcontent-%COMP%] {\r\n\tmax-width: 280px;\r\n\tlist-style: none;\r\n}\r\n\r\n.language-progress[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n\tfont-size: 24px;\r\n\tposition: relative;\r\n\tpadding-right: 150px;\r\n\tmargin-bottom: 30px;\r\n}\r\n\r\n.language-progress[_ngcontent-%COMP%]   .lan-prog[_ngcontent-%COMP%] {\r\n\tposition: absolute;\r\n\tright: 0;\r\n\ttop: 0;\r\n}\r\n\r\n.language-progress[_ngcontent-%COMP%]   .lan-prog[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n\twidth: 12px;\r\n\theight: 12px;\r\n\tdisplay: inline-block;\r\n\tmargin-right: 18px;\r\n\tborder-radius: 12px;\r\n\tbackground: #40424a;\r\n}\r\n\r\n.language-progress[_ngcontent-%COMP%]   .lan-prog[_ngcontent-%COMP%]   span.fade-ele[_ngcontent-%COMP%] {\r\n\tbackground: #cacaca;\r\n}\r\n\r\n\r\n\r\n.icon-box[_ngcontent-%COMP%] {\r\n\ttext-align: center;\r\n\tdisplay: inline-block;\r\n\tmargin-right: 60px;\r\n}\r\n\r\n.icon-box[_ngcontent-%COMP%]:last-child {\r\n\tmargin-right: 0;\r\n}\r\n\r\n.icon-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n\tfont-size: 60px;\r\n}\r\n\r\n.icon-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n\tcolor: #40424a;\r\n}\r\n\r\n.social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n\ttransition: all 0.3s;\r\n}\r\n\r\n\r\n\r\n.header-section[_ngcontent-%COMP%] {\r\n\tpadding: 50px 40px;\r\n\tbackground: #f2f7f8;\r\n}\r\n\r\n.site-logo[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n\tfont-size: 36px;\r\n}\r\n\r\n.site-logo[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n\tcolor: #40424a;\r\n}\r\n\r\n.site-logo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n\tfont-size: 14px;\r\n\tline-height: normal;\r\n}\r\n\r\n.header-buttons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n\tmargin-top: 15px;\r\n}\r\n\r\n\r\n\r\n.hero-section[_ngcontent-%COMP%] {\r\n\tbackground: #f2f7f8;\r\n}\r\n\r\n.hero-text[_ngcontent-%COMP%] {\r\n\tmargin-bottom: 80px;\r\n}\r\n\r\n.hero-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n\tfont-size: 170px;\r\n\tline-height: normal;\r\n\tmargin-bottom: 20px;\r\n}\r\n\r\n.hero-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n\tfont-size: 33px;\r\n\tline-height: 1.3;\r\n}\r\n\r\n.hero-image[_ngcontent-%COMP%] {\r\n\tpadding-top: 70px;\r\n}\r\n\r\n.hero-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n\tmargin-bottom: 30px;\r\n}\r\n\r\n.hero-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n\tlist-style: none;\r\n}\r\n\r\n.hero-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n\tfont-size: 24px;\r\n\tcolor: #808181;\r\n\tmargin-bottom: 15px;\r\n}\r\n\r\n.hero-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n\tcolor: #40424a;\r\n\tdisplay: inline-block;\r\n\tmin-width: 220px;\r\n}\r\n\r\n.hero-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\r\n\tmargin-bottom: 0;\r\n}\r\n\r\n\r\n\r\n.social-section[_ngcontent-%COMP%] {\r\n\tbackground: #f9f9f9;\r\n\tpadding: 80px 0;\r\n}\r\n\r\n.social-section[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%] {\r\n\tdisplay: inline-block;\r\n\tbackground: #f9f9f9;\r\n\tposition: relative;\r\n\tz-index: 5;\r\n}\r\n\r\n.social-section[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n\tcolor: #484848;\r\n\tfont-size: 36px;\r\n\tmargin-right: 40px;\r\n}\r\n\r\n.social-section[_ngcontent-%COMP%]   .social-link-warp[_ngcontent-%COMP%] {\r\n\tposition: relative;\r\n}\r\n\r\n.social-section[_ngcontent-%COMP%]   .social-link-warp[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n\tdisplay: inline-block;\r\n\tfloat: right;\r\n\tfont-weight: 400;\r\n\tpadding-left: 30px;\r\n\tbackground: #f9f9f9;\r\n\tposition: relative;\r\n\tz-index: 5;\r\n}\r\n\r\n.social-section[_ngcontent-%COMP%]   .social-link-warp[_ngcontent-%COMP%]:after {\r\n\tposition: absolute;\r\n\tcontent: '';\r\n\twidth: 50%;\r\n\theight: 2px;\r\n\tleft: 23%;\r\n\ttop: 50%;\r\n\tmargin-top: 1px;\r\n\tbackground: #cbcbcb;\r\n}\r\n\r\n\r\n\r\n.resume-section.with-bg[_ngcontent-%COMP%] {\r\n\t\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-size: cover;\r\n}\r\n\r\n.resume-list[_ngcontent-%COMP%] {\r\n\tlist-style: none;\r\n\tmargin-left: 60px;\r\n\tpadding-left: 110px;\r\n\tborder-left: 2px solid #40424a;\r\n}\r\n\r\n.resume-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n\tmargin-bottom: 120px;\r\n\tposition: relative;\r\n}\r\n\r\n.resume-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\r\n\tmargin-bottom: 0;\r\n}\r\n\r\n.resume-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after {\r\n\tposition: absolute;\r\n\tcontent: '';\r\n\twidth: 15px;\r\n\theight: 15px;\r\n\tborder: 2px solid #40424a;\r\n\tborder-radius: 50px;\r\n\tbackground: #cacaca;\r\n\ttop: 30px;\r\n\tleft: -118px;\r\n}\r\n\r\n.resume-list[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n\tfont-size: 72px;\r\n\tmargin-bottom: 10px;\r\n}\r\n\r\n.resume-list[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n\tfont-size: 16px;\r\n\ttext-transform: uppercase;\r\n\tcolor: #808181;\r\n\tmargin-top: 10px;\r\n\tmargin-bottom: 45px;\r\n}\r\n\r\n.resume-list[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n\tmargin-bottom: 0;\r\n}\r\n\r\n\r\n\r\n.review-slider[_ngcontent-%COMP%] {\r\n\tpadding-left: 150px;\r\n}\r\n\r\n.review-slider[_ngcontent-%COMP%]   .owl-dots[_ngcontent-%COMP%] {\r\n\tposition: absolute;\r\n\tleft: 50px;\r\n\ttop: 70px;\r\n}\r\n\r\n.review-slider[_ngcontent-%COMP%]   .owl-dots[_ngcontent-%COMP%]   .owl-dot[_ngcontent-%COMP%] {\r\n\twidth: 12px;\r\n\theight: 12px;\r\n\tborder: 2px solid #40424a;\r\n\tborder-radius: 50px;\r\n\tbackground: #cacaca;\r\n\tmargin-bottom: 15px;\r\n}\r\n\r\n.review-slider[_ngcontent-%COMP%]   .owl-dots[_ngcontent-%COMP%]   .owl-dot.active[_ngcontent-%COMP%] {\r\n\tbackground: #40424a;\r\n}\r\n\r\n.single-review[_ngcontent-%COMP%]   .qut[_ngcontent-%COMP%] {\r\n\tfont-size: 120px;\r\n\tline-height: 0;\r\n\tcolor: #505259;\r\n\tmargin-top: 60px;\r\n}\r\n\r\n.single-review[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n\tmargin-bottom: 40px;\r\n}\r\n\r\n.single-review[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n\tfont-size: 24px;\r\n\tmargin-bottom: 10px;\r\n}\r\n\r\n.single-review[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n\tfont-size: 16px;\r\n}\r\n\r\n\r\n\r\n.portfolio-warp[_ngcontent-%COMP%] {\r\n\tpadding: 0 60px;\r\n}\r\n\r\n.portfolio-item[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n\tfont-size: 24px;\r\n\tmargin-bottom: 5px;\r\n}\r\n\r\n.portfolio-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n\tfont-size: 14px;\r\n\tmargin-bottom: 0;\r\n}\r\n\r\n.portfolio-item[_ngcontent-%COMP%]   .port-pic[_ngcontent-%COMP%] {\r\n\tmargin-bottom: 30px;\r\n\tdisplay: block;\r\n\theight: 480px;\r\n\tbackground: #333;\r\n\tbackground-position: center center;\r\n\tbackground-size: cover;\r\n\toverflow: hidden;\r\n\tposition: relative;\r\n}\r\n\r\n.portfolio-item[_ngcontent-%COMP%]   .port-pic[_ngcontent-%COMP%]:after {\r\n\tposition: absolute;\r\n\tcontent: '';\r\n\tleft: 0;\r\n\tbottom: 0;\r\n\twidth: 100%;\r\n\theight: 0;\r\n\tbackground: #000;\r\n\topacity: 0;\r\n\tz-index: 2;\r\n\ttransition: all 0.4s cubic-bezier(0.55, 0.09, 0.68, 0.53) 0s;\r\n}\r\n\r\n.portfolio-item[_ngcontent-%COMP%]:hover   .port-pic[_ngcontent-%COMP%]:after {\r\n\topacity: 0.8;\r\n\theight: 100%;\r\n\ttop: 0;\r\n}\r\n\r\n\r\n\r\n.contact-form[_ngcontent-%COMP%] {\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n}\r\n\r\n.contact-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n\tbackground-color: transparent;\r\n\tpadding-left: 25px;\r\n\theight: 60px;\r\n\twidth: 100%;\r\n\tborder: none;\r\n\tborder-bottom: 2px solid #cacaca;\r\n\tmargin-bottom: 30px;\r\n\tfont-size: 13px;\r\n}\r\n\r\n.contact-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\r\n\tpadding-left: 25px;\r\n\theight: 200px;\r\n\twidth: 100%;\r\n\tborder: none;\r\n\tborder-bottom: 2px solid #cacaca;\r\n\tmargin-bottom: 30px;\r\n\tfont-size: 13px;\r\n\tbackground-color: transparent;\r\n}\r\n\r\n.contact-form[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-input-placeholder {\r\n\tfont-style: italic;\r\n}\r\n\r\n.contact-form[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-ms-input-placeholder {\r\n\tfont-style: italic;\r\n}\r\n\r\n.contact-form[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-moz-placeholder {\r\n\tfont-style: italic;\r\n}\r\n\r\n.contact-form[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder {\r\n\tfont-style: italic;\r\n}\r\n\r\n\r\n\r\n.footer-section[_ngcontent-%COMP%] {\r\n\tbackground: #40424a;\r\n\tpadding: 20px 0;\r\n}\r\n\r\n.copyright[_ngcontent-%COMP%] {\r\n\tpadding-top: 5px;\r\n\tfont-size: 12px;\r\n\tcolor: #838488;\r\n\tline-height: normal;\r\n}\r\n\r\n\r\n\r\n.home-two-style[_ngcontent-%COMP%] {\r\n\t\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-size: cover;\r\n\tbackground-position: top center;\r\n\tbackground-color: #009fff;\r\n}\r\n\r\n.home-two-style[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%], .home-two-style[_ngcontent-%COMP%]   .hero-section[_ngcontent-%COMP%], .home-two-style[_ngcontent-%COMP%]   .social-section[_ngcontent-%COMP%], .home-two-style[_ngcontent-%COMP%]   .review-slider[_ngcontent-%COMP%]   .owl-dots[_ngcontent-%COMP%]   .owl-dot[_ngcontent-%COMP%], .home-two-style[_ngcontent-%COMP%]   .site-btn[_ngcontent-%COMP%], .home-two-style[_ngcontent-%COMP%]   .fact-box[_ngcontent-%COMP%], .home-two-style[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%], .home-two-style[_ngcontent-%COMP%]   .social-section[_ngcontent-%COMP%]   .social-link-warp[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n\tbackground-color: transparent;\r\n}\r\n\r\n.home-two-style[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .home-two-style[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .home-two-style[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .home-two-style[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .home-two-style[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .home-two-style[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], .home-two-style[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .home-two-style[_ngcontent-%COMP%]   .site-logo[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .home-two-style[_ngcontent-%COMP%]   .site-logo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .home-two-style[_ngcontent-%COMP%]   .hero-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .home-two-style[_ngcontent-%COMP%]   .hero-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .home-two-style[_ngcontent-%COMP%]   .single-review[_ngcontent-%COMP%]   .qut[_ngcontent-%COMP%], .home-two-style[_ngcontent-%COMP%]   .site-btn[_ngcontent-%COMP%], .home-two-style[_ngcontent-%COMP%]   .social-section[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .home-two-style[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .home-two-style[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .home-two-style[_ngcontent-%COMP%]   .circle-progress[_ngcontent-%COMP%]   .prog-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .home-two-style[_ngcontent-%COMP%]   .circle-progress[_ngcontent-%COMP%]   .prog-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .home-two-style[_ngcontent-%COMP%]   .circle-progress[_ngcontent-%COMP%]   .progress-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n\tcolor: #fff !important;\r\n}\r\n\r\n.home-two-style[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after, .home-two-style[_ngcontent-%COMP%]   .review-slider[_ngcontent-%COMP%]   .owl-dots[_ngcontent-%COMP%]   .owl-dot.active[_ngcontent-%COMP%] {\r\n\tbackground: #fff;\r\n}\r\n\r\n.home-two-style[_ngcontent-%COMP%]   .resume-list[_ngcontent-%COMP%], .home-two-style[_ngcontent-%COMP%]   .resume-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after, .home-two-style[_ngcontent-%COMP%]   .review-slider[_ngcontent-%COMP%]   .owl-dots[_ngcontent-%COMP%]   .owl-dot[_ngcontent-%COMP%], .home-two-style[_ngcontent-%COMP%]   .site-btn[_ngcontent-%COMP%], .home-two-style[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .home-two-style[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\r\n\tborder-color: #fff;\r\n}\r\n\r\n.home-two-style[_ngcontent-%COMP%]   .hero-image[_ngcontent-%COMP%] {\r\n\tpadding-left: 0px;\r\n\tpadding-top: 200px;\r\n}\r\n\r\n.home-two-style[_ngcontent-%COMP%]   .hero-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n\tbox-shadow: 6px 20px 50px rgba(0, 0, 0, 0.5294117647);\r\n}\r\n\r\n.home-two-style[_ngcontent-%COMP%]   .resume-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after {\r\n\tbackground: #009fff;\r\n}\r\n\r\n.home-two-style[_ngcontent-%COMP%]   .circle-progress[_ngcontent-%COMP%]   .progress-info[_ngcontent-%COMP%] {\r\n\tbackground: #50bcfd;\r\n}\r\n\r\n.home-two-style[_ngcontent-%COMP%]   .fact-box[_ngcontent-%COMP%] {\r\n\tborder: 2px solid #fff;\r\n}\r\n\r\n.home-two-style[_ngcontent-%COMP%]   .fact-box.trans[_ngcontent-%COMP%] {\r\n\tborder: none;\r\n}\r\n\r\n.home-two-style[_ngcontent-%COMP%]   .footer-section[_ngcontent-%COMP%] {\r\n\tbackground: #3a4db4;\r\n}\r\n\r\n.home-two-style[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-input-placeholder {\r\n\tcolor: #fff;\r\n}\r\n\r\n.home-two-style[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-ms-input-placeholder {\r\n\tcolor: #fff;\r\n}\r\n\r\n.home-two-style[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-moz-placeholder {\r\n\tcolor: #fff;\r\n}\r\n\r\n.home-two-style[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder {\r\n\tcolor: #fff;\r\n}\r\n\r\n\r\n\r\n.home-three-style[_ngcontent-%COMP%]   .main-left-area[_ngcontent-%COMP%], .home-four-style[_ngcontent-%COMP%]   .main-left-area[_ngcontent-%COMP%] {\r\n\tbackground: #f2f7f8;\r\n\tpadding-top: 200px;\r\n\tpadding-right: 80px;\r\n\tpadding-left: 80px;\r\n}\r\n\r\n.home-three-style[_ngcontent-%COMP%]   .main-left-area[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .home-four-style[_ngcontent-%COMP%]   .main-left-area[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n\tmargin-bottom: 130px;\r\n}\r\n\r\n.home-three-style[_ngcontent-%COMP%]   .main-right-area[_ngcontent-%COMP%], .home-four-style[_ngcontent-%COMP%]   .main-right-area[_ngcontent-%COMP%] {\r\n\tpadding-top: 200px;\r\n\tpadding-left: 110px;\r\n}\r\n\r\n.home-three-style[_ngcontent-%COMP%]   .resume-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .home-four-style[_ngcontent-%COMP%]   .resume-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n\tpadding-left: 0;\r\n}\r\n\r\n.home-three-style[_ngcontent-%COMP%]   .resume-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after, .home-four-style[_ngcontent-%COMP%]   .resume-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after {\r\n\tdisplay: none;\r\n}\r\n\r\n.home-three-style[_ngcontent-%COMP%]   .resume-list[_ngcontent-%COMP%], .home-four-style[_ngcontent-%COMP%]   .resume-list[_ngcontent-%COMP%] {\r\n\tborder-left: none;\r\n\tpadding-left: 0;\r\n\tmargin-left: 0;\r\n}\r\n\r\n.home-three-style[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%], .home-four-style[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%] {\r\n\tpadding: 50px 80px;\r\n\tbackground: transparent;\r\n\tposition: absolute;\r\n\twidth: 100%;\r\n\tz-index: 1;\r\n}\r\n\r\n.home-three-style[_ngcontent-%COMP%]   .hero-image[_ngcontent-%COMP%], .home-four-style[_ngcontent-%COMP%]   .hero-image[_ngcontent-%COMP%] {\r\n\tmargin-bottom: 100px;\r\n}\r\n\r\n.home-three-style[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .home-four-style[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n\tfont-size: 72px;\r\n\tmargin-bottom: 40px;\r\n}\r\n\r\n.home-three-style[_ngcontent-%COMP%]   .review-slider[_ngcontent-%COMP%], .home-four-style[_ngcontent-%COMP%]   .review-slider[_ngcontent-%COMP%] {\r\n\tpadding-left: 0;\r\n}\r\n\r\n.home-three-style[_ngcontent-%COMP%]   .review-slider[_ngcontent-%COMP%]   .owl-dots[_ngcontent-%COMP%], .home-four-style[_ngcontent-%COMP%]   .review-slider[_ngcontent-%COMP%]   .owl-dots[_ngcontent-%COMP%] {\r\n\tposition: relative;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\tpadding-top: 50px;\r\n}\r\n\r\n.home-three-style[_ngcontent-%COMP%]   .review-slider[_ngcontent-%COMP%]   .owl-dots[_ngcontent-%COMP%]   .owl-dot[_ngcontent-%COMP%], .home-four-style[_ngcontent-%COMP%]   .review-slider[_ngcontent-%COMP%]   .owl-dots[_ngcontent-%COMP%]   .owl-dot[_ngcontent-%COMP%] {\r\n\tdisplay: inline-block;\r\n\tmargin-right: 15px;\r\n\tbackground: #cacaca;\r\n\tborder: none;\r\n}\r\n\r\n.home-three-style[_ngcontent-%COMP%]   .review-slider[_ngcontent-%COMP%]   .owl-dots[_ngcontent-%COMP%]   .owl-dot.active[_ngcontent-%COMP%], .home-four-style[_ngcontent-%COMP%]   .review-slider[_ngcontent-%COMP%]   .owl-dots[_ngcontent-%COMP%]   .owl-dot.active[_ngcontent-%COMP%] {\r\n\tbackground: #40424a;\r\n}\r\n\r\n.home-three-style[_ngcontent-%COMP%]   .skills[_ngcontent-%COMP%], .home-four-style[_ngcontent-%COMP%]   .skills[_ngcontent-%COMP%] {\r\n\tmax-width: 555px;\r\n}\r\n\r\n.home-three-style[_ngcontent-%COMP%]   .fact-box.trans[_ngcontent-%COMP%], .home-four-style[_ngcontent-%COMP%]   .fact-box.trans[_ngcontent-%COMP%] {\r\n\tmargin-bottom: 80px;\r\n}\r\n\r\n.home-three-style[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%], .home-four-style[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%] {\r\n\ttext-align: center;\r\n\tpadding-bottom: 70px;\r\n\tpadding-top: 120px;\r\n}\r\n\r\n.home-three-style[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .home-four-style[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n\tfont-size: 30px;\r\n\tmargin-right: 40px;\r\n\tcolor: #b9b9b9;\r\n}\r\n\r\n.home-three-style[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .home-four-style[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n\tcolor: #484848;\r\n}\r\n\r\n\r\n\r\n.home-four-style[_ngcontent-%COMP%]   .site-logo[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .home-four-style[_ngcontent-%COMP%]   .site-logo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n\tcolor: #fff;\r\n}\r\n\r\n.home-four-style[_ngcontent-%COMP%]   .main-left-area[_ngcontent-%COMP%] {\r\n\tposition: relative;\r\n\t\r\n\tbackground: #481340;\r\n\t\r\n\t\r\n\t\r\n\tbackground: linear-gradient(to bottom, #481340 0%, #ff0f3c 100%, #ff0f3c 100%);\r\n\t\r\n\tfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#481340', endColorstr='#ff0f3c', GradientType=0);\r\n\t\r\n}\r\n\r\n.home-four-style[_ngcontent-%COMP%]   .main-left-area[_ngcontent-%COMP%]:after {\r\n\tposition: absolute;\r\n\tcontent: \"\";\r\n\twidth: 100%;\r\n\theight: 800px;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\t\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-size: cover;\r\n}\r\n\r\n.home-four-style[_ngcontent-%COMP%]   .main-left-area[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .home-four-style[_ngcontent-%COMP%]   .main-left-area[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .home-four-style[_ngcontent-%COMP%]   .main-left-area[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .home-four-style[_ngcontent-%COMP%]   .main-left-area[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .home-four-style[_ngcontent-%COMP%]   .main-left-area[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .home-four-style[_ngcontent-%COMP%]   .main-left-area[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%], .home-four-style[_ngcontent-%COMP%]   .main-left-area[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .home-four-style[_ngcontent-%COMP%]   .main-left-area[_ngcontent-%COMP%]   .hero-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .home-four-style[_ngcontent-%COMP%]   .main-left-area[_ngcontent-%COMP%]   .hero-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .home-four-style[_ngcontent-%COMP%]   .main-left-area[_ngcontent-%COMP%]   .site-btn[_ngcontent-%COMP%], .home-four-style[_ngcontent-%COMP%]   .main-left-area[_ngcontent-%COMP%]   .social-section[_ngcontent-%COMP%], .home-four-style[_ngcontent-%COMP%]   .main-left-area[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .home-four-style[_ngcontent-%COMP%]   .main-left-area[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .home-four-style[_ngcontent-%COMP%]   .main-left-area[_ngcontent-%COMP%]   .contact-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .home-four-style[_ngcontent-%COMP%]   .main-left-area[_ngcontent-%COMP%]   .circle-progress[_ngcontent-%COMP%]   .prog-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .home-four-style[_ngcontent-%COMP%]   .main-left-area[_ngcontent-%COMP%]   .circle-progress[_ngcontent-%COMP%]   .prog-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .home-four-style[_ngcontent-%COMP%]   .main-left-area[_ngcontent-%COMP%]   .circle-progress[_ngcontent-%COMP%]   .progress-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .home-four-style[_ngcontent-%COMP%]   .main-left-area[_ngcontent-%COMP%]   .language-progress[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n\tcolor: #fff !important;\r\n}\r\n\r\n.home-four-style[_ngcontent-%COMP%]   .main-left-area[_ngcontent-%COMP%]   .circle-progress[_ngcontent-%COMP%]   .progress-info[_ngcontent-%COMP%] {\r\n\tbackground: rgba(255, 255, 255, 0.29);\r\n}\r\n\r\n.home-four-style[_ngcontent-%COMP%]   .main-left-area[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after, .home-four-style[_ngcontent-%COMP%]   .main-left-area[_ngcontent-%COMP%]   .language-progress[_ngcontent-%COMP%]   .lan-prog[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n\tbackground: #fff;\r\n}\r\n\r\n.home-four-style[_ngcontent-%COMP%]   .main-left-area[_ngcontent-%COMP%]   .language-progress[_ngcontent-%COMP%]   .lan-prog[_ngcontent-%COMP%]   span.fade-ele[_ngcontent-%COMP%] {\r\n\tbackground: rgba(255, 255, 255, 0.29);\r\n}\r\n\r\n.home-four-style[_ngcontent-%COMP%]   .main-left-area[_ngcontent-%COMP%]   .fact-box[_ngcontent-%COMP%] {\r\n\tbackground-color: transparent;\r\n\tborder: 2px solid #fff;\r\n}\r\n\r\n.home-four-style[_ngcontent-%COMP%]   .main-left-area[_ngcontent-%COMP%]   .fact-box.trans[_ngcontent-%COMP%] {\r\n\tborder: none;\r\n}\r\n\r\n.home-four-style[_ngcontent-%COMP%]   .main-left-area[_ngcontent-%COMP%]   .intro-section[_ngcontent-%COMP%] {\r\n\tposition: relative;\r\n\tz-index: 2;\r\n}\r\n\r\n.home-four-style[_ngcontent-%COMP%]   .main-right-area[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after, .home-four-style[_ngcontent-%COMP%]   .main-right-area[_ngcontent-%COMP%]   .review-slider[_ngcontent-%COMP%]   .owl-dots[_ngcontent-%COMP%]   .owl-dot.active[_ngcontent-%COMP%] {\r\n\tbackground: #ff0f3c;\r\n}\r\n\r\n.home-four-style[_ngcontent-%COMP%]   .main-right-area[_ngcontent-%COMP%]   .resume-list[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .home-four-style[_ngcontent-%COMP%]   .main-right-area[_ngcontent-%COMP%]   .single-review[_ngcontent-%COMP%]   .qut[_ngcontent-%COMP%] {\r\n\tcolor: #ff0f3c;\r\n}\r\n\r\n\r\n\r\n.home-five-style[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%] {\r\n\tpadding: 50px 80px;\r\n\tbackground: transparent;\r\n\tposition: absolute;\r\n\twidth: 100%;\r\n\tz-index: 1;\r\n}\r\n\r\n.home-five-style[_ngcontent-%COMP%]   .hero-section[_ngcontent-%COMP%] {\r\n\tpadding-top: 70px;\r\n}\r\n\r\n.home-five-style[_ngcontent-%COMP%]   .hero-section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n\tmargin-bottom: 60px;\r\n}\r\n\r\n.home-five-style[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n\tfont-size: 72px;\r\n\tmargin-bottom: 40px;\r\n}\r\n\r\n.home-five-style[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%] {\r\n\tpadding-top: 0px;\r\n\ttext-align: center;\r\n\tpadding-bottom: 70px;\r\n}\r\n\r\n.home-five-style[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n\tfont-size: 30px;\r\n\tmargin-right: 40px;\r\n\tcolor: #b9b9b9;\r\n}\r\n\r\n.home-five-style[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n\tcolor: #484848;\r\n}\r\n\r\n.home-five-style[_ngcontent-%COMP%]   .resume-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n\tpadding-left: 0;\r\n}\r\n\r\n.home-five-style[_ngcontent-%COMP%]   .resume-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after {\r\n\tdisplay: none;\r\n}\r\n\r\n.home-five-style[_ngcontent-%COMP%]   .resume-list[_ngcontent-%COMP%] {\r\n\tborder-left: none;\r\n\tpadding-left: 0;\r\n\tmargin-left: 0;\r\n}\r\n\r\n.home-five-style[_ngcontent-%COMP%]   .review-slider[_ngcontent-%COMP%] {\r\n\tpadding-left: 0;\r\n}\r\n\r\n.home-five-style[_ngcontent-%COMP%]   .review-slider[_ngcontent-%COMP%]   .owl-dots[_ngcontent-%COMP%] {\r\n\tposition: relative;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\tpadding-top: 50px;\r\n}\r\n\r\n.home-five-style[_ngcontent-%COMP%]   .review-slider[_ngcontent-%COMP%]   .owl-dots[_ngcontent-%COMP%]   .owl-dot[_ngcontent-%COMP%] {\r\n\tdisplay: inline-block;\r\n\tmargin-right: 15px;\r\n\tbackground: #cacaca;\r\n\tborder: none;\r\n}\r\n\r\n.home-five-style[_ngcontent-%COMP%]   .review-slider[_ngcontent-%COMP%]   .owl-dots[_ngcontent-%COMP%]   .owl-dot.active[_ngcontent-%COMP%] {\r\n\tbackground: #40424a;\r\n}\r\n\r\n.home-five-style[_ngcontent-%COMP%]   .circle-progress[_ngcontent-%COMP%] {\r\n\tpadding-top: 0;\r\n}\r\n\r\n\r\n\r\n.home-six-style[_ngcontent-%COMP%]   .site-logo[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .home-six-style[_ngcontent-%COMP%]   .site-logo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .home-six-style[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .home-six-style[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .home-six-style[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n\tcolor: #fff;\r\n}\r\n\r\n.home-six-style[_ngcontent-%COMP%]   .resume-list[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .home-six-style[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .home-six-style[_ngcontent-%COMP%]   .single-review[_ngcontent-%COMP%]   .qut[_ngcontent-%COMP%] {\r\n\tcolor: #009fff;\r\n}\r\n\r\n.home-six-style[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after, .home-six-style[_ngcontent-%COMP%]   .fact-box[_ngcontent-%COMP%], .home-six-style[_ngcontent-%COMP%]   .review-slider[_ngcontent-%COMP%]   .owl-dots[_ngcontent-%COMP%]   .owl-dot.active[_ngcontent-%COMP%], .home-six-style[_ngcontent-%COMP%]   .language-progress[_ngcontent-%COMP%]   .lan-prog[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n\tbackground: #009fff;\r\n}\r\n\r\n.home-six-style[_ngcontent-%COMP%]   .language-progress[_ngcontent-%COMP%]   .lan-prog[_ngcontent-%COMP%]   span.fade-ele[_ngcontent-%COMP%] {\r\n\tbackground: #cacaca;\r\n}\r\n\r\n.home-six-style[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%] {\r\n\tpadding: 50px 80px;\r\n\tbackground: transparent;\r\n\tposition: absolute;\r\n\twidth: 100%;\r\n\tz-index: 1;\r\n}\r\n\r\n.home-six-style[_ngcontent-%COMP%]   .hero-section[_ngcontent-%COMP%] {\r\n\tbackground: #009fff;\r\n\tpadding-top: 70px;\r\n}\r\n\r\n.home-six-style[_ngcontent-%COMP%]   .hero-section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n\tmargin-bottom: 60px;\r\n}\r\n\r\n.home-six-style[_ngcontent-%COMP%]   .hero-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n\tfont-size: 72px;\r\n\tmargin-bottom: 40px;\r\n}\r\n\r\n.home-six-style[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%] {\r\n\tpadding-top: 0px;\r\n\ttext-align: center;\r\n\tpadding-bottom: 70px;\r\n}\r\n\r\n.home-six-style[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n\tfont-size: 30px;\r\n\tmargin-right: 40px;\r\n\tcolor: #b9b9b9;\r\n}\r\n\r\n.home-six-style[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n\tcolor: #484848;\r\n}\r\n\r\n.home-six-style[_ngcontent-%COMP%]   .resume-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n\tpadding-left: 0;\r\n}\r\n\r\n.home-six-style[_ngcontent-%COMP%]   .resume-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after {\r\n\tdisplay: none;\r\n}\r\n\r\n.home-six-style[_ngcontent-%COMP%]   .resume-list[_ngcontent-%COMP%] {\r\n\tborder-left: none;\r\n\tpadding-left: 0;\r\n\tmargin-left: 0;\r\n}\r\n\r\n.home-six-style[_ngcontent-%COMP%]   .review-slider[_ngcontent-%COMP%] {\r\n\tpadding-left: 0;\r\n}\r\n\r\n.home-six-style[_ngcontent-%COMP%]   .review-slider[_ngcontent-%COMP%]   .owl-dots[_ngcontent-%COMP%] {\r\n\tposition: relative;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\tpadding-top: 50px;\r\n}\r\n\r\n.home-six-style[_ngcontent-%COMP%]   .review-slider[_ngcontent-%COMP%]   .owl-dots[_ngcontent-%COMP%]   .owl-dot[_ngcontent-%COMP%] {\r\n\tdisplay: inline-block;\r\n\tmargin-right: 15px;\r\n\tbackground: #cacaca;\r\n\tborder: none;\r\n}\r\n\r\n.home-six-style[_ngcontent-%COMP%]   .circle-progress[_ngcontent-%COMP%] {\r\n\tpadding-top: 0;\r\n}\r\n\r\n.info-section[_ngcontent-%COMP%] {\r\n\tbackground: #40424a;\r\n\tpadding: 60px 0;\r\n}\r\n\r\n.info-section[_ngcontent-%COMP%]   .hero-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n\tcolor: #fff;\r\n}\r\n\r\n.info-section[_ngcontent-%COMP%]   .hero-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n\tcolor: #fff;\r\n}\r\n\r\n\r\n\r\n@media only screen and (max-width: 1730px) {\r\n\t.home-two-style[_ngcontent-%COMP%]   .social-section[_ngcontent-%COMP%]   .social-link-warp[_ngcontent-%COMP%]:after {\r\n\t\tdisplay: none;\r\n\t}\r\n}\r\n\r\n@media only screen and (max-width: 1600px) {\r\n\t.hero-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n\t\tfont-size: 120px;\r\n\t}\r\n}\r\n\r\n@media only screen and (max-width: 1450px) {\r\n\t.home-five-style[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%] {\r\n\t\tposition: relative;\r\n\t\tbackground: #f2f7f8;\r\n\t}\r\n\t.home-six-style[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%] {\r\n\t\tposition: relative;\r\n\t\tbackground: #009fff;\r\n\t}\r\n}\r\n\r\n@media only screen and (max-width: 1366px) and (min-width: 1200px) {\r\n\t.home-five-style[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%] {\r\n\t\tposition: relative;\r\n\t\tbackground: #f2f7f8;\r\n\t}\r\n\t.container-warp[_ngcontent-%COMP%] {\r\n\t\tmin-width: 80%;\r\n\t\tmargin-left: 10%;\r\n\t}\r\n\t.hero-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n\t\tmin-width: 180px;\r\n\t}\r\n\t.portfolio-item[_ngcontent-%COMP%]   .port-pic[_ngcontent-%COMP%] {\r\n\t\theight: 310px;\r\n\t}\r\n\t.home-three-style[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%] {\r\n\t\tpadding: 50px 30px;\r\n\t}\r\n\t.home-three-style[_ngcontent-%COMP%]   .main-left-area[_ngcontent-%COMP%] {\r\n\t\tpadding-right: 30px;\r\n\t\tpadding-left: 30px;\r\n\t}\r\n\t.home-three-style[_ngcontent-%COMP%]   .main-right-area[_ngcontent-%COMP%] {\r\n\t\tpadding-left: 100px;\r\n\t}\r\n}\r\n\r\n\r\n\r\n@media only screen and (min-width: 992px) and (max-width: 1199px) {\r\n\t.portfolio-warp[_ngcontent-%COMP%] {\r\n\t\tpadding: 0;\r\n\t}\r\n\t.home-three-style[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%] {\r\n\t\tpadding: 50px 15px;\r\n\t}\r\n\t.home-three-style[_ngcontent-%COMP%]   .main-left-area[_ngcontent-%COMP%] {\r\n\t\tpadding-right: 15px;\r\n\t\tpadding-left: 15px;\r\n\t}\r\n\t.home-three-style[_ngcontent-%COMP%]   .main-right-area[_ngcontent-%COMP%] {\r\n\t\tpadding-left: 50px;\r\n\t}\r\n\t.home-three-style[_ngcontent-%COMP%]   .main-right-area[_ngcontent-%COMP%] {\r\n\t\tpadding-left: 100px;\r\n\t}\r\n\t.portfolio-item[_ngcontent-%COMP%]   .port-pic[_ngcontent-%COMP%] {\r\n\t\theight: 310px;\r\n\t}\r\n\t.portfolio-item[_ngcontent-%COMP%] {\r\n\t\tmargin-bottom: 30px;\r\n\t}\r\n}\r\n\r\n\r\n\r\n@media only screen and (min-width: 768px) and (max-width: 991px) {\r\n\t.portfolio-warp[_ngcontent-%COMP%] {\r\n\t\tpadding: 0;\r\n\t}\r\n\t.hidden-md[_ngcontent-%COMP%] {\r\n\t\tdisplay: none !important;\r\n\t}\r\n\t.icon-box[_ngcontent-%COMP%] {\r\n\t\tmargin-right: 30px;\r\n\t}\r\n\t.social-section[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%] {\r\n\t\tdisplay: block;\r\n\t\ttext-align: center;\r\n\t}\r\n\t.social-link-warp[_ngcontent-%COMP%]:after {\r\n\t\tdisplay: none;\r\n\t}\r\n\t.portfolio-item[_ngcontent-%COMP%] {\r\n\t\tmargin-bottom: 30px;\r\n\t}\r\n\t.home-three-style[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%] {\r\n\t\tposition: relative;\r\n\t\tbackground: #f2f7f8;\r\n\t}\r\n\t.home-three-style[_ngcontent-%COMP%]   .main-left-area[_ngcontent-%COMP%] {\r\n\t\tpadding-top: 0;\r\n\t}\r\n\t.home-three-style[_ngcontent-%COMP%]   .main-left-area[_ngcontent-%COMP%], .home-three-style[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%], .home-three-style[_ngcontent-%COMP%]   .main-right-area[_ngcontent-%COMP%], .home-four-style[_ngcontent-%COMP%]   .main-left-area[_ngcontent-%COMP%], .home-four-style[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%], .home-four-style[_ngcontent-%COMP%]   .main-right-area[_ngcontent-%COMP%] {\r\n\t\tpadding-right: 30px;\r\n\t\tpadding-left: 30px;\r\n\t}\r\n\t.home-five-style[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%], .home-six-style[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%] {\r\n\t\tpadding: 50px 0;\r\n\t}\r\n\t.info-section[_ngcontent-%COMP%]   .hero-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n\t\tcolor: #9c9b9b;\r\n\t}\r\n\t.hero-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n\t\tmargin-bottom: 30px;\r\n\t}\r\n\t.hero-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n\t\tdisplay: block;\r\n\t}\r\n}\r\n\r\n\r\n\r\n@media only screen and (max-width: 767px) {\r\n\t.icon-box[_ngcontent-%COMP%] {\r\n\t\tmargin-right: 30px;\r\n\t\ttext-align: left;\r\n\t}\r\n\t.hero-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n\t\tfont-size: 80px;\r\n\t}\r\n\t.portfolio-warp[_ngcontent-%COMP%] {\r\n\t\tpadding: 0;\r\n\t}\r\n\t.hidden-md[_ngcontent-%COMP%] {\r\n\t\tdisplay: none !important;\r\n\t}\r\n\t.resume-list[_ngcontent-%COMP%] {\r\n\t\tmargin-left: 0;\r\n\t\tpadding-left: 0;\r\n\t\tborder-left: none;\r\n\t}\r\n\t.review-slider[_ngcontent-%COMP%] {\r\n\t\tpadding-left: 0;\r\n\t}\r\n\t.review-slider[_ngcontent-%COMP%]   .owl-dots[_ngcontent-%COMP%] {\r\n\t\tposition: relative;\r\n\t\tleft: 0;\r\n\t\ttop: 70px;\r\n\t}\r\n\t.review-slider[_ngcontent-%COMP%]   .owl-dots[_ngcontent-%COMP%]   .owl-dot[_ngcontent-%COMP%] {\r\n\t\tdisplay: inline-block;\r\n\t\tmargin-right: 15px;\r\n\t}\r\n\t.portfolio-item[_ngcontent-%COMP%] {\r\n\t\tmargin-bottom: 30px;\r\n\t}\r\n\t.fact-box[_ngcontent-%COMP%] {\r\n\t\tmargin-bottom: 30px;\r\n\t}\r\n\t.header-section[_ngcontent-%COMP%] {\r\n\t\tpadding: 50px 0;\r\n\t}\r\n\t.social-section[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%] {\r\n\t\tdisplay: block;\r\n\t\ttext-align: center;\r\n\t}\r\n\t.home-three-style[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%] {\r\n\t\tposition: relative;\r\n\t\tbackground: #f2f7f8;\r\n\t}\r\n\t.home-three-style[_ngcontent-%COMP%]   .main-left-area[_ngcontent-%COMP%] {\r\n\t\tpadding-top: 0;\r\n\t}\r\n\t.home-three-style[_ngcontent-%COMP%]   .main-left-area[_ngcontent-%COMP%], .home-three-style[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%], .home-three-style[_ngcontent-%COMP%]   .main-right-area[_ngcontent-%COMP%], .home-four-style[_ngcontent-%COMP%]   .main-left-area[_ngcontent-%COMP%], .home-four-style[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%], .home-four-style[_ngcontent-%COMP%]   .main-right-area[_ngcontent-%COMP%] {\r\n\t\tpadding-right: 30px;\r\n\t\tpadding-left: 30px;\r\n\t}\r\n\t.home-five-style[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%], .home-six-style[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%] {\r\n\t\tpadding: 50px 0;\r\n\t}\r\n\t.info-section[_ngcontent-%COMP%]   .hero-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n\t\tcolor: #9c9b9b;\r\n\t}\r\n}\r\n\r\n\r\n\r\n@media only screen and (max-width: 479px) {\r\n\t.hero-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n\t\tfont-size: 50px;\r\n\t}\r\n\t.hero-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n\t\tfont-size: 18px;\r\n\t}\r\n\t.hero-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n\t\tdisplay: block;\r\n\t}\r\n\t.social-section[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n\t\tmargin-right: 30px;\r\n\t}\r\n\t.resume-list[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n\t\tfont-size: 50px;\r\n\t}\r\n\t.portfolio-item[_ngcontent-%COMP%] {\r\n\t\tmargin-bottom: 30px;\r\n\t}\r\n\t.home-three-style[_ngcontent-%COMP%]   .main-left-area[_ngcontent-%COMP%], .home-three-style[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%], .home-three-style[_ngcontent-%COMP%]   .main-right-area[_ngcontent-%COMP%], .home-four-style[_ngcontent-%COMP%]   .main-left-area[_ngcontent-%COMP%], .home-four-style[_ngcontent-%COMP%]   .header-section[_ngcontent-%COMP%], .home-four-style[_ngcontent-%COMP%]   .main-right-area[_ngcontent-%COMP%] {\r\n\t\tpadding-right: 15px;\r\n\t\tpadding-left: 15px;\r\n\t}\r\n\t.home-four-style[_ngcontent-%COMP%]   .main-left-area[_ngcontent-%COMP%] {\r\n\t\tpadding-top: 250px;\r\n\t}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O3NDQUtzQzs7QUFFdEMsMkNBQTJDOztBQUMzQzsyQ0FDMkM7O0FBQzNDOztDQUVDLFlBQVk7Q0FDWix1Q0FBdUM7QUFDeEM7O0FBRUE7SUFDSSxlQUFlO0lBRWYsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQiw0QkFBdUI7U0FBdkIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixrQ0FBa0M7SUFDbEMsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQiw0QkFBdUI7U0FBdkIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixrQ0FBa0M7SUFDbEMsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTs7Ozs7O0NBTUMsY0FBYztDQUNkLFNBQVM7Q0FDVCxnQkFBZ0I7Q0FDaEIsdUNBQXVDO0FBQ3hDOztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsY0FBYztDQUNkLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Ozs7Q0FJQyxhQUFhO0FBQ2Q7O0FBSUE7O3dCQUV3Qjs7QUFDeEI7Q0FDQyxrQkFBa0I7Q0FDbEIscUJBQXFCO0FBQ3RCOztBQUVBO0NBQ0MscUJBQXFCO0NBQ3JCLGtCQUFrQjtDQUNsQixvQkFBb0I7Q0FDcEIsbUJBQW1CO0NBQ25CLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixXQUFXO0NBQ1gsV0FBVztDQUNYLFdBQVc7Q0FDWCxPQUFPO0NBQ1AsU0FBUztDQUNULG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLDRCQUE0QjtDQUM1QixzQkFBc0I7QUFDdkI7O0FBRUE7OzJCQUUyQjs7QUFFM0IsYUFBYTs7QUFDYjtDQUNDLGVBQWU7Q0FDZixXQUFXO0NBQ1gsWUFBWTtDQUNaLE1BQU07Q0FDTixPQUFPO0NBQ1AsZUFBZTtDQUNmLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0NBQ1osc0JBQXNCO0NBQ3RCLGtCQUFrQjtDQUNsQixRQUFRO0NBQ1IsU0FBUztDQUNULGlCQUFpQjtDQUNqQixrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25CLDhCQUE4QjtDQUM5QixzQ0FBc0M7Q0FDdEMsOENBQThDO0FBQy9DOztBQUVBO0NBQ0M7RUFFUyx1QkFBdUI7Q0FDaEM7Q0FDQTtFQUVTLHlCQUF5QjtDQUNsQztDQUNBO0VBRVMseUJBQXlCO0NBQ2xDO0FBQ0Q7O0FBRUE7Q0FDQztFQUNDLCtCQUErQjtDQUNoQztDQUNBO0VBQ0MsaUNBQWlDO0NBQ2xDO0NBQ0E7RUFDQyxpQ0FBaUM7Q0FDbEM7QUFDRDs7QUFFQSxpQkFBaUI7O0FBQ2pCO0NBQ0MscUJBQXFCO0NBQ3JCLHlCQUF5QjtDQUN6QixlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLGdCQUFnQjtDQUNoQixrQkFBa0I7Q0FDbEIsdUJBQXVCO0NBQ3ZCLGtCQUFrQjtDQUNsQixzQkFBc0I7Q0FDdEIsa0JBQWtCO0NBQ2xCLHlCQUF5QjtDQUN6QixjQUFjO0NBQ2QsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsY0FBYztBQUNmOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLGlCQUFpQjtDQUNqQixxQkFBcUI7QUFDdEI7O0FBRUE7Q0FDQyxxQkFBcUI7QUFDdEI7O0FBRUE7Q0FHQyx3QkFBd0I7QUFDekI7O0FBRUE7Q0FDQyxtQkFBbUI7Q0FDbkIsWUFBWTtDQUNaLGFBQWE7Q0FDYixvQkFBb0I7Q0FDcEIsY0FBYztDQUNkLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGVBQWU7Q0FDZix5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsZUFBZTtDQUNmLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLGVBQWU7Q0FDZix5QkFBeUI7QUFDMUI7O0FBRUEsZ0JBQWdCOztBQUNoQjs7Q0FFQyxVQUFVO0NBR1YscUJBQXFCO0NBR3JCLG9CQUFvQjtBQUNyQjs7QUFFQTtDQUNDLFVBQVU7Q0FHVixtQkFBbUI7QUFDcEI7O0FBRUEsYUFBYTs7QUFDYjtDQUNDLGFBQWE7Q0FDYixjQUFjO0NBQ2QsV0FBVztDQUNYLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLDZCQUE2QjtBQUM5Qjs7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQixzQkFBc0I7Q0FDdEIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsV0FBVztDQUNYLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsZ0JBQWdCO0FBQ2pCOztBQUVBLGdCQUFnQjs7QUFDaEI7Q0FDQyxtQkFBbUI7Q0FDbkIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsY0FBYztDQUNkLGdCQUFnQjtDQUNoQixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxjQUFjO0NBQ2QsV0FBVztDQUNYLGtCQUFrQjtDQUNsQixXQUFXO0NBQ1gsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFlBQVk7Q0FDWixPQUFPO0NBQ1AsTUFBTTtDQUNOLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixRQUFRO0NBQ1IsYUFBYTtDQUNiLGNBQWM7Q0FDZCxnQkFBZ0I7QUFDakI7O0FBRUEsa0JBQWtCOztBQUNsQjtDQUNDLGdCQUFnQjtDQUNoQixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2Ysa0JBQWtCO0NBQ2xCLG9CQUFvQjtDQUNwQixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsUUFBUTtDQUNSLE1BQU07QUFDUDs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0NBQ1oscUJBQXFCO0NBQ3JCLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkIsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsbUJBQW1CO0FBQ3BCOztBQUVBLGFBQWE7O0FBQ2I7Q0FDQyxrQkFBa0I7Q0FDbEIscUJBQXFCO0NBQ3JCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsY0FBYztBQUNmOztBQUVBO0NBR0Msb0JBQW9CO0FBQ3JCOztBQUVBOzt3QkFFd0I7O0FBQ3hCO0NBQ0Msa0JBQWtCO0NBQ2xCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUVBOzt3QkFFd0I7O0FBQ3hCO0NBQ0MsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLG1CQUFtQjtDQUNuQixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsZUFBZTtDQUNmLGNBQWM7Q0FDZCxtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxjQUFjO0NBQ2QscUJBQXFCO0NBQ3JCLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFFQTs7d0JBRXdCOztBQUN4QjtDQUNDLG1CQUFtQjtDQUNuQixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MscUJBQXFCO0NBQ3JCLG1CQUFtQjtDQUNuQixrQkFBa0I7Q0FDbEIsVUFBVTtBQUNYOztBQUVBO0NBQ0MsY0FBYztDQUNkLGVBQWU7Q0FDZixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckIsWUFBWTtDQUNaLGdCQUFnQjtDQUNoQixrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25CLGtCQUFrQjtDQUNsQixVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsV0FBVztDQUNYLFVBQVU7Q0FDVixXQUFXO0NBQ1gsU0FBUztDQUNULFFBQVE7Q0FDUixlQUFlO0NBQ2YsbUJBQW1CO0FBQ3BCOztBQUVBOzt1QkFFdUI7O0FBQ3ZCO0NBQ0MsK0NBQStDO0NBQy9DLDRCQUE0QjtDQUM1QixzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsaUJBQWlCO0NBQ2pCLG1CQUFtQjtDQUNuQiw4QkFBOEI7QUFDL0I7O0FBRUE7Q0FDQyxvQkFBb0I7Q0FDcEIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFdBQVc7Q0FDWCxXQUFXO0NBQ1gsWUFBWTtDQUNaLHlCQUF5QjtDQUN6QixtQkFBbUI7Q0FDbkIsbUJBQW1CO0NBQ25CLFNBQVM7Q0FDVCxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsZUFBZTtDQUNmLHlCQUF5QjtDQUN6QixjQUFjO0NBQ2QsZ0JBQWdCO0NBQ2hCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFFQTs7d0JBRXdCOztBQUN4QjtDQUNDLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixVQUFVO0NBQ1YsU0FBUztBQUNWOztBQUVBO0NBQ0MsV0FBVztDQUNYLFlBQVk7Q0FDWix5QkFBeUI7Q0FDekIsbUJBQW1CO0NBQ25CLG1CQUFtQjtDQUNuQixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsY0FBYztDQUNkLGNBQWM7Q0FDZCxnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTs7dUJBRXVCOztBQUN2QjtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2Ysa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsZUFBZTtDQUNmLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQixjQUFjO0NBQ2QsYUFBYTtDQUNiLGdCQUFnQjtDQUNoQixrQ0FBa0M7Q0FDbEMsc0JBQXNCO0NBQ3RCLGdCQUFnQjtDQUNoQixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsV0FBVztDQUNYLE9BQU87Q0FDUCxTQUFTO0NBQ1QsV0FBVztDQUNYLFNBQVM7Q0FDVCxnQkFBZ0I7Q0FDaEIsVUFBVTtDQUNWLFVBQVU7Q0FHViw0REFBNEQ7QUFDN0Q7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osWUFBWTtDQUNaLE1BQU07QUFDUDs7QUFFQTs7d0JBRXdCOztBQUN4QjtDQUNDLGNBQWM7Q0FDZCxXQUFXO0FBQ1o7O0FBRUE7Q0FDQyw2QkFBNkI7Q0FDN0Isa0JBQWtCO0NBQ2xCLFlBQVk7Q0FDWixXQUFXO0NBQ1gsWUFBWTtDQUNaLGdDQUFnQztDQUNoQyxtQkFBbUI7Q0FDbkIsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixhQUFhO0NBQ2IsV0FBVztDQUNYLFlBQVk7Q0FDWixnQ0FBZ0M7Q0FDaEMsbUJBQW1CO0NBQ25CLGVBQWU7Q0FDZiw2QkFBNkI7QUFDOUI7O0FBRUE7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBTUE7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBRkE7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBRUE7O3dCQUV3Qjs7QUFDeEI7Q0FDQyxtQkFBbUI7Q0FDbkIsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixlQUFlO0NBQ2YsY0FBYztDQUNkLG1CQUFtQjtBQUNwQjs7QUFFQTs7d0JBRXdCOztBQUN4QjtDQUNDLCtDQUErQztDQUMvQyw0QkFBNEI7Q0FDNUIsc0JBQXNCO0NBQ3RCLCtCQUErQjtDQUMvQix5QkFBeUI7QUFDMUI7O0FBRUE7Ozs7Ozs7O0NBUUMsNkJBQTZCO0FBQzlCOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBbUJDLHNCQUFzQjtBQUN2Qjs7QUFFQTs7Q0FFQyxnQkFBZ0I7QUFDakI7O0FBRUE7Ozs7OztDQU1DLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FFUyxxREFBcUQ7QUFDOUQ7O0FBRUE7Q0FDQyxtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxXQUFXO0FBQ1o7O0FBTUE7Q0FDQyxXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxXQUFXO0FBQ1o7O0FBRkE7Q0FDQyxXQUFXO0FBQ1o7O0FBRUE7O3dCQUV3Qjs7QUFDeEI7O0NBRUMsbUJBQW1CO0NBQ25CLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkIsa0JBQWtCO0FBQ25COztBQUVBOztDQUVDLG9CQUFvQjtBQUNyQjs7QUFFQTs7Q0FFQyxrQkFBa0I7Q0FDbEIsbUJBQW1CO0FBQ3BCOztBQUVBOztDQUVDLGVBQWU7QUFDaEI7O0FBRUE7O0NBRUMsYUFBYTtBQUNkOztBQUVBOztDQUVDLGlCQUFpQjtDQUNqQixlQUFlO0NBQ2YsY0FBYztBQUNmOztBQUVBOztDQUVDLGtCQUFrQjtDQUNsQix1QkFBdUI7Q0FDdkIsa0JBQWtCO0NBQ2xCLFdBQVc7Q0FDWCxVQUFVO0FBQ1g7O0FBRUE7O0NBRUMsb0JBQW9CO0FBQ3JCOztBQUVBOztDQUVDLGVBQWU7Q0FDZixtQkFBbUI7QUFDcEI7O0FBRUE7O0NBRUMsZUFBZTtBQUNoQjs7QUFFQTs7Q0FFQyxrQkFBa0I7Q0FDbEIsT0FBTztDQUNQLE1BQU07Q0FDTixpQkFBaUI7QUFDbEI7O0FBRUE7O0NBRUMscUJBQXFCO0NBQ3JCLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkIsWUFBWTtBQUNiOztBQUVBOztDQUVDLG1CQUFtQjtBQUNwQjs7QUFFQTs7Q0FFQyxnQkFBZ0I7QUFDakI7O0FBRUE7O0NBRUMsbUJBQW1CO0FBQ3BCOztBQUVBOztDQUVDLGtCQUFrQjtDQUNsQixvQkFBb0I7Q0FDcEIsa0JBQWtCO0FBQ25COztBQUVBOztDQUVDLGVBQWU7Q0FDZixrQkFBa0I7Q0FDbEIsY0FBYztBQUNmOztBQUVBOztDQUVDLGNBQWM7QUFDZjs7QUFFQTs7d0JBRXdCOztBQUN4Qjs7Q0FFQyxXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsMkhBQTJIO0NBQzNILG1CQUFtQjtDQUNuQixpQkFBaUI7Q0FDakIsYUFBYTtDQUViLDRCQUE0QjtDQUc1Qiw4RUFBOEU7Q0FDOUUscURBQXFEO0NBQ3JELG1IQUFtSDtDQUNuSCxVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsV0FBVztDQUNYLFdBQVc7Q0FDWCxhQUFhO0NBQ2IsTUFBTTtDQUNOLE9BQU87Q0FDUCxpREFBaUQ7Q0FDakQsNEJBQTRCO0NBQzVCLHNCQUFzQjtBQUN2Qjs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBa0JDLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLHFDQUFxQztBQUN0Qzs7QUFFQTs7Q0FFQyxnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxxQ0FBcUM7QUFDdEM7O0FBRUE7Q0FDQyw2QkFBNkI7Q0FDN0Isc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0MsWUFBWTtBQUNiOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFVBQVU7QUFDWDs7QUFFQTs7Q0FFQyxtQkFBbUI7QUFDcEI7O0FBRUE7O0NBRUMsY0FBYztBQUNmOztBQUVBOzt3QkFFd0I7O0FBQ3hCO0NBQ0Msa0JBQWtCO0NBQ2xCLHVCQUF1QjtDQUN2QixrQkFBa0I7Q0FDbEIsV0FBVztDQUNYLFVBQVU7QUFDWDs7QUFFQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCLG9CQUFvQjtBQUNyQjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixrQkFBa0I7Q0FDbEIsY0FBYztBQUNmOztBQUVBO0NBQ0MsY0FBYztBQUNmOztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGFBQWE7QUFDZDs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixlQUFlO0NBQ2YsY0FBYztBQUNmOztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixPQUFPO0NBQ1AsTUFBTTtDQUNOLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLHFCQUFxQjtDQUNyQixrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25CLFlBQVk7QUFDYjs7QUFFQTtDQUNDLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGNBQWM7QUFDZjs7QUFFQTs7d0JBRXdCOztBQUN4Qjs7Ozs7Q0FLQyxXQUFXO0FBQ1o7O0FBRUE7OztDQUdDLGNBQWM7QUFDZjs7QUFFQTs7OztDQUlDLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQix1QkFBdUI7Q0FDdkIsa0JBQWtCO0NBQ2xCLFdBQVc7Q0FDWCxVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxtQkFBbUI7Q0FDbkIsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsZUFBZTtDQUNmLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixrQkFBa0I7Q0FDbEIsb0JBQW9CO0FBQ3JCOztBQUVBO0NBQ0MsZUFBZTtDQUNmLGtCQUFrQjtDQUNsQixjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsYUFBYTtBQUNkOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLGVBQWU7Q0FDZixjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLE9BQU87Q0FDUCxNQUFNO0NBQ04saUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MscUJBQXFCO0NBQ3JCLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkIsWUFBWTtBQUNiOztBQUVBO0NBQ0MsY0FBYztBQUNmOztBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxXQUFXO0FBQ1o7O0FBR0E7OytCQUUrQjs7QUFDL0I7Q0FDQztFQUNDLGFBQWE7Q0FDZDtBQUNEOztBQUVBO0NBQ0M7RUFDQyxnQkFBZ0I7Q0FDakI7QUFDRDs7QUFFQTtDQUNDO0VBQ0Msa0JBQWtCO0VBQ2xCLG1CQUFtQjtDQUNwQjtDQUNBO0VBQ0Msa0JBQWtCO0VBQ2xCLG1CQUFtQjtDQUNwQjtBQUNEOztBQUVBO0NBQ0M7RUFDQyxrQkFBa0I7RUFDbEIsbUJBQW1CO0NBQ3BCO0NBQ0E7RUFDQyxjQUFjO0VBQ2QsZ0JBQWdCO0NBQ2pCO0NBQ0E7RUFDQyxnQkFBZ0I7Q0FDakI7Q0FDQTtFQUNDLGFBQWE7Q0FDZDtDQUNBO0VBQ0Msa0JBQWtCO0NBQ25CO0NBQ0E7RUFDQyxtQkFBbUI7RUFDbkIsa0JBQWtCO0NBQ25CO0NBQ0E7RUFDQyxtQkFBbUI7Q0FDcEI7QUFDRDs7QUFFQSwyQkFBMkI7O0FBQzNCO0NBQ0M7RUFDQyxVQUFVO0NBQ1g7Q0FDQTtFQUNDLGtCQUFrQjtDQUNuQjtDQUNBO0VBQ0MsbUJBQW1CO0VBQ25CLGtCQUFrQjtDQUNuQjtDQUNBO0VBQ0Msa0JBQWtCO0NBQ25CO0NBQ0E7RUFDQyxtQkFBbUI7Q0FDcEI7Q0FDQTtFQUNDLGFBQWE7Q0FDZDtDQUNBO0VBQ0MsbUJBQW1CO0NBQ3BCO0FBQ0Q7O0FBRUEsbUJBQW1COztBQUNuQjtDQUNDO0VBQ0MsVUFBVTtDQUNYO0NBQ0E7RUFDQyx3QkFBd0I7Q0FDekI7Q0FDQTtFQUNDLGtCQUFrQjtDQUNuQjtDQUNBO0VBQ0MsY0FBYztFQUNkLGtCQUFrQjtDQUNuQjtDQUNBO0VBQ0MsYUFBYTtDQUNkO0NBQ0E7RUFDQyxtQkFBbUI7Q0FDcEI7Q0FDQTtFQUNDLGtCQUFrQjtFQUNsQixtQkFBbUI7Q0FDcEI7Q0FDQTtFQUNDLGNBQWM7Q0FDZjtDQUNBOzs7Ozs7RUFNQyxtQkFBbUI7RUFDbkIsa0JBQWtCO0NBQ25CO0NBQ0E7O0VBRUMsZUFBZTtDQUNoQjtDQUNBO0VBQ0MsY0FBYztDQUNmO0NBQ0E7RUFDQyxtQkFBbUI7Q0FDcEI7Q0FDQTtFQUNDLGNBQWM7Q0FDZjtBQUNEOztBQUVBLHlCQUF5Qjs7QUFDekI7Q0FDQztFQUNDLGtCQUFrQjtFQUNsQixnQkFBZ0I7Q0FDakI7Q0FDQTtFQUNDLGVBQWU7Q0FDaEI7Q0FDQTtFQUNDLFVBQVU7Q0FDWDtDQUNBO0VBQ0Msd0JBQXdCO0NBQ3pCO0NBQ0E7RUFDQyxjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtDQUNsQjtDQUNBO0VBQ0MsZUFBZTtDQUNoQjtDQUNBO0VBQ0Msa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxTQUFTO0NBQ1Y7Q0FDQTtFQUNDLHFCQUFxQjtFQUNyQixrQkFBa0I7Q0FDbkI7Q0FDQTtFQUNDLG1CQUFtQjtDQUNwQjtDQUNBO0VBQ0MsbUJBQW1CO0NBQ3BCO0NBQ0E7RUFDQyxlQUFlO0NBQ2hCO0NBQ0E7RUFDQyxjQUFjO0VBQ2Qsa0JBQWtCO0NBQ25CO0NBQ0E7RUFDQyxrQkFBa0I7RUFDbEIsbUJBQW1CO0NBQ3BCO0NBQ0E7RUFDQyxjQUFjO0NBQ2Y7Q0FDQTs7Ozs7O0VBTUMsbUJBQW1CO0VBQ25CLGtCQUFrQjtDQUNuQjtDQUNBOztFQUVDLGVBQWU7Q0FDaEI7Q0FDQTtFQUNDLGNBQWM7Q0FDZjtBQUNEOztBQUVBLHlCQUF5Qjs7QUFDekI7Q0FDQztFQUNDLGVBQWU7Q0FDaEI7Q0FDQTtFQUNDLGVBQWU7Q0FDaEI7Q0FDQTtFQUNDLGNBQWM7Q0FDZjtDQUNBO0VBQ0Msa0JBQWtCO0NBQ25CO0NBQ0E7RUFDQyxlQUFlO0NBQ2hCO0NBQ0E7RUFDQyxtQkFBbUI7Q0FDcEI7Q0FDQTs7Ozs7O0VBTUMsbUJBQW1CO0VBQ25CLGtCQUFrQjtDQUNuQjtDQUNBO0VBQ0Msa0JBQWtCO0NBQ25CO0FBQ0QiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICBDaXZpYyAtIENWIFJlc3VtZVxyXG4gIFZlcnNpb246IDEuMFxyXG4gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFxyXG4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qIFRlbXBsYXRlIGRlZmF1bHQgQ1NTXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbmh0bWwsXHJcbmJvZHkge1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHRmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgICBib3JkZXItc3R5bGU6IGluc2V0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUU5MEZGO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbi1sYXN0OiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogXCJMdWNpZGEgU2FucyBVbmljb2RlXCI7XHJcbiAgICBmb250LXdlaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbn1cclxuXHJcbi5idXR0b246aG92ZXIge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgICBib3JkZXItc3R5bGU6IGluc2V0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODdDRUZBO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbi1sYXN0OiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogXCJMdWNpZGEgU2FucyBVbmljb2RlXCI7XHJcbiAgICBmb250LXdlaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbn1cclxuXHJcbmgxLFxyXG5oMixcclxuaDMsXHJcbmg0LFxyXG5oNSxcclxuaDYge1xyXG5cdGNvbG9yOiAjNDA0MjRhO1xyXG5cdG1hcmdpbjogMDtcclxuXHRmb250LXdlaWdodDogNjAwO1xyXG5cdGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuaDIge1xyXG5cdGZvbnQtc2l6ZTogNDhweDtcclxufVxyXG5cclxuaDMge1xyXG5cdGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxucCB7XHJcblx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdGNvbG9yOiAjODA4MTgxO1xyXG5cdGxpbmUtaGVpZ2h0OiAxLjg7XHJcbn1cclxuXHJcbmltZyB7XHJcblx0bWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5pbnB1dDpmb2N1cyxcclxuc2VsZWN0OmZvY3VzLFxyXG5idXR0b246Zm9jdXMsXHJcbnRleHRhcmVhOmZvY3VzIHtcclxuXHRvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG5cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0SGVscGVyIENTU1xyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi5zcGFkIHtcclxuXHRwYWRkaW5nLXRvcDogMTI1cHg7XHJcblx0cGFkZGluZy1ib3R0b206IDExMHB4O1xyXG59XHJcblxyXG4uc2VjdGlvbi10aXRsZSBoMiB7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRtYXJnaW4tYm90dG9tOiAxMTBweDtcclxuXHRwYWRkaW5nLWJvdHRvbTogMnB4O1xyXG5cdGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXRpdGxlIGgyOmFmdGVyIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0Y29udGVudDogJyc7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAycHg7XHJcblx0bGVmdDogMDtcclxuXHRib3R0b206IDA7XHJcblx0YmFja2dyb3VuZDogIzQwNDI0YTtcclxufVxyXG5cclxuLnNldC1iZyB7XHJcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIENvbW1vbiBFbGVtZW50c1xyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4vKiBQcmVsb2RlciAqL1xyXG4jcHJlbG9kZXIge1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0dG9wOiAwO1xyXG5cdGxlZnQ6IDA7XHJcblx0ei1pbmRleDogOTk5OTk5O1xyXG5cdGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcbi5sb2FkZXIge1xyXG5cdHdpZHRoOiAzMHB4O1xyXG5cdGhlaWdodDogMzBweDtcclxuXHRib3JkZXI6IDNweCBzb2xpZCAjMDAwO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDUwJTtcclxuXHRsZWZ0OiA1MCU7XHJcblx0bWFyZ2luLXRvcDogLTEzcHg7XHJcblx0bWFyZ2luLWxlZnQ6IC0xM3B4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDYwcHg7XHJcblx0Ym9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdGFuaW1hdGlvbjogbG9hZGVyIDAuOHMgbGluZWFyIGluZmluaXRlO1xyXG5cdC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkZXIgMC44cyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbG9hZGVyIHtcclxuXHQwJSB7XHJcblx0XHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG5cdFx0ICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuXHR9XHJcblx0NTAlIHtcclxuXHRcdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuXHRcdCAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuXHR9XHJcblx0MTAwJSB7XHJcblx0XHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcblx0XHQgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcblx0fVxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgbG9hZGVyIHtcclxuXHQwJSB7XHJcblx0XHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG5cdH1cclxuXHQ1MCUge1xyXG5cdFx0LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG5cdH1cclxuXHQxMDAlIHtcclxuXHRcdC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuXHR9XHJcbn1cclxuXHJcbi8qIFNpdGUgQnV0dG9ucyAqL1xyXG4uc2l0ZS1idG4ge1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdGZvbnQtc2l6ZTogMTJweDtcclxuXHRtaW4td2lkdGg6IDIxM3B4O1xyXG5cdG1pbi1oZWlnaHQ6IDIwcHg7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHBhZGRpbmc6IDIwcHggMTBweCAxNXB4O1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdG1hcmdpbi1yaWdodDogMTBweDtcclxuXHRib3JkZXI6IDJweCBzb2xpZCAjNDA0MjRhO1xyXG5cdGNvbG9yOiAjNDA0MjRhO1xyXG5cdGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5zaXRlLWJ0bjpob3ZlciB7XHJcblx0Y29sb3I6ICM0MDQyNGE7XHJcbn1cclxuXHJcbi5jaXJjbGUtcHJvZ3Jlc3Mge1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRwYWRkaW5nLXRvcDogMzBweDtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5jaXJjbGUtcHJvZ3Jlc3MgLnByb2ctY2lyY2xlIHtcclxuXHRtYXJnaW4tYm90dG9tOiAtMTU1cHg7XHJcbn1cclxuXHJcbi5jaXJjbGUtcHJvZ3Jlc3MgY2FudmFzIHtcclxuXHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuXHQtbXMtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG5cdHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxufVxyXG5cclxuLmNpcmNsZS1wcm9ncmVzcyAucHJvZ3Jlc3MtaW5mbyB7XHJcblx0YmFja2dyb3VuZDogI2YyZjdmODtcclxuXHR3aWR0aDogMTI3cHg7XHJcblx0aGVpZ2h0OiAxMjdweDtcclxuXHRib3JkZXItcmFkaXVzOiAxNTBweDtcclxuXHRtYXJnaW46IDAgYXV0bztcclxuXHRwYWRkaW5nLXRvcDogNDVweDtcclxufVxyXG5cclxuLmNpcmNsZS1wcm9ncmVzcyAucHJvZ3Jlc3MtaW5mbyBoMiB7XHJcblx0Zm9udC1zaXplOiAzNnB4O1xyXG5cdGNvbG9yOiAjNDA0MjRhICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jaXJjbGUtcHJvZ3Jlc3MgLnByb2ctdGl0bGUge1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRtYXJnaW4tdG9wOiA1NXB4O1xyXG59XHJcblxyXG4uY2lyY2xlLXByb2dyZXNzIC5wcm9nLXRpdGxlIGgzIHtcclxuXHRmb250LXNpemU6IDE2cHg7XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLmNpcmNsZS1wcm9ncmVzcyAucHJvZy10aXRsZSBwIHtcclxuXHRmb250LXNpemU6IDE1cHg7XHJcblx0Y29sb3I6ICM4MDgxODEgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogSW1hZ2UgUG9wdXAgKi9cclxuLmltZy1wb3B1cC13YXJwIC5tZnAtY29udGVudCxcclxuLmltZy1wb3B1cC13YXJwLm1mcC1yZWFkeS5tZnAtcmVtb3ZpbmcgLm1mcC1jb250ZW50IHtcclxuXHRvcGFjaXR5OiAwO1xyXG5cdC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xyXG5cdC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuOCk7XHJcblx0dHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcblx0LW8tdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcblx0dHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbn1cclxuXHJcbi5pbWctcG9wdXAtd2FycC5tZnAtcmVhZHkgLm1mcC1jb250ZW50IHtcclxuXHRvcGFjaXR5OiAxO1xyXG5cdC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuXHQtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuXHR0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG59XHJcblxyXG4vKiBGYWN0IGJveCAqL1xyXG4uZmFjdC1ib3gge1xyXG5cdGhlaWdodDogMzc1cHg7XHJcblx0ZGlzcGxheTogdGFibGU7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0YmFja2dyb3VuZDogIzQwNDI0YTtcclxufVxyXG5cclxuLmZhY3QtYm94LnRyYW5zIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmZhY3QtYm94IC5mYWN0LWNvbnRlbnQge1xyXG5cdGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcblx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mYWN0LWJveCAuZmFjdC1jb250ZW50IGltZyB7XHJcblx0d2lkdGg6IDYwcHg7XHJcblx0bWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLmZhY3QtYm94IC5mYWN0LWNvbnRlbnQgaDIge1xyXG5cdGZvbnQtc2l6ZTogMzZweDtcclxuXHRjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmZhY3QtYm94IC5mYWN0LWNvbnRlbnQgcCB7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0bWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLyogUG9yZ2VzcyBiYXIgKi9cclxuLnNpbmdsZS1wcm9ncmVzcy1pdGVtIHtcclxuXHRtYXJnaW4tYm90dG9tOiAzNXB4O1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnNpbmdsZS1wcm9ncmVzcy1pdGVtIHAge1xyXG5cdGNvbG9yOiAjNDA0MjRhO1xyXG5cdG1hcmdpbi1ib3R0b206IDA7XHJcblx0Zm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLnByb2dyZXNzLWJhci1zdHlsZSB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0aGVpZ2h0OiAycHg7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5iYXItaW5uZXIge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0bGVmdDogMDtcclxuXHR0b3A6IDA7XHJcblx0YmFja2dyb3VuZDogIzQwNDI0YTtcclxufVxyXG5cclxuLmJhci1pbm5lciBzcGFuIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0cmlnaHQ6IDA7XHJcblx0Ym90dG9tOiAtMzBweDtcclxuXHRjb2xvcjogIzQwNDI0YTtcclxuXHRmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4vKiBQcm9ncmVzcyBkb3RzICovXHJcbi5sYW5ndWFnZS1wcm9ncmVzcyB7XHJcblx0bWF4LXdpZHRoOiAyODBweDtcclxuXHRsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4ubGFuZ3VhZ2UtcHJvZ3Jlc3MgbGkge1xyXG5cdGZvbnQtc2l6ZTogMjRweDtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0cGFkZGluZy1yaWdodDogMTUwcHg7XHJcblx0bWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLmxhbmd1YWdlLXByb2dyZXNzIC5sYW4tcHJvZyB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHJpZ2h0OiAwO1xyXG5cdHRvcDogMDtcclxufVxyXG5cclxuLmxhbmd1YWdlLXByb2dyZXNzIC5sYW4tcHJvZyBzcGFuIHtcclxuXHR3aWR0aDogMTJweDtcclxuXHRoZWlnaHQ6IDEycHg7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdG1hcmdpbi1yaWdodDogMThweDtcclxuXHRib3JkZXItcmFkaXVzOiAxMnB4O1xyXG5cdGJhY2tncm91bmQ6ICM0MDQyNGE7XHJcbn1cclxuXHJcbi5sYW5ndWFnZS1wcm9ncmVzcyAubGFuLXByb2cgc3Bhbi5mYWRlLWVsZSB7XHJcblx0YmFja2dyb3VuZDogI2NhY2FjYTtcclxufVxyXG5cclxuLyogSWNvbiBCb3ggKi9cclxuLmljb24tYm94IHtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdG1hcmdpbi1yaWdodDogNjBweDtcclxufVxyXG5cclxuLmljb24tYm94Omxhc3QtY2hpbGQge1xyXG5cdG1hcmdpbi1yaWdodDogMDtcclxufVxyXG5cclxuLmljb24tYm94IGkge1xyXG5cdGZvbnQtc2l6ZTogNjBweDtcclxufVxyXG5cclxuLmljb24tYm94IHAge1xyXG5cdGNvbG9yOiAjNDA0MjRhO1xyXG59XHJcblxyXG4uc29jaWFsLWxpbmtzIGEge1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcblx0LW8tdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcblx0dHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0SGVhZGVyIHNlY3Rpb25cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4uaGVhZGVyLXNlY3Rpb24ge1xyXG5cdHBhZGRpbmc6IDUwcHggNDBweDtcclxuXHRiYWNrZ3JvdW5kOiAjZjJmN2Y4O1xyXG59XHJcblxyXG4uc2l0ZS1sb2dvIGgyIHtcclxuXHRmb250LXNpemU6IDM2cHg7XHJcbn1cclxuXHJcbi5zaXRlLWxvZ28gaDIgYSB7XHJcblx0Y29sb3I6ICM0MDQyNGE7XHJcbn1cclxuXHJcbi5zaXRlLWxvZ28gcCB7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5oZWFkZXItYnV0dG9ucyBhIHtcclxuXHRtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdEhlcm8gc2VjdGlvblxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi5oZXJvLXNlY3Rpb24ge1xyXG5cdGJhY2tncm91bmQ6ICNmMmY3Zjg7XHJcbn1cclxuXHJcbi5oZXJvLXRleHQge1xyXG5cdG1hcmdpbi1ib3R0b206IDgwcHg7XHJcbn1cclxuXHJcbi5oZXJvLXRleHQgaDIge1xyXG5cdGZvbnQtc2l6ZTogMTcwcHg7XHJcblx0bGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uaGVyby10ZXh0IHAge1xyXG5cdGZvbnQtc2l6ZTogMzNweDtcclxuXHRsaW5lLWhlaWdodDogMS4zO1xyXG59XHJcblxyXG4uaGVyby1pbWFnZSB7XHJcblx0cGFkZGluZy10b3A6IDcwcHg7XHJcbn1cclxuXHJcbi5oZXJvLWluZm8gaDIge1xyXG5cdG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5oZXJvLWluZm8gdWwge1xyXG5cdGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi5oZXJvLWluZm8gdWwgbGkge1xyXG5cdGZvbnQtc2l6ZTogMjRweDtcclxuXHRjb2xvcjogIzgwODE4MTtcclxuXHRtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4uaGVyby1pbmZvIHVsIGxpIHNwYW4ge1xyXG5cdGNvbG9yOiAjNDA0MjRhO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRtaW4td2lkdGg6IDIyMHB4O1xyXG59XHJcblxyXG4uaGVyby1pbmZvIHVsIGxpOmxhc3QtY2hpbGQge1xyXG5cdG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0U29jaWFsIHNlY3Rpb25cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4uc29jaWFsLXNlY3Rpb24ge1xyXG5cdGJhY2tncm91bmQ6ICNmOWY5Zjk7XHJcblx0cGFkZGluZzogODBweCAwO1xyXG59XHJcblxyXG4uc29jaWFsLXNlY3Rpb24gLnNvY2lhbC1saW5rcyB7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdGJhY2tncm91bmQ6ICNmOWY5Zjk7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHotaW5kZXg6IDU7XHJcbn1cclxuXHJcbi5zb2NpYWwtc2VjdGlvbiAuc29jaWFsLWxpbmtzIGEge1xyXG5cdGNvbG9yOiAjNDg0ODQ4O1xyXG5cdGZvbnQtc2l6ZTogMzZweDtcclxuXHRtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbi5zb2NpYWwtc2VjdGlvbiAuc29jaWFsLWxpbmstd2FycCB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uc29jaWFsLXNlY3Rpb24gLnNvY2lhbC1saW5rLXdhcnAgaDIge1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRmbG9hdDogcmlnaHQ7XHJcblx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcblx0YmFja2dyb3VuZDogI2Y5ZjlmOTtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0ei1pbmRleDogNTtcclxufVxyXG5cclxuLnNvY2lhbC1zZWN0aW9uIC5zb2NpYWwtbGluay13YXJwOmFmdGVyIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0Y29udGVudDogJyc7XHJcblx0d2lkdGg6IDUwJTtcclxuXHRoZWlnaHQ6IDJweDtcclxuXHRsZWZ0OiAyMyU7XHJcblx0dG9wOiA1MCU7XHJcblx0bWFyZ2luLXRvcDogMXB4O1xyXG5cdGJhY2tncm91bmQ6ICNjYmNiY2I7XHJcbn1cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0UmVzdW1lIHNlY3Rpb25cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi5yZXN1bWUtc2VjdGlvbi53aXRoLWJnIHtcclxuXHQvKmJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWcvcmVzdW1lLWJnLmpwZyk7Ki9cclxuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5yZXN1bWUtbGlzdCB7XHJcblx0bGlzdC1zdHlsZTogbm9uZTtcclxuXHRtYXJnaW4tbGVmdDogNjBweDtcclxuXHRwYWRkaW5nLWxlZnQ6IDExMHB4O1xyXG5cdGJvcmRlci1sZWZ0OiAycHggc29saWQgIzQwNDI0YTtcclxufVxyXG5cclxuLnJlc3VtZS1saXN0IGxpIHtcclxuXHRtYXJnaW4tYm90dG9tOiAxMjBweDtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5yZXN1bWUtbGlzdCBsaTpsYXN0LWNoaWxkIHtcclxuXHRtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4ucmVzdW1lLWxpc3QgbGk6YWZ0ZXIge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRjb250ZW50OiAnJztcclxuXHR3aWR0aDogMTVweDtcclxuXHRoZWlnaHQ6IDE1cHg7XHJcblx0Ym9yZGVyOiAycHggc29saWQgIzQwNDI0YTtcclxuXHRib3JkZXItcmFkaXVzOiA1MHB4O1xyXG5cdGJhY2tncm91bmQ6ICNjYWNhY2E7XHJcblx0dG9wOiAzMHB4O1xyXG5cdGxlZnQ6IC0xMThweDtcclxufVxyXG5cclxuLnJlc3VtZS1saXN0IGgyIHtcclxuXHRmb250LXNpemU6IDcycHg7XHJcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnJlc3VtZS1saXN0IGg0IHtcclxuXHRmb250LXNpemU6IDE2cHg7XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHRjb2xvcjogIzgwODE4MTtcclxuXHRtYXJnaW4tdG9wOiAxMHB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDQ1cHg7XHJcbn1cclxuXHJcbi5yZXN1bWUtbGlzdCBwIHtcclxuXHRtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFJldmlldyBzZWN0aW9uXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLnJldmlldy1zbGlkZXIge1xyXG5cdHBhZGRpbmctbGVmdDogMTUwcHg7XHJcbn1cclxuXHJcbi5yZXZpZXctc2xpZGVyIC5vd2wtZG90cyB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGxlZnQ6IDUwcHg7XHJcblx0dG9wOiA3MHB4O1xyXG59XHJcblxyXG4ucmV2aWV3LXNsaWRlciAub3dsLWRvdHMgLm93bC1kb3Qge1xyXG5cdHdpZHRoOiAxMnB4O1xyXG5cdGhlaWdodDogMTJweDtcclxuXHRib3JkZXI6IDJweCBzb2xpZCAjNDA0MjRhO1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcblx0YmFja2dyb3VuZDogI2NhY2FjYTtcclxuXHRtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4ucmV2aWV3LXNsaWRlciAub3dsLWRvdHMgLm93bC1kb3QuYWN0aXZlIHtcclxuXHRiYWNrZ3JvdW5kOiAjNDA0MjRhO1xyXG59XHJcblxyXG4uc2luZ2xlLXJldmlldyAucXV0IHtcclxuXHRmb250LXNpemU6IDEyMHB4O1xyXG5cdGxpbmUtaGVpZ2h0OiAwO1xyXG5cdGNvbG9yOiAjNTA1MjU5O1xyXG5cdG1hcmdpbi10b3A6IDYwcHg7XHJcbn1cclxuXHJcbi5zaW5nbGUtcmV2aWV3IHAge1xyXG5cdG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbn1cclxuXHJcbi5zaW5nbGUtcmV2aWV3IGgzIHtcclxuXHRmb250LXNpemU6IDI0cHg7XHJcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnNpbmdsZS1yZXZpZXcgaDQge1xyXG5cdGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRQb3J0Zm9saW8gc2VjdGlvblxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLnBvcnRmb2xpby13YXJwIHtcclxuXHRwYWRkaW5nOiAwIDYwcHg7XHJcbn1cclxuXHJcbi5wb3J0Zm9saW8taXRlbSBoMiB7XHJcblx0Zm9udC1zaXplOiAyNHB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLnBvcnRmb2xpby1pdGVtIHAge1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4ucG9ydGZvbGlvLWl0ZW0gLnBvcnQtcGljIHtcclxuXHRtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdGhlaWdodDogNDgwcHg7XHJcblx0YmFja2dyb3VuZDogIzMzMztcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5wb3J0Zm9saW8taXRlbSAucG9ydC1waWM6YWZ0ZXIge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRjb250ZW50OiAnJztcclxuXHRsZWZ0OiAwO1xyXG5cdGJvdHRvbTogMDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDA7XHJcblx0YmFja2dyb3VuZDogIzAwMDtcclxuXHRvcGFjaXR5OiAwO1xyXG5cdHotaW5kZXg6IDI7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBjdWJpYy1iZXppZXIoMC41NSwgMC4wOSwgMC42OCwgMC41MykgMHM7XHJcblx0LW8tdHJhbnNpdGlvbjogYWxsIDAuNHMgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDksIDAuNjgsIDAuNTMpIDBzO1xyXG5cdHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllcigwLjU1LCAwLjA5LCAwLjY4LCAwLjUzKSAwcztcclxufVxyXG5cclxuLnBvcnRmb2xpby1pdGVtOmhvdmVyIC5wb3J0LXBpYzphZnRlciB7XHJcblx0b3BhY2l0eTogMC44O1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHR0b3A6IDA7XHJcbn1cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0Q29udGFjdCBzZWN0aW9uXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLmNvbnRhY3QtZm9ybSB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jb250YWN0LWZvcm0gaW5wdXQge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdHBhZGRpbmctbGVmdDogMjVweDtcclxuXHRoZWlnaHQ6IDYwcHg7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjY2FjYWNhO1xyXG5cdG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblx0Zm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG4uY29udGFjdC1mb3JtIHRleHRhcmVhIHtcclxuXHRwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcblx0aGVpZ2h0OiAyMDBweDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjYWNhY2E7XHJcblx0bWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHRmb250LXNpemU6IDEzcHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5jb250YWN0LWZvcm0gOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuXHRmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcbi5jb250YWN0LWZvcm0gOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcblx0Zm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG4uY29udGFjdC1mb3JtIDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuXHRmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcbi5jb250YWN0LWZvcm0gOjpwbGFjZWhvbGRlciB7XHJcblx0Zm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdEZvb3RlciBzZWN0aW9uXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuLmZvb3Rlci1zZWN0aW9uIHtcclxuXHRiYWNrZ3JvdW5kOiAjNDA0MjRhO1xyXG5cdHBhZGRpbmc6IDIwcHggMDtcclxufVxyXG5cclxuLmNvcHlyaWdodCB7XHJcblx0cGFkZGluZy10b3A6IDVweDtcclxuXHRmb250LXNpemU6IDEycHg7XHJcblx0Y29sb3I6ICM4Mzg0ODg7XHJcblx0bGluZS1oZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRIb21lIDIgU3R5bGVcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4uaG9tZS10d28tc3R5bGUge1xyXG5cdC8qYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltZy9ob21lLTItYmcucG5nKTsqL1xyXG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgY2VudGVyO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMwMDlmZmY7XHJcbn1cclxuXHJcbi5ob21lLXR3by1zdHlsZSAuaGVhZGVyLXNlY3Rpb24sXHJcbi5ob21lLXR3by1zdHlsZSAuaGVyby1zZWN0aW9uLFxyXG4uaG9tZS10d28tc3R5bGUgLnNvY2lhbC1zZWN0aW9uLFxyXG4uaG9tZS10d28tc3R5bGUgLnJldmlldy1zbGlkZXIgLm93bC1kb3RzIC5vd2wtZG90LFxyXG4uaG9tZS10d28tc3R5bGUgLnNpdGUtYnRuLFxyXG4uaG9tZS10d28tc3R5bGUgLmZhY3QtYm94LFxyXG4uaG9tZS10d28tc3R5bGUgLnNvY2lhbC1saW5rcyxcclxuLmhvbWUtdHdvLXN0eWxlIC5zb2NpYWwtc2VjdGlvbiAuc29jaWFsLWxpbmstd2FycCBoMiB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5ob21lLXR3by1zdHlsZSBoMSxcclxuLmhvbWUtdHdvLXN0eWxlIGgyLFxyXG4uaG9tZS10d28tc3R5bGUgaDMsXHJcbi5ob21lLXR3by1zdHlsZSBoNCxcclxuLmhvbWUtdHdvLXN0eWxlIGg1LFxyXG4uaG9tZS10d28tc3R5bGUgaDYsXHJcbi5ob21lLXR3by1zdHlsZSBwLFxyXG4uaG9tZS10d28tc3R5bGUgLnNpdGUtbG9nbyBoMiBhLFxyXG4uaG9tZS10d28tc3R5bGUgLnNpdGUtbG9nbyBwLFxyXG4uaG9tZS10d28tc3R5bGUgLmhlcm8taW5mbyB1bCBsaSxcclxuLmhvbWUtdHdvLXN0eWxlIC5oZXJvLWluZm8gdWwgbGkgc3BhbixcclxuLmhvbWUtdHdvLXN0eWxlIC5zaW5nbGUtcmV2aWV3IC5xdXQsXHJcbi5ob21lLXR3by1zdHlsZSAuc2l0ZS1idG4sXHJcbi5ob21lLXR3by1zdHlsZSAuc29jaWFsLXNlY3Rpb24gLnNvY2lhbC1saW5rcyBhLFxyXG4uaG9tZS10d28tc3R5bGUgLmNvbnRhY3QtZm9ybSBpbnB1dCxcclxuLmhvbWUtdHdvLXN0eWxlIC5jb250YWN0LWZvcm0gdGV4dGFyZWEsXHJcbi5ob21lLXR3by1zdHlsZSAuY2lyY2xlLXByb2dyZXNzIC5wcm9nLXRpdGxlIHAsXHJcbi5ob21lLXR3by1zdHlsZSAuY2lyY2xlLXByb2dyZXNzIC5wcm9nLXRpdGxlIGgzLFxyXG4uaG9tZS10d28tc3R5bGUgLmNpcmNsZS1wcm9ncmVzcyAucHJvZ3Jlc3MtaW5mbyBoMiB7XHJcblx0Y29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmhvbWUtdHdvLXN0eWxlIC5zZWN0aW9uLXRpdGxlIGgyOmFmdGVyLFxyXG4uaG9tZS10d28tc3R5bGUgLnJldmlldy1zbGlkZXIgLm93bC1kb3RzIC5vd2wtZG90LmFjdGl2ZSB7XHJcblx0YmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuLmhvbWUtdHdvLXN0eWxlIC5yZXN1bWUtbGlzdCxcclxuLmhvbWUtdHdvLXN0eWxlIC5yZXN1bWUtbGlzdCBsaTphZnRlcixcclxuLmhvbWUtdHdvLXN0eWxlIC5yZXZpZXctc2xpZGVyIC5vd2wtZG90cyAub3dsLWRvdCxcclxuLmhvbWUtdHdvLXN0eWxlIC5zaXRlLWJ0bixcclxuLmhvbWUtdHdvLXN0eWxlIC5jb250YWN0LWZvcm0gaW5wdXQsXHJcbi5ob21lLXR3by1zdHlsZSAuY29udGFjdC1mb3JtIHRleHRhcmVhIHtcclxuXHRib3JkZXItY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5ob21lLXR3by1zdHlsZSAuaGVyby1pbWFnZSB7XHJcblx0cGFkZGluZy1sZWZ0OiAwcHg7XHJcblx0cGFkZGluZy10b3A6IDIwMHB4O1xyXG59XHJcblxyXG4uaG9tZS10d28tc3R5bGUgLmhlcm8taW1hZ2UgaW1nIHtcclxuXHQtd2Via2l0LWJveC1zaGFkb3c6IDZweCAyMHB4IDUwcHggcmdiYSgwLCAwLCAwLCAwLjUyOTQxMTc2NDcpO1xyXG5cdCAgICAgICAgYm94LXNoYWRvdzogNnB4IDIwcHggNTBweCByZ2JhKDAsIDAsIDAsIDAuNTI5NDExNzY0Nyk7XHJcbn1cclxuXHJcbi5ob21lLXR3by1zdHlsZSAucmVzdW1lLWxpc3QgbGk6YWZ0ZXIge1xyXG5cdGJhY2tncm91bmQ6ICMwMDlmZmY7XHJcbn1cclxuXHJcbi5ob21lLXR3by1zdHlsZSAuY2lyY2xlLXByb2dyZXNzIC5wcm9ncmVzcy1pbmZvIHtcclxuXHRiYWNrZ3JvdW5kOiAjNTBiY2ZkO1xyXG59XHJcblxyXG4uaG9tZS10d28tc3R5bGUgLmZhY3QtYm94IHtcclxuXHRib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG59XHJcblxyXG4uaG9tZS10d28tc3R5bGUgLmZhY3QtYm94LnRyYW5zIHtcclxuXHRib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5ob21lLXR3by1zdHlsZSAuZm9vdGVyLXNlY3Rpb24ge1xyXG5cdGJhY2tncm91bmQ6ICMzYTRkYjQ7XHJcbn1cclxuXHJcbi5ob21lLXR3by1zdHlsZSAuY29udGFjdC1mb3JtIDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcblx0Y29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5ob21lLXR3by1zdHlsZSAuY29udGFjdC1mb3JtIDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG5cdGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uaG9tZS10d28tc3R5bGUgLmNvbnRhY3QtZm9ybSA6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcblx0Y29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5ob21lLXR3by1zdHlsZSAuY29udGFjdC1mb3JtIDo6cGxhY2Vob2xkZXIge1xyXG5cdGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdEhvbWUgMyBTdHlsZVxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi5ob21lLXRocmVlLXN0eWxlIC5tYWluLWxlZnQtYXJlYSxcclxuLmhvbWUtZm91ci1zdHlsZSAubWFpbi1sZWZ0LWFyZWEge1xyXG5cdGJhY2tncm91bmQ6ICNmMmY3Zjg7XHJcblx0cGFkZGluZy10b3A6IDIwMHB4O1xyXG5cdHBhZGRpbmctcmlnaHQ6IDgwcHg7XHJcblx0cGFkZGluZy1sZWZ0OiA4MHB4O1xyXG59XHJcblxyXG4uaG9tZS10aHJlZS1zdHlsZSAubWFpbi1sZWZ0LWFyZWEgLnNlY3Rpb24tdGl0bGUgaDIsXHJcbi5ob21lLWZvdXItc3R5bGUgLm1haW4tbGVmdC1hcmVhIC5zZWN0aW9uLXRpdGxlIGgyIHtcclxuXHRtYXJnaW4tYm90dG9tOiAxMzBweDtcclxufVxyXG5cclxuLmhvbWUtdGhyZWUtc3R5bGUgLm1haW4tcmlnaHQtYXJlYSxcclxuLmhvbWUtZm91ci1zdHlsZSAubWFpbi1yaWdodC1hcmVhIHtcclxuXHRwYWRkaW5nLXRvcDogMjAwcHg7XHJcblx0cGFkZGluZy1sZWZ0OiAxMTBweDtcclxufVxyXG5cclxuLmhvbWUtdGhyZWUtc3R5bGUgLnJlc3VtZS1saXN0IGxpLFxyXG4uaG9tZS1mb3VyLXN0eWxlIC5yZXN1bWUtbGlzdCBsaSB7XHJcblx0cGFkZGluZy1sZWZ0OiAwO1xyXG59XHJcblxyXG4uaG9tZS10aHJlZS1zdHlsZSAucmVzdW1lLWxpc3QgbGk6YWZ0ZXIsXHJcbi5ob21lLWZvdXItc3R5bGUgLnJlc3VtZS1saXN0IGxpOmFmdGVyIHtcclxuXHRkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uaG9tZS10aHJlZS1zdHlsZSAucmVzdW1lLWxpc3QsXHJcbi5ob21lLWZvdXItc3R5bGUgLnJlc3VtZS1saXN0IHtcclxuXHRib3JkZXItbGVmdDogbm9uZTtcclxuXHRwYWRkaW5nLWxlZnQ6IDA7XHJcblx0bWFyZ2luLWxlZnQ6IDA7XHJcbn1cclxuXHJcbi5ob21lLXRocmVlLXN0eWxlIC5oZWFkZXItc2VjdGlvbixcclxuLmhvbWUtZm91ci1zdHlsZSAuaGVhZGVyLXNlY3Rpb24ge1xyXG5cdHBhZGRpbmc6IDUwcHggODBweDtcclxuXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0ei1pbmRleDogMTtcclxufVxyXG5cclxuLmhvbWUtdGhyZWUtc3R5bGUgLmhlcm8taW1hZ2UsXHJcbi5ob21lLWZvdXItc3R5bGUgLmhlcm8taW1hZ2Uge1xyXG5cdG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG59XHJcblxyXG4uaG9tZS10aHJlZS1zdHlsZSAuaGVyby10ZXh0IGgyLFxyXG4uaG9tZS1mb3VyLXN0eWxlIC5oZXJvLXRleHQgaDIge1xyXG5cdGZvbnQtc2l6ZTogNzJweDtcclxuXHRtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG59XHJcblxyXG4uaG9tZS10aHJlZS1zdHlsZSAucmV2aWV3LXNsaWRlcixcclxuLmhvbWUtZm91ci1zdHlsZSAucmV2aWV3LXNsaWRlciB7XHJcblx0cGFkZGluZy1sZWZ0OiAwO1xyXG59XHJcblxyXG4uaG9tZS10aHJlZS1zdHlsZSAucmV2aWV3LXNsaWRlciAub3dsLWRvdHMsXHJcbi5ob21lLWZvdXItc3R5bGUgLnJldmlldy1zbGlkZXIgLm93bC1kb3RzIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0bGVmdDogMDtcclxuXHR0b3A6IDA7XHJcblx0cGFkZGluZy10b3A6IDUwcHg7XHJcbn1cclxuXHJcbi5ob21lLXRocmVlLXN0eWxlIC5yZXZpZXctc2xpZGVyIC5vd2wtZG90cyAub3dsLWRvdCxcclxuLmhvbWUtZm91ci1zdHlsZSAucmV2aWV3LXNsaWRlciAub3dsLWRvdHMgLm93bC1kb3Qge1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcblx0YmFja2dyb3VuZDogI2NhY2FjYTtcclxuXHRib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5ob21lLXRocmVlLXN0eWxlIC5yZXZpZXctc2xpZGVyIC5vd2wtZG90cyAub3dsLWRvdC5hY3RpdmUsXHJcbi5ob21lLWZvdXItc3R5bGUgLnJldmlldy1zbGlkZXIgLm93bC1kb3RzIC5vd2wtZG90LmFjdGl2ZSB7XHJcblx0YmFja2dyb3VuZDogIzQwNDI0YTtcclxufVxyXG5cclxuLmhvbWUtdGhyZWUtc3R5bGUgLnNraWxscyxcclxuLmhvbWUtZm91ci1zdHlsZSAuc2tpbGxzIHtcclxuXHRtYXgtd2lkdGg6IDU1NXB4O1xyXG59XHJcblxyXG4uaG9tZS10aHJlZS1zdHlsZSAuZmFjdC1ib3gudHJhbnMsXHJcbi5ob21lLWZvdXItc3R5bGUgLmZhY3QtYm94LnRyYW5zIHtcclxuXHRtYXJnaW4tYm90dG9tOiA4MHB4O1xyXG59XHJcblxyXG4uaG9tZS10aHJlZS1zdHlsZSAuc29jaWFsLWxpbmtzLFxyXG4uaG9tZS1mb3VyLXN0eWxlIC5zb2NpYWwtbGlua3Mge1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRwYWRkaW5nLWJvdHRvbTogNzBweDtcclxuXHRwYWRkaW5nLXRvcDogMTIwcHg7XHJcbn1cclxuXHJcbi5ob21lLXRocmVlLXN0eWxlIC5zb2NpYWwtbGlua3MgYSxcclxuLmhvbWUtZm91ci1zdHlsZSAuc29jaWFsLWxpbmtzIGEge1xyXG5cdGZvbnQtc2l6ZTogMzBweDtcclxuXHRtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcblx0Y29sb3I6ICNiOWI5Yjk7XHJcbn1cclxuXHJcbi5ob21lLXRocmVlLXN0eWxlIC5zb2NpYWwtbGlua3MgYTpob3ZlcixcclxuLmhvbWUtZm91ci1zdHlsZSAuc29jaWFsLWxpbmtzIGE6aG92ZXIge1xyXG5cdGNvbG9yOiAjNDg0ODQ4O1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdEhvbWUgNCBTdHlsZVxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi5ob21lLWZvdXItc3R5bGUgLnNpdGUtbG9nbyBoMiBhLFxyXG4uaG9tZS1mb3VyLXN0eWxlIC5zaXRlLWxvZ28gcCB7XHJcblx0Y29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5ob21lLWZvdXItc3R5bGUgLm1haW4tbGVmdC1hcmVhIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0LyogUGVybWFsaW5rIC0gdXNlIHRvIGVkaXQgYW5kIHNoYXJlIHRoaXMgZ3JhZGllbnQ6IGh0dHA6Ly9jb2xvcnppbGxhLmNvbS9ncmFkaWVudC1lZGl0b3IvIzQ4MTM0MCswLGZmMGYzYysxMDAsZmYwZjNjKzEwMCAqL1xyXG5cdGJhY2tncm91bmQ6ICM0ODEzNDA7XHJcblx0LyogT2xkIGJyb3dzZXJzICovXHJcblx0LyogRkYzLjYtMTUgKi9cclxuXHRiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICM0ODEzNDAgMCUsICNmZjBmM2MgMTAwJSwgI2ZmMGYzYyAxMDAlKTtcclxuXHQvKiBDaHJvbWUxMC0yNSxTYWZhcmk1LjEtNiAqL1xyXG5cdGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20oIzQ4MTM0MCksIGNvbG9yLXN0b3AoMTAwJSwgI2ZmMGYzYyksIHRvKCNmZjBmM2MpKTtcclxuXHRiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQodG9wLCAjNDgxMzQwIDAlLCAjZmYwZjNjIDEwMCUsICNmZjBmM2MgMTAwJSk7XHJcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzQ4MTM0MCAwJSwgI2ZmMGYzYyAxMDAlLCAjZmYwZjNjIDEwMCUpO1xyXG5cdC8qIFczQywgSUUxMCssIEZGMTYrLCBDaHJvbWUyNissIE9wZXJhMTIrLCBTYWZhcmk3KyAqL1xyXG5cdGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjNDgxMzQwJywgZW5kQ29sb3JzdHI9JyNmZjBmM2MnLCBHcmFkaWVudFR5cGU9MCk7XHJcblx0LyogSUU2LTkgKi9cclxufVxyXG5cclxuLmhvbWUtZm91ci1zdHlsZSAubWFpbi1sZWZ0LWFyZWE6YWZ0ZXIge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRjb250ZW50OiBcIlwiO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogODAwcHg7XHJcblx0dG9wOiAwO1xyXG5cdGxlZnQ6IDA7XHJcblx0LypiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9pbWcvaG9tZS00LWJnLnBuZ1wiKTsqL1xyXG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmhvbWUtZm91ci1zdHlsZSAubWFpbi1sZWZ0LWFyZWEgaDEsXHJcbi5ob21lLWZvdXItc3R5bGUgLm1haW4tbGVmdC1hcmVhIGgyLFxyXG4uaG9tZS1mb3VyLXN0eWxlIC5tYWluLWxlZnQtYXJlYSBoMyxcclxuLmhvbWUtZm91ci1zdHlsZSAubWFpbi1sZWZ0LWFyZWEgaDQsXHJcbi5ob21lLWZvdXItc3R5bGUgLm1haW4tbGVmdC1hcmVhIGg1LFxyXG4uaG9tZS1mb3VyLXN0eWxlIC5tYWluLWxlZnQtYXJlYSBoNixcclxuLmhvbWUtZm91ci1zdHlsZSAubWFpbi1sZWZ0LWFyZWEgcCxcclxuLmhvbWUtZm91ci1zdHlsZSAubWFpbi1sZWZ0LWFyZWEgLmhlcm8taW5mbyB1bCBsaSxcclxuLmhvbWUtZm91ci1zdHlsZSAubWFpbi1sZWZ0LWFyZWEgLmhlcm8taW5mbyB1bCBsaSBzcGFuLFxyXG4uaG9tZS1mb3VyLXN0eWxlIC5tYWluLWxlZnQtYXJlYSAuc2l0ZS1idG4sXHJcbi5ob21lLWZvdXItc3R5bGUgLm1haW4tbGVmdC1hcmVhIC5zb2NpYWwtc2VjdGlvbixcclxuLmhvbWUtZm91ci1zdHlsZSAubWFpbi1sZWZ0LWFyZWEgLnNvY2lhbC1saW5rcyBhLFxyXG4uaG9tZS1mb3VyLXN0eWxlIC5tYWluLWxlZnQtYXJlYSAuY29udGFjdC1mb3JtIGlucHV0LFxyXG4uaG9tZS1mb3VyLXN0eWxlIC5tYWluLWxlZnQtYXJlYSAuY29udGFjdC1mb3JtIHRleHRhcmVhLFxyXG4uaG9tZS1mb3VyLXN0eWxlIC5tYWluLWxlZnQtYXJlYSAuY2lyY2xlLXByb2dyZXNzIC5wcm9nLXRpdGxlIHAsXHJcbi5ob21lLWZvdXItc3R5bGUgLm1haW4tbGVmdC1hcmVhIC5jaXJjbGUtcHJvZ3Jlc3MgLnByb2ctdGl0bGUgaDMsXHJcbi5ob21lLWZvdXItc3R5bGUgLm1haW4tbGVmdC1hcmVhIC5jaXJjbGUtcHJvZ3Jlc3MgLnByb2dyZXNzLWluZm8gaDIsXHJcbi5ob21lLWZvdXItc3R5bGUgLm1haW4tbGVmdC1hcmVhIC5sYW5ndWFnZS1wcm9ncmVzcyBsaSB7XHJcblx0Y29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmhvbWUtZm91ci1zdHlsZSAubWFpbi1sZWZ0LWFyZWEgLmNpcmNsZS1wcm9ncmVzcyAucHJvZ3Jlc3MtaW5mbyB7XHJcblx0YmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI5KTtcclxufVxyXG5cclxuLmhvbWUtZm91ci1zdHlsZSAubWFpbi1sZWZ0LWFyZWEgLnNlY3Rpb24tdGl0bGUgaDI6YWZ0ZXIsXHJcbi5ob21lLWZvdXItc3R5bGUgLm1haW4tbGVmdC1hcmVhIC5sYW5ndWFnZS1wcm9ncmVzcyAubGFuLXByb2cgc3BhbiB7XHJcblx0YmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuLmhvbWUtZm91ci1zdHlsZSAubWFpbi1sZWZ0LWFyZWEgLmxhbmd1YWdlLXByb2dyZXNzIC5sYW4tcHJvZyBzcGFuLmZhZGUtZWxlIHtcclxuXHRiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjkpO1xyXG59XHJcblxyXG4uaG9tZS1mb3VyLXN0eWxlIC5tYWluLWxlZnQtYXJlYSAuZmFjdC1ib3gge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XHJcbn1cclxuXHJcbi5ob21lLWZvdXItc3R5bGUgLm1haW4tbGVmdC1hcmVhIC5mYWN0LWJveC50cmFucyB7XHJcblx0Ym9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uaG9tZS1mb3VyLXN0eWxlIC5tYWluLWxlZnQtYXJlYSAuaW50cm8tc2VjdGlvbiB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5ob21lLWZvdXItc3R5bGUgLm1haW4tcmlnaHQtYXJlYSAuc2VjdGlvbi10aXRsZSBoMjphZnRlcixcclxuLmhvbWUtZm91ci1zdHlsZSAubWFpbi1yaWdodC1hcmVhIC5yZXZpZXctc2xpZGVyIC5vd2wtZG90cyAub3dsLWRvdC5hY3RpdmUge1xyXG5cdGJhY2tncm91bmQ6ICNmZjBmM2M7XHJcbn1cclxuXHJcbi5ob21lLWZvdXItc3R5bGUgLm1haW4tcmlnaHQtYXJlYSAucmVzdW1lLWxpc3QgaDIsXHJcbi5ob21lLWZvdXItc3R5bGUgLm1haW4tcmlnaHQtYXJlYSAuc2luZ2xlLXJldmlldyAucXV0IHtcclxuXHRjb2xvcjogI2ZmMGYzYztcclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRIb21lIDUgU3R5bGVcclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4uaG9tZS1maXZlLXN0eWxlIC5oZWFkZXItc2VjdGlvbiB7XHJcblx0cGFkZGluZzogNTBweCA4MHB4O1xyXG5cdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR3aWR0aDogMTAwJTtcclxuXHR6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uaG9tZS1maXZlLXN0eWxlIC5oZXJvLXNlY3Rpb24ge1xyXG5cdHBhZGRpbmctdG9wOiA3MHB4O1xyXG59XHJcblxyXG4uaG9tZS1maXZlLXN0eWxlIC5oZXJvLXNlY3Rpb24gaW1nIHtcclxuXHRtYXJnaW4tYm90dG9tOiA2MHB4O1xyXG59XHJcblxyXG4uaG9tZS1maXZlLXN0eWxlIC5oZXJvLXRleHQgaDIge1xyXG5cdGZvbnQtc2l6ZTogNzJweDtcclxuXHRtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG59XHJcblxyXG4uaG9tZS1maXZlLXN0eWxlIC5zb2NpYWwtbGlua3Mge1xyXG5cdHBhZGRpbmctdG9wOiAwcHg7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHBhZGRpbmctYm90dG9tOiA3MHB4O1xyXG59XHJcblxyXG4uaG9tZS1maXZlLXN0eWxlIC5zb2NpYWwtbGlua3MgYSB7XHJcblx0Zm9udC1zaXplOiAzMHB4O1xyXG5cdG1hcmdpbi1yaWdodDogNDBweDtcclxuXHRjb2xvcjogI2I5YjliOTtcclxufVxyXG5cclxuLmhvbWUtZml2ZS1zdHlsZSAuc29jaWFsLWxpbmtzIGE6aG92ZXIge1xyXG5cdGNvbG9yOiAjNDg0ODQ4O1xyXG59XHJcblxyXG4uaG9tZS1maXZlLXN0eWxlIC5yZXN1bWUtbGlzdCBsaSB7XHJcblx0cGFkZGluZy1sZWZ0OiAwO1xyXG59XHJcblxyXG4uaG9tZS1maXZlLXN0eWxlIC5yZXN1bWUtbGlzdCBsaTphZnRlciB7XHJcblx0ZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmhvbWUtZml2ZS1zdHlsZSAucmVzdW1lLWxpc3Qge1xyXG5cdGJvcmRlci1sZWZ0OiBub25lO1xyXG5cdHBhZGRpbmctbGVmdDogMDtcclxuXHRtYXJnaW4tbGVmdDogMDtcclxufVxyXG5cclxuLmhvbWUtZml2ZS1zdHlsZSAucmV2aWV3LXNsaWRlciB7XHJcblx0cGFkZGluZy1sZWZ0OiAwO1xyXG59XHJcblxyXG4uaG9tZS1maXZlLXN0eWxlIC5yZXZpZXctc2xpZGVyIC5vd2wtZG90cyB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGxlZnQ6IDA7XHJcblx0dG9wOiAwO1xyXG5cdHBhZGRpbmctdG9wOiA1MHB4O1xyXG59XHJcblxyXG4uaG9tZS1maXZlLXN0eWxlIC5yZXZpZXctc2xpZGVyIC5vd2wtZG90cyAub3dsLWRvdCB7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdG1hcmdpbi1yaWdodDogMTVweDtcclxuXHRiYWNrZ3JvdW5kOiAjY2FjYWNhO1xyXG5cdGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmhvbWUtZml2ZS1zdHlsZSAucmV2aWV3LXNsaWRlciAub3dsLWRvdHMgLm93bC1kb3QuYWN0aXZlIHtcclxuXHRiYWNrZ3JvdW5kOiAjNDA0MjRhO1xyXG59XHJcblxyXG4uaG9tZS1maXZlLXN0eWxlIC5jaXJjbGUtcHJvZ3Jlc3Mge1xyXG5cdHBhZGRpbmctdG9wOiAwO1xyXG59XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdEhvbWUgNiBTdHlsZVxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi5ob21lLXNpeC1zdHlsZSAuc2l0ZS1sb2dvIGgyIGEsXHJcbi5ob21lLXNpeC1zdHlsZSAuc2l0ZS1sb2dvIHAsXHJcbi5ob21lLXNpeC1zdHlsZSAuaGVyby10ZXh0IGgyLFxyXG4uaG9tZS1zaXgtc3R5bGUgLmhlcm8tdGV4dCBwLFxyXG4uaG9tZS1zaXgtc3R5bGUgLnNvY2lhbC1saW5rcyBhIHtcclxuXHRjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmhvbWUtc2l4LXN0eWxlIC5yZXN1bWUtbGlzdCBoMixcclxuLmhvbWUtc2l4LXN0eWxlIC5pY29uLWJveCBpLFxyXG4uaG9tZS1zaXgtc3R5bGUgLnNpbmdsZS1yZXZpZXcgLnF1dCB7XHJcblx0Y29sb3I6ICMwMDlmZmY7XHJcbn1cclxuXHJcbi5ob21lLXNpeC1zdHlsZSAuc2VjdGlvbi10aXRsZSBoMjphZnRlcixcclxuLmhvbWUtc2l4LXN0eWxlIC5mYWN0LWJveCxcclxuLmhvbWUtc2l4LXN0eWxlIC5yZXZpZXctc2xpZGVyIC5vd2wtZG90cyAub3dsLWRvdC5hY3RpdmUsXHJcbi5ob21lLXNpeC1zdHlsZSAubGFuZ3VhZ2UtcHJvZ3Jlc3MgLmxhbi1wcm9nIHNwYW4ge1xyXG5cdGJhY2tncm91bmQ6ICMwMDlmZmY7XHJcbn1cclxuXHJcbi5ob21lLXNpeC1zdHlsZSAubGFuZ3VhZ2UtcHJvZ3Jlc3MgLmxhbi1wcm9nIHNwYW4uZmFkZS1lbGUge1xyXG5cdGJhY2tncm91bmQ6ICNjYWNhY2E7XHJcbn1cclxuXHJcbi5ob21lLXNpeC1zdHlsZSAuaGVhZGVyLXNlY3Rpb24ge1xyXG5cdHBhZGRpbmc6IDUwcHggODBweDtcclxuXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0ei1pbmRleDogMTtcclxufVxyXG5cclxuLmhvbWUtc2l4LXN0eWxlIC5oZXJvLXNlY3Rpb24ge1xyXG5cdGJhY2tncm91bmQ6ICMwMDlmZmY7XHJcblx0cGFkZGluZy10b3A6IDcwcHg7XHJcbn1cclxuXHJcbi5ob21lLXNpeC1zdHlsZSAuaGVyby1zZWN0aW9uIGltZyB7XHJcblx0bWFyZ2luLWJvdHRvbTogNjBweDtcclxufVxyXG5cclxuLmhvbWUtc2l4LXN0eWxlIC5oZXJvLXRleHQgaDIge1xyXG5cdGZvbnQtc2l6ZTogNzJweDtcclxuXHRtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG59XHJcblxyXG4uaG9tZS1zaXgtc3R5bGUgLnNvY2lhbC1saW5rcyB7XHJcblx0cGFkZGluZy10b3A6IDBweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0cGFkZGluZy1ib3R0b206IDcwcHg7XHJcbn1cclxuXHJcbi5ob21lLXNpeC1zdHlsZSAuc29jaWFsLWxpbmtzIGEge1xyXG5cdGZvbnQtc2l6ZTogMzBweDtcclxuXHRtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcblx0Y29sb3I6ICNiOWI5Yjk7XHJcbn1cclxuXHJcbi5ob21lLXNpeC1zdHlsZSAuc29jaWFsLWxpbmtzIGE6aG92ZXIge1xyXG5cdGNvbG9yOiAjNDg0ODQ4O1xyXG59XHJcblxyXG4uaG9tZS1zaXgtc3R5bGUgLnJlc3VtZS1saXN0IGxpIHtcclxuXHRwYWRkaW5nLWxlZnQ6IDA7XHJcbn1cclxuXHJcbi5ob21lLXNpeC1zdHlsZSAucmVzdW1lLWxpc3QgbGk6YWZ0ZXIge1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5ob21lLXNpeC1zdHlsZSAucmVzdW1lLWxpc3Qge1xyXG5cdGJvcmRlci1sZWZ0OiBub25lO1xyXG5cdHBhZGRpbmctbGVmdDogMDtcclxuXHRtYXJnaW4tbGVmdDogMDtcclxufVxyXG5cclxuLmhvbWUtc2l4LXN0eWxlIC5yZXZpZXctc2xpZGVyIHtcclxuXHRwYWRkaW5nLWxlZnQ6IDA7XHJcbn1cclxuXHJcbi5ob21lLXNpeC1zdHlsZSAucmV2aWV3LXNsaWRlciAub3dsLWRvdHMge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRsZWZ0OiAwO1xyXG5cdHRvcDogMDtcclxuXHRwYWRkaW5nLXRvcDogNTBweDtcclxufVxyXG5cclxuLmhvbWUtc2l4LXN0eWxlIC5yZXZpZXctc2xpZGVyIC5vd2wtZG90cyAub3dsLWRvdCB7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdG1hcmdpbi1yaWdodDogMTVweDtcclxuXHRiYWNrZ3JvdW5kOiAjY2FjYWNhO1xyXG5cdGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmhvbWUtc2l4LXN0eWxlIC5jaXJjbGUtcHJvZ3Jlc3Mge1xyXG5cdHBhZGRpbmctdG9wOiAwO1xyXG59XHJcblxyXG4uaW5mby1zZWN0aW9uIHtcclxuXHRiYWNrZ3JvdW5kOiAjNDA0MjRhO1xyXG5cdHBhZGRpbmc6IDYwcHggMDtcclxufVxyXG5cclxuLmluZm8tc2VjdGlvbiAuaGVyby1pbmZvIHVsIGxpIHtcclxuXHRjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmluZm8tc2VjdGlvbiAuaGVyby1pbmZvIHVsIGxpIHNwYW4ge1xyXG5cdGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgUmVzcG9uc2l2ZVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE3MzBweCkge1xyXG5cdC5ob21lLXR3by1zdHlsZSAuc29jaWFsLXNlY3Rpb24gLnNvY2lhbC1saW5rLXdhcnA6YWZ0ZXIge1xyXG5cdFx0ZGlzcGxheTogbm9uZTtcclxuXHR9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTYwMHB4KSB7XHJcblx0Lmhlcm8tdGV4dCBoMiB7XHJcblx0XHRmb250LXNpemU6IDEyMHB4O1xyXG5cdH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDUwcHgpIHtcclxuXHQuaG9tZS1maXZlLXN0eWxlIC5oZWFkZXItc2VjdGlvbiB7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRiYWNrZ3JvdW5kOiAjZjJmN2Y4O1xyXG5cdH1cclxuXHQuaG9tZS1zaXgtc3R5bGUgLmhlYWRlci1zZWN0aW9uIHtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdGJhY2tncm91bmQ6ICMwMDlmZmY7XHJcblx0fVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzNjZweCkgYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG5cdC5ob21lLWZpdmUtc3R5bGUgLmhlYWRlci1zZWN0aW9uIHtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdGJhY2tncm91bmQ6ICNmMmY3Zjg7XHJcblx0fVxyXG5cdC5jb250YWluZXItd2FycCB7XHJcblx0XHRtaW4td2lkdGg6IDgwJTtcclxuXHRcdG1hcmdpbi1sZWZ0OiAxMCU7XHJcblx0fVxyXG5cdC5oZXJvLWluZm8gdWwgbGkgc3BhbiB7XHJcblx0XHRtaW4td2lkdGg6IDE4MHB4O1xyXG5cdH1cclxuXHQucG9ydGZvbGlvLWl0ZW0gLnBvcnQtcGljIHtcclxuXHRcdGhlaWdodDogMzEwcHg7XHJcblx0fVxyXG5cdC5ob21lLXRocmVlLXN0eWxlIC5oZWFkZXItc2VjdGlvbiB7XHJcblx0XHRwYWRkaW5nOiA1MHB4IDMwcHg7XHJcblx0fVxyXG5cdC5ob21lLXRocmVlLXN0eWxlIC5tYWluLWxlZnQtYXJlYSB7XHJcblx0XHRwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAzMHB4O1xyXG5cdH1cclxuXHQuaG9tZS10aHJlZS1zdHlsZSAubWFpbi1yaWdodC1hcmVhIHtcclxuXHRcdHBhZGRpbmctbGVmdDogMTAwcHg7XHJcblx0fVxyXG59XHJcblxyXG4vKiBNZWRpdW0gc2NyZWVuIDogOTkycHguICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcclxuXHQucG9ydGZvbGlvLXdhcnAge1xyXG5cdFx0cGFkZGluZzogMDtcclxuXHR9XHJcblx0LmhvbWUtdGhyZWUtc3R5bGUgLmhlYWRlci1zZWN0aW9uIHtcclxuXHRcdHBhZGRpbmc6IDUwcHggMTVweDtcclxuXHR9XHJcblx0LmhvbWUtdGhyZWUtc3R5bGUgLm1haW4tbGVmdC1hcmVhIHtcclxuXHRcdHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcblx0XHRwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcblx0fVxyXG5cdC5ob21lLXRocmVlLXN0eWxlIC5tYWluLXJpZ2h0LWFyZWEge1xyXG5cdFx0cGFkZGluZy1sZWZ0OiA1MHB4O1xyXG5cdH1cclxuXHQuaG9tZS10aHJlZS1zdHlsZSAubWFpbi1yaWdodC1hcmVhIHtcclxuXHRcdHBhZGRpbmctbGVmdDogMTAwcHg7XHJcblx0fVxyXG5cdC5wb3J0Zm9saW8taXRlbSAucG9ydC1waWMge1xyXG5cdFx0aGVpZ2h0OiAzMTBweDtcclxuXHR9XHJcblx0LnBvcnRmb2xpby1pdGVtIHtcclxuXHRcdG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblx0fVxyXG59XHJcblxyXG4vKiBUYWJsZXQgOjc2OHB4LiAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuXHQucG9ydGZvbGlvLXdhcnAge1xyXG5cdFx0cGFkZGluZzogMDtcclxuXHR9XHJcblx0LmhpZGRlbi1tZCB7XHJcblx0XHRkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cdC5pY29uLWJveCB7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcblx0fVxyXG5cdC5zb2NpYWwtc2VjdGlvbiAuc29jaWFsLWxpbmtzIHtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdH1cclxuXHQuc29jaWFsLWxpbmstd2FycDphZnRlciB7XHJcblx0XHRkaXNwbGF5OiBub25lO1xyXG5cdH1cclxuXHQucG9ydGZvbGlvLWl0ZW0ge1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHR9XHJcblx0LmhvbWUtdGhyZWUtc3R5bGUgLmhlYWRlci1zZWN0aW9uIHtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdGJhY2tncm91bmQ6ICNmMmY3Zjg7XHJcblx0fVxyXG5cdC5ob21lLXRocmVlLXN0eWxlIC5tYWluLWxlZnQtYXJlYSB7XHJcblx0XHRwYWRkaW5nLXRvcDogMDtcclxuXHR9XHJcblx0LmhvbWUtdGhyZWUtc3R5bGUgLm1haW4tbGVmdC1hcmVhLFxyXG5cdC5ob21lLXRocmVlLXN0eWxlIC5oZWFkZXItc2VjdGlvbixcclxuXHQuaG9tZS10aHJlZS1zdHlsZSAubWFpbi1yaWdodC1hcmVhLFxyXG5cdC5ob21lLWZvdXItc3R5bGUgLm1haW4tbGVmdC1hcmVhLFxyXG5cdC5ob21lLWZvdXItc3R5bGUgLmhlYWRlci1zZWN0aW9uLFxyXG5cdC5ob21lLWZvdXItc3R5bGUgLm1haW4tcmlnaHQtYXJlYSB7XHJcblx0XHRwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAzMHB4O1xyXG5cdH1cclxuXHQuaG9tZS1maXZlLXN0eWxlIC5oZWFkZXItc2VjdGlvbixcclxuXHQuaG9tZS1zaXgtc3R5bGUgLmhlYWRlci1zZWN0aW9uIHtcclxuXHRcdHBhZGRpbmc6IDUwcHggMDtcclxuXHR9XHJcblx0LmluZm8tc2VjdGlvbiAuaGVyby1pbmZvIHVsIGxpIHNwYW4ge1xyXG5cdFx0Y29sb3I6ICM5YzliOWI7XHJcblx0fVxyXG5cdC5oZXJvLWluZm8gdWwgbGkge1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHR9XHJcblx0Lmhlcm8taW5mbyB1bCBsaSBzcGFuIHtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdH1cclxufVxyXG5cclxuLyogTGFyZ2UgTW9iaWxlIDo0ODBweC4gKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG5cdC5pY29uLWJveCB7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcblx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cdH1cclxuXHQuaGVyby10ZXh0IGgyIHtcclxuXHRcdGZvbnQtc2l6ZTogODBweDtcclxuXHR9XHJcblx0LnBvcnRmb2xpby13YXJwIHtcclxuXHRcdHBhZGRpbmc6IDA7XHJcblx0fVxyXG5cdC5oaWRkZW4tbWQge1xyXG5cdFx0ZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHQucmVzdW1lLWxpc3Qge1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0XHRwYWRkaW5nLWxlZnQ6IDA7XHJcblx0XHRib3JkZXItbGVmdDogbm9uZTtcclxuXHR9XHJcblx0LnJldmlldy1zbGlkZXIge1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAwO1xyXG5cdH1cclxuXHQucmV2aWV3LXNsaWRlciAub3dsLWRvdHMge1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdHRvcDogNzBweDtcclxuXHR9XHJcblx0LnJldmlldy1zbGlkZXIgLm93bC1kb3RzIC5vd2wtZG90IHtcclxuXHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdG1hcmdpbi1yaWdodDogMTVweDtcclxuXHR9XHJcblx0LnBvcnRmb2xpby1pdGVtIHtcclxuXHRcdG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblx0fVxyXG5cdC5mYWN0LWJveCB7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cdH1cclxuXHQuaGVhZGVyLXNlY3Rpb24ge1xyXG5cdFx0cGFkZGluZzogNTBweCAwO1xyXG5cdH1cclxuXHQuc29jaWFsLXNlY3Rpb24gLnNvY2lhbC1saW5rcyB7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR9XHJcblx0LmhvbWUtdGhyZWUtc3R5bGUgLmhlYWRlci1zZWN0aW9uIHtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdGJhY2tncm91bmQ6ICNmMmY3Zjg7XHJcblx0fVxyXG5cdC5ob21lLXRocmVlLXN0eWxlIC5tYWluLWxlZnQtYXJlYSB7XHJcblx0XHRwYWRkaW5nLXRvcDogMDtcclxuXHR9XHJcblx0LmhvbWUtdGhyZWUtc3R5bGUgLm1haW4tbGVmdC1hcmVhLFxyXG5cdC5ob21lLXRocmVlLXN0eWxlIC5oZWFkZXItc2VjdGlvbixcclxuXHQuaG9tZS10aHJlZS1zdHlsZSAubWFpbi1yaWdodC1hcmVhLFxyXG5cdC5ob21lLWZvdXItc3R5bGUgLm1haW4tbGVmdC1hcmVhLFxyXG5cdC5ob21lLWZvdXItc3R5bGUgLmhlYWRlci1zZWN0aW9uLFxyXG5cdC5ob21lLWZvdXItc3R5bGUgLm1haW4tcmlnaHQtYXJlYSB7XHJcblx0XHRwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAzMHB4O1xyXG5cdH1cclxuXHQuaG9tZS1maXZlLXN0eWxlIC5oZWFkZXItc2VjdGlvbixcclxuXHQuaG9tZS1zaXgtc3R5bGUgLmhlYWRlci1zZWN0aW9uIHtcclxuXHRcdHBhZGRpbmc6IDUwcHggMDtcclxuXHR9XHJcblx0LmluZm8tc2VjdGlvbiAuaGVyby1pbmZvIHVsIGxpIHNwYW4ge1xyXG5cdFx0Y29sb3I6ICM5YzliOWI7XHJcblx0fVxyXG59XHJcblxyXG4vKiBzbWFsbCBNb2JpbGUgOjMyMHB4LiAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ3OXB4KSB7XHJcblx0Lmhlcm8tdGV4dCBoMiB7XHJcblx0XHRmb250LXNpemU6IDUwcHg7XHJcblx0fVxyXG5cdC5oZXJvLWluZm8gdWwgbGkge1xyXG5cdFx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdH1cclxuXHQuaGVyby1pbmZvIHVsIGxpIHNwYW4ge1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0fVxyXG5cdC5zb2NpYWwtc2VjdGlvbiAuc29jaWFsLWxpbmtzIGEge1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG5cdH1cclxuXHQucmVzdW1lLWxpc3QgaDIge1xyXG5cdFx0Zm9udC1zaXplOiA1MHB4O1xyXG5cdH1cclxuXHQucG9ydGZvbGlvLWl0ZW0ge1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHR9XHJcblx0LmhvbWUtdGhyZWUtc3R5bGUgLm1haW4tbGVmdC1hcmVhLFxyXG5cdC5ob21lLXRocmVlLXN0eWxlIC5oZWFkZXItc2VjdGlvbixcclxuXHQuaG9tZS10aHJlZS1zdHlsZSAubWFpbi1yaWdodC1hcmVhLFxyXG5cdC5ob21lLWZvdXItc3R5bGUgLm1haW4tbGVmdC1hcmVhLFxyXG5cdC5ob21lLWZvdXItc3R5bGUgLmhlYWRlci1zZWN0aW9uLFxyXG5cdC5ob21lLWZvdXItc3R5bGUgLm1haW4tcmlnaHQtYXJlYSB7XHJcblx0XHRwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAxNXB4O1xyXG5cdH1cclxuXHQuaG9tZS1mb3VyLXN0eWxlIC5tYWluLWxlZnQtYXJlYSB7XHJcblx0XHRwYWRkaW5nLXRvcDogMjUwcHg7XHJcblx0fVxyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'profile',
          templateUrl: './profile.component.html',
          styleUrls: ['./profile.component.css']
        }]
      }], function () {
        return [{
          type: _servicies_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _servicies_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]
        }, {
          type: _servicies_players_service__WEBPACK_IMPORTED_MODULE_4__["PlayersService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/register/register.component.ts":
  /*!************************************************!*\
    !*** ./src/app/register/register.component.ts ***!
    \************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../models/user.model */
    "./src/app/models/user.model.ts");
    /* harmony import */


    var _models_rol_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/rol.model */
    "./src/app/models/rol.model.ts");
    /* harmony import */


    var _servicies_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../_servicies/users.service */
    "./src/app/_servicies/users.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function RegisterComponent_h2_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Passwords are not equal");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var BASE_URL = '/api/user/';

    var RegisterComponent =
    /*#__PURE__*/
    function () {
      function RegisterComponent(usersService) {
        _classCallCheck(this, RegisterComponent);

        this.usersService = usersService;
        this.user = new _models_user_model__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.rol = new _models_rol_model__WEBPACK_IMPORTED_MODULE_2__["Rol"]();
        this.notEqualPass = false;
      }

      _createClass(RegisterComponent, [{
        key: "send",
        value: function send(name, email, username, userpassword, password) {
          if (userpassword === password) {
            this.notEqualPass = false;
            this.user.name = name;
            this.user.username = username;
            this.user.email = email;
            this.user.password = userpassword;
            this.rol.idRol = 2;
            this.rol.rolDes = 'USER';
            this.user.rol = this.rol;
            this.usersService.createUser(this.user).subscribe(function (response) {
              window.history.back();
            }, function (error) {
              return console.error('Error creating new user: ' + error);
            });
          } else {
            this.notEqualPass = true;
          }
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
      return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servicies_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]));
    };

    RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegisterComponent,
      selectors: [["register"]],
      decls: 65,
      vars: 1,
      consts: [["lang", "en"], [1, "container", "p-5", "pt-5"], [1, "row", "justify-content-center"], [1, "col-md-8"], [1, "card"], [1, "card-body"], [4, "ngIf"], [1, "form-group"], ["for", "name", 1, "cols-sm-2", "control-label"], [1, "cols-sm-10"], [1, "input-group"], [1, "input-group-addon"], ["aria-hidden", "true", 1, "fa", "fa-user", "fa"], ["type", "text", "placeholder", "Insert your name", 1, "form-control"], ["name", ""], ["for", "email", 1, "cols-sm-2", "control-label"], ["aria-hidden", "true", 1, "fa", "fa-envelope", "fa"], ["type", "text", "placeholder", "Insert your Email", 1, "form-control"], ["email", ""], ["for", "username", 1, "cols-sm-2", "control-label"], ["aria-hidden", "true", 1, "fa", "fa-users", "fa"], ["type", "text", "placeholder", "Enter your Username", 1, "form-control"], ["username", ""], ["for", "password", 1, "cols-sm-2", "control-label"], ["aria-hidden", "true", 1, "fa", "fa-lock", "fa-lg"], ["type", "password", "placeholder", "Enter your Password", 1, "form-control"], ["userpassword", ""], ["for", "confirm", 1, "cols-sm-2", "control-label"], ["type", "password", "placeholder", "Confirm your Password", 1, "form-control"], ["password", ""], [1, "button", 3, "click"]],
      template: function RegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, RegisterComponent_h2_16_Template, 2, 0, "h2", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Your name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 13, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Your e-mail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 17, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 21, 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 25, 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "label", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Confirm password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "input", 28, 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_63_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

            var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);

            var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](34);

            var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](43);

            var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](52);

            var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](61);

            return ctx.send(_r27.value, _r28.value, _r29.value, _r30.value, _r31.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.notEqualPass);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
      styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  padding-top: 40px;\r\n  padding-bottom: 40px;\r\n  background-color: #f5f5f5;\r\n}\r\n\r\n.form-signin[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  max-width: 330px;\r\n  padding: 15px;\r\n  margin: auto;\r\n}\r\n\r\n.form-signin[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%] {\r\n  font-weight: 400;\r\n}\r\n\r\n.form-signin[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  box-sizing: border-box;\r\n  height: auto;\r\n  padding: 10px;\r\n  font-size: 16px;\r\n}\r\n\r\n.form-control-wrong[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  box-sizing: border-box;\r\n  height: auto;\r\n  padding: 10px;\r\n  font-size: 16px;\r\n  background-color: red;\r\n}\r\n\r\n.form-signin[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\r\n  z-index: 2;\r\n}\r\n\r\n.form-signin[_ngcontent-%COMP%]   input[type=\"email\"][_ngcontent-%COMP%] {\r\n  margin-bottom: -1px;\r\n  border-bottom-right-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n\r\n.form-signin[_ngcontent-%COMP%]   input[type=\"password\"][_ngcontent-%COMP%] {\r\n  margin-bottom: 10px;\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\r\n}\r\n\r\n.button[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  transition-duration: 1s;\r\n  color: white;\r\n  border-width: 2px;\r\n  border-style: inset;\r\n  border-radius: 10px;\r\n  transition-duration: 0.4s;\r\n  background-color: #1E90FF;\r\n  text-align: center;\r\n  -moz-text-align-last: center;\r\n       text-align-last: center;\r\n  font-size: 20px;\r\n  font-family: \"Lucida Sans Unicode\";\r\n  font-weight: auto;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-top: 30px;\r\n  margin-bottom: auto;\r\n}\r\n\r\n.button[_ngcontent-%COMP%]:hover {\r\n  color: black;\r\n  border-width: 2px;\r\n  border-style: inset;\r\n  border-radius: 10px;\r\n  transition-duration: 0.4s;\r\n  background-color: #87CEFA;\r\n  text-align: center;\r\n  -moz-text-align-last: center;\r\n       text-align-last: center;\r\n  font-size: 20px;\r\n  font-family: \"Lucida Sans Unicode\";\r\n  font-weight: auto;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-top: 30px;\r\n  margin-bottom: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxZQUFZO0FBQ2Q7O0FBRUE7RUFFRSxhQUFhO0VBRWIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtFQUNmLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUNFLFVBQVU7QUFDWjs7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsNEJBQTRCO0FBQzlCOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxlQUFlO0VBRWYsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQiw0QkFBdUI7T0FBdkIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixrQ0FBa0M7RUFDbEMsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQiw0QkFBdUI7T0FBdkIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixrQ0FBa0M7RUFDbEMsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLFxyXG5ib2R5IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbn1cclxuXHJcbi5mb3JtLXNpZ25pbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAzMzBweDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG4uZm9ybS1zaWduaW4gLmNoZWNrYm94IHtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcbi5mb3JtLXNpZ25pbiAuZm9ybS1jb250cm9sIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLmZvcm0tY29udHJvbC13cm9uZyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufVxyXG4uZm9ybS1zaWduaW4gLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG4uZm9ybS1zaWduaW4gaW5wdXRbdHlwZT1cImVtYWlsXCJdIHtcclxuICBtYXJnaW4tYm90dG9tOiAtMXB4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbn1cclxuLmZvcm0tc2lnbmluIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBpbnNldDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFFOTBGRjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbi1sYXN0OiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcIjtcclxuICBmb250LXdlaWdodDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG59XHJcblxyXG4uYnV0dG9uOmhvdmVyIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBpbnNldDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg3Q0VGQTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbi1sYXN0OiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcIjtcclxuICBmb250LXdlaWdodDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'register',
          templateUrl: './register.component.html',
          styleUrls: ['./register.component.css']
        }]
      }], function () {
        return [{
          type: _servicies_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/rocketleague/rocketleague.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/rocketleague/rocketleague.component.ts ***!
    \********************************************************/

  /*! exports provided: RocketleagueComponent */

  /***/
  function srcAppRocketleagueRocketleagueComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RocketleagueComponent", function () {
      return RocketleagueComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _servicies_rocketleague_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../_servicies/rocketleague.service */
    "./src/app/_servicies/rocketleague.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a1) {
      return ["/tournament/", a1];
    };

    function RocketleagueComponent_div_40_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var elem_r12 = ctx.$implicit;

        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r11.imgDefaultTournamentUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](elem_r12.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](elem_r12.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, elem_r12.idTournament));
      }
    }

    var _c1 = function _c1() {
      return ["/info"];
    };

    var RocketleagueComponent =
    /*#__PURE__*/
    function () {
      function RocketleagueComponent(rocketleagueService) {
        _classCallCheck(this, RocketleagueComponent);

        this.rocketleagueService = rocketleagueService;
        this.tournaments = new Array();
        this.imgSteamIconUrl = "assets/steam-Icon.png";
        this.imgTwitchIconUrl = "assets/twitch-icon.png";
        this.imgInfoIconUrl = "assets/info-icon.png";
        this.imgDefaultTournamentUrl = "assets/defaultTournament.png";
        this.imgBackgroundUrl = "assets/bg-rocketLeague.jpg";
      }

      _createClass(RocketleagueComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.tournamentsOnHtml();
        }
      }, {
        key: "tournamentsOnHtml",
        value: function tournamentsOnHtml() {
          var _this28 = this;

          this.rocketleagueService.getTournaments().subscribe(function (respuesta) {
            var data = respuesta;

            for (var i = 0; i < data.length; i++) {
              _this28.tournaments.push(data[i]);
            }
          });
        }
      }]);

      return RocketleagueComponent;
    }();

    RocketleagueComponent.ɵfac = function RocketleagueComponent_Factory(t) {
      return new (t || RocketleagueComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servicies_rocketleague_service__WEBPACK_IMPORTED_MODULE_1__["RocketleagueService"]));
    };

    RocketleagueComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RocketleagueComponent,
      selectors: [["rocketleague"]],
      decls: 41,
      vars: 6,
      consts: [["lang", "en"], ["charset", "utf-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1, shrink-to-fit=no"], [1, "masthead", "text-white", "text-center"], [1, "overlay"], [1, "container"], [1, "row"], [1, "col-xl-9", "mx-auto"], [1, "mb-5"], [1, "features-icons", "bg-light", "text-center"], [1, "col-lg-4"], [1, "features-icons-item", "mx-auto", "mb-5", "mb-lg-0", "mb-lg-3"], ["href", "https://store.steampowered.com/app/252950/Rocket_League/"], ["alt", "Steam", "height", "200px", "width", "200px", 3, "src"], ["href", "https://www.twitch.tv/directory/game/Rocket%20League"], ["alt", "Twitch", "height", "200px", "width", "200px", 3, "src"], [1, "features-icons-item", "mx-auto", "mb-0", "mb-lg-3"], ["type", "image", "width", "200px", "height", "200px", "alt", "Info", 3, "routerLink", "src"], [1, "showcase"], [1, "container-fluid", "p-0"], ["class", "row no-gutters", 4, "ngFor", "ngForOf"], [1, "row", "no-gutters"], [1, "col-lg-6", "text-white", "showcase-img"], ["height", "500px", 3, "src"], [1, "col-lg-6", "my-auto", "showcase-text"], [1, "lead", "mb-0"], [2, "text-align", "center"], [3, "routerLink"], ["type", "submit", "value", "Go to tournament", 1, "button"]],
      template: function RocketleagueComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Rocket League");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "header", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h1", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "TOURNAMENTS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Download Rocket League on Steam");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "See on Twitch");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "i");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Get more information about this game");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "section", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, RocketleagueComponent_div_40_Template, 11, 6, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imgSteamIconUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imgTwitchIconUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1))("src", ctx.imgInfoIconUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tournaments);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
      styles: ["body[_ngcontent-%COMP%] {\r\n    font-family: Lato, 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n}\r\n\r\n\r\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\r\n    font-family: Lato, 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n    font-weight: 700\r\n}\r\n\r\n\r\nheader.masthead[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    background-color: #343a40;\r\n    background: url('bg-rocketLeague.jpg') no-repeat center center;\r\n    background-size: cover;\r\n    padding-top: 8rem;\r\n    padding-bottom: 8rem\r\n}\r\n\r\n\r\nheader.masthead[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    background-color: #212529;\r\n    height: 100%;\r\n    width: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    opacity: .3\r\n}\r\n\r\n\r\nheader.masthead[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-size: 2rem\r\n}\r\n\r\n\r\n.button[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    transition-duration: 1s;\r\n    color: white;\r\n    border-width: 2px;\r\n    border-style: inset;\r\n    border-radius: 10px;\r\n    transition-duration: 0.4s;\r\n    background-color: #1E90FF;\r\n    text-align: center;\r\n    -moz-text-align-last: center;\r\n         text-align-last: center;\r\n    font-size: 20px;\r\n    font-family: \"Lucida Sans Unicode\";\r\n    font-weight: auto;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 30px;\r\n    margin-bottom: auto;\r\n}\r\n\r\n\r\n.button[_ngcontent-%COMP%]:hover {\r\n    color: black;\r\n    border-width: 2px;\r\n    border-style: inset;\r\n    border-radius: 10px;\r\n    transition-duration: 0.4s;\r\n    background-color: #87CEFA;\r\n    text-align: center;\r\n    -moz-text-align-last: center;\r\n         text-align-last: center;\r\n    font-size: 20px;\r\n    font-family: \"Lucida Sans Unicode\";\r\n    font-weight: auto;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 30px;\r\n    margin-bottom: auto;\r\n}\r\n\r\n\r\n@media (min-width:768px) {\r\n    header.masthead[_ngcontent-%COMP%] {\r\n        padding-top: 12rem;\r\n        padding-bottom: 12rem\r\n    }\r\n\r\n    header.masthead[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n        font-size: 3rem\r\n    }\r\n}\r\n\r\n\r\n.showcase[_ngcontent-%COMP%]   .showcase-text[_ngcontent-%COMP%] {\r\n    padding: 3rem\r\n}\r\n\r\n\r\n.showcase[_ngcontent-%COMP%]   .showcase-img[_ngcontent-%COMP%] {\r\n    min-height: 30rem;\r\n    background-size: cover\r\n}\r\n\r\n\r\n@media (min-width:768px) {\r\n    .showcase[_ngcontent-%COMP%]   .showcase-text[_ngcontent-%COMP%] {\r\n        padding: 7rem\r\n    }\r\n}\r\n\r\n\r\n.features-icons[_ngcontent-%COMP%] {\r\n    padding-top: 7rem;\r\n    padding-bottom: 7rem\r\n}\r\n\r\n\r\n.features-icons[_ngcontent-%COMP%]   .features-icons-item[_ngcontent-%COMP%] {\r\n    max-width: 20rem;\r\n}\r\n\r\n\r\n.features-icons[_ngcontent-%COMP%]   .features-icons-item[_ngcontent-%COMP%]   .features-icons-icon[_ngcontent-%COMP%] {\r\n    height: 7rem\r\n}\r\n\r\n\r\n.features-icons[_ngcontent-%COMP%]   .features-icons-item[_ngcontent-%COMP%]   .features-icons-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 4.5rem\r\n}\r\n\r\n\r\n.features-icons[_ngcontent-%COMP%]   .features-icons-item[_ngcontent-%COMP%]:hover   .features-icons-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 5rem\r\n}\r\n\r\n\r\nfooter.footer[_ngcontent-%COMP%] {\r\n    padding-top: 4rem;\r\n    padding-bottom: 4rem\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9ja2V0bGVhZ3VlL2xhbmRpbmctcGFnZS5jb21wb25lbnQubWluLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztFQUlFOzs7QUFHRjtJQUNJLGlFQUFpRTtBQUNyRTs7O0FBRUE7Ozs7OztJQU1JLGlFQUFpRTtJQUNqRTtBQUNKOzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsOERBQXlFO0lBQ3pFLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakI7QUFDSjs7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixXQUFXO0lBQ1gsTUFBTTtJQUNOLE9BQU87SUFDUDtBQUNKOzs7QUFFQTtJQUNJO0FBQ0o7OztBQUVBO0lBQ0ksZUFBZTtJQUVmLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsNEJBQXVCO1NBQXZCLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2Ysa0NBQWtDO0lBQ2xDLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7OztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLDRCQUF1QjtTQUF2Qix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGtDQUFrQztJQUNsQyxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOzs7QUFFQTtJQUNJO1FBQ0ksa0JBQWtCO1FBQ2xCO0lBQ0o7O0lBRUE7UUFDSTtJQUNKO0FBQ0o7OztBQUVBO0lBQ0k7QUFDSjs7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakI7QUFDSjs7O0FBRUE7SUFDSTtRQUNJO0lBQ0o7QUFDSjs7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakI7QUFDSjs7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7OztBQUVBO0lBQ0k7QUFDSjs7O0FBRUE7SUFDSTtBQUNKOzs7QUFFQTtJQUNJO0FBQ0o7OztBQUdBO0lBQ0ksaUJBQWlCO0lBQ2pCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9yb2NrZXRsZWFndWUvbGFuZGluZy1wYWdlLmNvbXBvbmVudC5taW4uY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyohXHJcbiAqIFN0YXJ0IEJvb3RzdHJhcCAtIExhbmRpbmcgUGFnZSB2NS4wLjcgKGh0dHBzOi8vc3RhcnRib290c3RyYXAuY29tL3RlbXBsYXRlLW92ZXJ2aWV3cy9sYW5kaW5nLXBhZ2UpXHJcbiAqIENvcHlyaWdodCAyMDEzLTIwMTkgU3RhcnQgQm9vdHN0cmFwXHJcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL0JsYWNrcm9ja0RpZ2l0YWwvc3RhcnRib290c3RyYXAtbGFuZGluZy1wYWdlL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXHJcbiAqL1xyXG5cclxuXHJcbmJvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6IExhdG8sICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmgxLFxyXG5oMixcclxuaDMsXHJcbmg0LFxyXG5oNSxcclxuaDYge1xyXG4gICAgZm9udC1mYW1pbHk6IExhdG8sICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNzAwXHJcbn1cclxuXHJcbmhlYWRlci5tYXN0aGVhZCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9iZy1yb2NrZXRMZWFndWUuanBnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogOHJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4cmVtXHJcbn1cclxuXHJcbmhlYWRlci5tYXN0aGVhZCAub3ZlcmxheSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNTI5O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgb3BhY2l0eTogLjNcclxufVxyXG5cclxuaGVhZGVyLm1hc3RoZWFkIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbVxyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci13aWR0aDogMnB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBpbnNldDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFFOTBGRjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ24tbGFzdDogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTHVjaWRhIFNhbnMgVW5pY29kZVwiO1xyXG4gICAgZm9udC13ZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG59XHJcblxyXG4uYnV0dG9uOmhvdmVyIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlci13aWR0aDogMnB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBpbnNldDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg3Q0VGQTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ24tbGFzdDogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTHVjaWRhIFNhbnMgVW5pY29kZVwiO1xyXG4gICAgZm9udC13ZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDo3NjhweCkge1xyXG4gICAgaGVhZGVyLm1hc3RoZWFkIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTJyZW07XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEycmVtXHJcbiAgICB9XHJcblxyXG4gICAgaGVhZGVyLm1hc3RoZWFkIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDNyZW1cclxuICAgIH1cclxufVxyXG5cclxuLnNob3djYXNlIC5zaG93Y2FzZS10ZXh0IHtcclxuICAgIHBhZGRpbmc6IDNyZW1cclxufVxyXG5cclxuLnNob3djYXNlIC5zaG93Y2FzZS1pbWcge1xyXG4gICAgbWluLWhlaWdodDogMzByZW07XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyXHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOjc2OHB4KSB7XHJcbiAgICAuc2hvd2Nhc2UgLnNob3djYXNlLXRleHQge1xyXG4gICAgICAgIHBhZGRpbmc6IDdyZW1cclxuICAgIH1cclxufVxyXG5cclxuLmZlYXR1cmVzLWljb25zIHtcclxuICAgIHBhZGRpbmctdG9wOiA3cmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDdyZW1cclxufVxyXG5cclxuLmZlYXR1cmVzLWljb25zIC5mZWF0dXJlcy1pY29ucy1pdGVtIHtcclxuICAgIG1heC13aWR0aDogMjByZW07XHJcbn1cclxuXHJcbi5mZWF0dXJlcy1pY29ucyAuZmVhdHVyZXMtaWNvbnMtaXRlbSAuZmVhdHVyZXMtaWNvbnMtaWNvbiB7XHJcbiAgICBoZWlnaHQ6IDdyZW1cclxufVxyXG5cclxuLmZlYXR1cmVzLWljb25zIC5mZWF0dXJlcy1pY29ucy1pdGVtIC5mZWF0dXJlcy1pY29ucy1pY29uIGkge1xyXG4gICAgZm9udC1zaXplOiA0LjVyZW1cclxufVxyXG5cclxuLmZlYXR1cmVzLWljb25zIC5mZWF0dXJlcy1pY29ucy1pdGVtOmhvdmVyIC5mZWF0dXJlcy1pY29ucy1pY29uIGkge1xyXG4gICAgZm9udC1zaXplOiA1cmVtXHJcbn1cclxuXHJcblxyXG5mb290ZXIuZm9vdGVyIHtcclxuICAgIHBhZGRpbmctdG9wOiA0cmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDRyZW1cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RocketleagueComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'rocketleague',
          templateUrl: './rocketleague.component.html',
          styleUrls: ['./landing-page.component.min.css']
        }]
      }], function () {
        return [{
          type: _servicies_rocketleague_service__WEBPACK_IMPORTED_MODULE_1__["RocketleagueService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/team/team.component.ts":
  /*!****************************************!*\
    !*** ./src/app/team/team.component.ts ***!
    \****************************************/

  /*! exports provided: TeamComponent */

  /***/
  function srcAppTeamTeamComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeamComponent", function () {
      return TeamComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_team_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../models/team.model */
    "./src/app/models/team.model.ts");
    /* harmony import */


    var _models_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/user.model */
    "./src/app/models/user.model.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _servicies_teams_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../_servicies/teams.service */
    "./src/app/_servicies/teams.service.ts");
    /* harmony import */


    var _servicies_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../_servicies/users.service */
    "./src/app/_servicies/users.service.ts");
    /* harmony import */


    var _servicies_players_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../_servicies/players.service */
    "./src/app/_servicies/players.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function TeamComponent_button_45_Template(rf, ctx) {
      if (rf & 1) {
        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeamComponent_button_45_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r16.save();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Submit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TeamComponent_h3_46_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Team created");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return ["/"];
    };

    function TeamComponent_button_48_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Go to home");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
      }
    }

    var TeamComponent =
    /*#__PURE__*/
    function () {
      function TeamComponent(http, teamsService, usersService, playersService) {
        _classCallCheck(this, TeamComponent);

        this.http = http;
        this.teamsService = teamsService;
        this.usersService = usersService;
        this.playersService = playersService;
        this.team = new _models_team_model__WEBPACK_IMPORTED_MODULE_1__["Team"]();
        this.user1 = new _models_user_model__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.user2 = new _models_user_model__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.user3 = new _models_user_model__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.contUser = 0;
        this.saved = false;
        this.notSaved = true;
      }

      _createClass(TeamComponent, [{
        key: "save",
        value: function save() {
          var _this29 = this;

          this.teamsService.addTeam(this.team).subscribe(function (team) {
            var data = team;
            var idTeam = data.id;

            _this29.readUser(idTeam);
          }, function (error) {
            return console.error('Error creating new Team: ' + error);
          });
        }
      }, {
        key: "readUser",
        value: function readUser(idTeam) {
          var _this30 = this;

          this.usersService.getUserByUserName(this.user1.username).subscribe(function (user) {
            var data = user;
            var idUser = data.iduser;

            _this30.changePlayerTeam(idUser);
          }, function (error) {
            return console.error('Error finding user ' + error);
          });
          this.usersService.getUserByUserName(this.user2.username).subscribe(function (user) {
            var data = user;
            var idUser = data.iduser;

            _this30.changePlayerTeam(idUser);
          }, function (error) {
            return console.error('Error finding user ' + error);
          });
          this.usersService.getUserByUserName(this.user3.username).subscribe(function (user) {
            var data = user;
            var idUser = data.iduser;

            _this30.changePlayerTeam(idUser);
          }, function (error) {
            return console.error('Error finding user ' + error);
          });
        }
      }, {
        key: "changePlayerTeam",
        value: function changePlayerTeam(idUser) {
          var _this31 = this;

          this.playersService.getPlayerByUserId(idUser).subscribe(function (player) {
            var data = player;
            var idPlayer = data.idPlayer;

            _this31.changeTeam(idPlayer, _this31.team);
          }, function (error) {
            return console.error('Error finding player ' + error);
          });
        }
      }, {
        key: "changeTeam",
        value: function changeTeam(idPlayer, team) {
          var _this32 = this;

          this.playersService.updatePlayerTeam(idPlayer, team).subscribe(function (player) {
            _this32.contUser++;

            if (_this32.contUser === 3) {
              _this32.saved = true;
              _this32.notSaved = false;
            }
          }, function (error) {
            return console.error('Error updating team ' + error);
          });
        }
      }]);

      return TeamComponent;
    }();

    TeamComponent.ɵfac = function TeamComponent_Factory(t) {
      return new (t || TeamComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servicies_teams_service__WEBPACK_IMPORTED_MODULE_4__["TeamsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servicies_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servicies_players_service__WEBPACK_IMPORTED_MODULE_6__["PlayersService"]));
    };

    TeamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TeamComponent,
      selectors: [["team"]],
      decls: 49,
      vars: 7,
      consts: [[1, "container"], [1, "form-group"], [1, "col-md-4", "control-label"], [1, "col-md-4", "inputGroupContainer"], [1, "input-group"], [1, "input-group-addon"], [1, "glyphicon", "glyphicon-user"], ["placeholder", "Your team name here", 1, "form-control", 3, "ngModel", "ngModelChange"], ["placeholder", "Username of first player", 1, "form-control", 3, "ngModel", "ngModelChange"], ["placeholder", "Username of secon player", 1, "form-control", 3, "ngModel", "ngModelChange"], ["placeholder", "Username of third player", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "button", 3, "click", 4, "ngIf"], [4, "ngIf"], ["class", "button", 3, "routerLink", 4, "ngIf"], [1, "button", 3, "click"], [1, "button", 3, "routerLink"]],
      template: function TeamComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "fieldset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Create team");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Team name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TeamComponent_Template_input_ngModelChange_18_listener($event) {
            return ctx.team.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "First player");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TeamComponent_Template_input_ngModelChange_26_listener($event) {
            return ctx.user1.username = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Second player");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TeamComponent_Template_input_ngModelChange_34_listener($event) {
            return ctx.user2.username = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Third player");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TeamComponent_Template_input_ngModelChange_42_listener($event) {
            return ctx.user3.username = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, TeamComponent_button_45_Template, 2, 0, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, TeamComponent_h3_46_Template, 2, 0, "h3", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, TeamComponent_button_48_Template, 2, 2, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.team.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user1.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user2.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user3.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.notSaved);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.saved);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.saved);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLink"]],
      styles: ["#success_message[_ngcontent-%COMP%]{ display: none;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhbS9zdHlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtCQUFrQixhQUFhLENBQUMiLCJmaWxlIjoic3JjL2FwcC90ZWFtL3N0eWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc3VjY2Vzc19tZXNzYWdleyBkaXNwbGF5OiBub25lO30iXX0= */", "html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  padding-top: 40px;\r\n  padding-bottom: 40px;\r\n  background-color: #f5f5f5;\r\n}\r\n\r\n.form-signin[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  max-width: 330px;\r\n  padding: 15px;\r\n  margin: auto;\r\n}\r\n\r\n.form-signin[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%] {\r\n  font-weight: 400;\r\n}\r\n\r\n.form-signin[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  box-sizing: border-box;\r\n  height: auto;\r\n  padding: 10px;\r\n  font-size: 16px;\r\n}\r\n\r\n.form-signin[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\r\n  z-index: 2;\r\n}\r\n\r\n.form-signin[_ngcontent-%COMP%]   input[type=\"email\"][_ngcontent-%COMP%] {\r\n  margin-bottom: -1px;\r\n  border-bottom-right-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n\r\n.form-signin[_ngcontent-%COMP%]   input[type=\"password\"][_ngcontent-%COMP%] {\r\n  margin-bottom: 10px;\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\r\n}\r\n\r\n.button[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  transition-duration: 1s;\r\n  color: white;\r\n  border-width: 2px;\r\n  border-style: inset;\r\n  border-radius: 10px;\r\n  transition-duration: 0.4s;\r\n  background-color: #1E90FF;\r\n  text-align: center;\r\n  -moz-text-align-last: center;\r\n       text-align-last: center;\r\n  font-size: 20px;\r\n  font-family: \"Lucida Sans Unicode\";\r\n  font-weight: auto;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-top: 30px;\r\n  margin-bottom: auto;\r\n}\r\n\r\n.button[_ngcontent-%COMP%]:hover {\r\n  color: black;\r\n  border-width: 2px;\r\n  border-style: inset;\r\n  border-radius: 10px;\r\n  transition-duration: 0.4s;\r\n  background-color: #87CEFA;\r\n  text-align: center;\r\n  -moz-text-align-last: center;\r\n       text-align-last: center;\r\n  font-size: 20px;\r\n  font-family: \"Lucida Sans Unicode\";\r\n  font-weight: auto;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-top: 30px;\r\n  margin-bottom: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhbS90ZWFtQ3JlYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxZQUFZO0FBQ2Q7O0FBRUE7RUFFRSxhQUFhO0VBRWIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxVQUFVO0FBQ1o7O0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLDRCQUE0QjtBQUM5Qjs7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsZUFBZTtFQUVmLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsNEJBQXVCO09BQXZCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2Ysa0NBQWtDO0VBQ2xDLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsNEJBQXVCO09BQXZCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2Ysa0NBQWtDO0VBQ2xDLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC90ZWFtL3RlYW1DcmVhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCxcclxuYm9keSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogNDBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG59XHJcblxyXG4uZm9ybS1zaWduaW4ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMzMwcHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuLmZvcm0tc2lnbmluIC5jaGVja2JveCB7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG4uZm9ybS1zaWduaW4gLmZvcm0tY29udHJvbCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5mb3JtLXNpZ25pbiAuZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcbi5mb3JtLXNpZ25pbiBpbnB1dFt0eXBlPVwiZW1haWxcIl0ge1xyXG4gIG1hcmdpbi1ib3R0b206IC0xcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxufVxyXG4uZm9ybS1zaWduaW4gaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItd2lkdGg6IDJweDtcclxuICBib3JkZXItc3R5bGU6IGluc2V0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUU5MEZGO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduLWxhc3Q6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiTHVjaWRhIFNhbnMgVW5pY29kZVwiO1xyXG4gIGZvbnQtd2VpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbn1cclxuXHJcbi5idXR0b246aG92ZXIge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBib3JkZXItd2lkdGg6IDJweDtcclxuICBib3JkZXItc3R5bGU6IGluc2V0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODdDRUZBO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduLWxhc3Q6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiTHVjaWRhIFNhbnMgVW5pY29kZVwiO1xyXG4gIGZvbnQtd2VpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'team',
          templateUrl: './team.component.html',
          styleUrls: ['./style.component.css', './teamCreation.component.css']
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _servicies_teams_service__WEBPACK_IMPORTED_MODULE_4__["TeamsService"]
        }, {
          type: _servicies_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"]
        }, {
          type: _servicies_players_service__WEBPACK_IMPORTED_MODULE_6__["PlayersService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/tournament/tournament.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/tournament/tournament.component.ts ***!
    \****************************************************/

  /*! exports provided: TournamentComponent */

  /***/
  function srcAppTournamentTournamentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TournamentComponent", function () {
      return TournamentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_play_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../models/play.model */
    "./src/app/models/play.model.ts");
    /* harmony import */


    var _models_tournament_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/tournament.model */
    "./src/app/models/tournament.model.ts");
    /* harmony import */


    var _models_team_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../models/team.model */
    "./src/app/models/team.model.ts");
    /* harmony import */


    var _servicies_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../_servicies/users.service */
    "./src/app/_servicies/users.service.ts");
    /* harmony import */


    var _servicies_tournament_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../_servicies/tournament.service */
    "./src/app/_servicies/tournament.service.ts");
    /* harmony import */


    var _servicies_players_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../_servicies/players.service */
    "./src/app/_servicies/players.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a1, a2) {
      return ["/updateMatch/", a1, a2];
    };

    function TournamentComponent_tr_52_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "form", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "form", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var elem_r25 = ctx.$implicit;

        var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](elem_r25.pos);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](elem_r25.round);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](elem_r25.name1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](elem_r25.elo1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](elem_r25.name2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](elem_r25.elo2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](elem_r25.date);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](elem_r25.nameWinner);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", elem_r25.name1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", elem_r25.elo1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", elem_r25.name2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", elem_r25.elo2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](13, _c0, ctx_r24.idTournament, elem_r25.pos));
      }
    }

    var GOOGLE_API = "https://maps.googleapis.com/maps/api/js?sensor=false";
    var GOOGLE_SCRIPT = "../assets/js/googleMap.js";

    var TournamentComponent =
    /*#__PURE__*/
    function () {
      function TournamentComponent(usersService, tournamentService, playersService, router, activatedRoute) {
        _classCallCheck(this, TournamentComponent);

        this.usersService = usersService;
        this.tournamentService = tournamentService;
        this.playersService = playersService;
        this.router = router;
        this.play = new _models_play_model__WEBPACK_IMPORTED_MODULE_1__["Play"]();
        this.tournament = new _models_tournament_model__WEBPACK_IMPORTED_MODULE_2__["Tournament"]();
        this.plays = new Array();
        this.team = new _models_team_model__WEBPACK_IMPORTED_MODULE_3__["Team"]();
        this.idTournament = activatedRoute.snapshot.params['idTournament'];
      }

      _createClass(TournamentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this33 = this;

          this.tournamentService.getPlays(this.idTournament).subscribe(function (play) {
            var data = play;

            for (var i = 0; i < data.length; i++) {
              data[i].pos = i + 1;

              _this33.plays.push(data[i]);

              console.log("pera");
            }
          }, function (error) {
            return console.error('Error finding plays' + error);
          });
          this.getTournament(this.idTournament);
        }
      }, {
        key: "getTournament",
        value: function getTournament(id) {
          var _this34 = this;

          this.tournamentService.getTournamentById(this.idTournament).subscribe(function (tournament) {
            var data = tournament;
            _this34.tournament.name = data.name;
            _this34.tournament.numTeams = data.numTeams;
            _this34.tournament.latitude = data.latitude;
            _this34.tournament.longitude = data.longitude;
            loadMap.func1(_this34.tournament.latitude, _this34.tournament.longitude);
          }, function (error) {
            return console.error('Error finding tournament' + error);
          });
        }
      }, {
        key: "addTeamToTournament",
        value: function addTeamToTournament() {
          var _this35 = this;

          this.username = this.usersService.getActualUserName();
          this.usersService.getUserByUserName(this.username).subscribe(function (usr) {
            _this35.playersService.getPlayerByUserId(usr.iduser).subscribe(function (plyr) {
              _this35.team = plyr.team;

              _this35.joinTournament();
            }, function (error) {
              console.error('Error finding player' + error);
            });
          }, function (error) {
            console.error('Error finding user' + error);
          });
        }
      }, {
        key: "joinTournament",
        value: function joinTournament() {
          this.tournamentService.joinTournament(this.idTournament, this.team).subscribe(function (_) {
            window.location.reload();
          }, function (error) {
            return console.error('Error joining tournament: ' + error);
          });
        }
      }]);

      return TournamentComponent;
    }();

    TournamentComponent.ɵfac = function TournamentComponent_Factory(t) {
      return new (t || TournamentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servicies_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servicies_tournament_service__WEBPACK_IMPORTED_MODULE_5__["TournamentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servicies_players_service__WEBPACK_IMPORTED_MODULE_6__["PlayersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]));
    };

    TournamentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TournamentComponent,
      selectors: [["tournament"]],
      decls: 55,
      vars: 2,
      consts: [["lang", "en"], ["charset", "utf-8"], ["http-equiv", "X-UA-Compatible", "content", "IE=edge,chrome=1"], ["name", "viewport", "content", "width=device-width,initial-scale=1.0"], ["href", "https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css", "rel", "stylesheet"], ["href", "https://fonts.googleapis.com/css?family=Holtwood+One+SC", "rel", "stylesheet", "type", "text/css"], ["href", "https://fonts.googleapis.com/css?family=Kaushan+Script|Herr+Von+Muellerhoff", "rel", "stylesheet", "type", "text/css"], ["href", "https://fonts.googleapis.com/css?family=Abel", "rel", "stylesheet", "type", "text/css"], ["href", "https://fonts.googleapis.com/css?family=Istok+Web|Roboto+Condensed:700", "rel", "stylesheet", "type", "text/css"], [1, "hero"], [1, "hero-wrap"], ["id", "intro", 1, "intro"], ["id", "headline"], [1, "year"], [2, "text-align", "center"], ["type", "submit", "value", "Join Tournament", 1, "button", 3, "click"], [1, "d-flex", "justify-content-center"], ["id", "map_container"], [1, "card", "mb-4"], [1, "card-body"], [1, "row"], [1, "col-md-12"], [1, "pt-5", "pb-4", "text-center", "font-bold", "font-up"], [1, "table", "table-striped"], ["id", "table"], [4, "ngFor", "ngForOf"], ["id", "loader", 1, "d-flex", "justify-content-center"], ["scope", "row"], ["action", "/gameData"], ["type", "hidden", "name", "name1", 3, "value"], ["type", "hidden", "name", "elo1", 3, "value"], ["type", "hidden", "name", "name2", 3, "value"], ["type", "hidden", "name", "elo2", 3, "value"], [3, "routerLink"], ["type", "submit", "value", "UpdateMatch", 1, "button"]],
      template: function TournamentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "meta", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "link", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "link", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "link", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "link", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "link", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Diamonds Tournament");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "header", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Rocket League");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h1", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TournamentComponent_Template_input_click_23_listener() {
            return ctx.addTeamToTournament();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "h2", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "table", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Round");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Name team 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Elo team 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Name team 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Elo team 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Winner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "tbody", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, TournamentComponent_tr_52_Template, 25, 16, "tr", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.tournament.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.plays);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"]],
      styles: ["body[_ngcontent-%COMP%] {\r\n    font-family: 'Istok Web', sans-serif;\r\n    background: #00BFFF;\r\n    background-size: cover;\r\n    min-height: 100%;\r\n    margin: 0;\r\n}\r\n\r\n\r\ndiv#map_container[_ngcontent-%COMP%]{\r\n\twidth: 100%;\r\n\theight:500px;\r\n}\r\n\r\n\r\n.hero[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    text-align: center;\r\n    overflow: hidden;\r\n    color: #00FFFF;\r\n}\r\n\r\n\r\n.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-family: 'Holtwood One SC', serif;\r\n    font-weight: normal;\r\n    font-size: 5.4em;\r\n    margin: 0 0 20px;\r\n    text-shadow: 0 0 12px rgba(0, 0, 0, 0.5);\r\n    text-transform: uppercase;\r\n    letter-spacing: -1px;\r\n}\r\n\r\n\r\n.hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-family: 'Abel', sans-serif;\r\n    text-transform: uppercase;\r\n    color: #5CCA87;\r\n    letter-spacing: 6px;\r\n    text-shadow: 0 0 12px rgba(0, 0, 0, 0.5);\r\n    font-size: 1.2em;\r\n}\r\n\r\n\r\n.hero-wrap[_ngcontent-%COMP%] {\r\n    padding: 3.5em 10px;\r\n    background: url('diamond.jpg');\r\n}\r\n\r\n\r\n.hero[_ngcontent-%COMP%]   p.intro[_ngcontent-%COMP%] {\r\n    font-family: 'Holtwood One SC', serif;\r\n    text-transform: uppercase;\r\n    letter-spacing: 1px;\r\n    font-size: 3em;\r\n    margin-bottom: -40px;\r\n    color: #01A9DB;\r\n}\r\n\r\n\r\n.hero[_ngcontent-%COMP%]   p.year[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    letter-spacing: 20px;\r\n    font-size: 34px;\r\n    margin: -25px 0 25px;\r\n}\r\n\r\n\r\n.hero[_ngcontent-%COMP%]   p.year[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    vertical-align: middle;\r\n}\r\n\r\n\r\n#bracket[_ngcontent-%COMP%] {\r\n    overflow: hidden;\r\n    background-color: #e1e1e1;\r\n    background-color: rgba(225, 225, 225, 0.9);\r\n    padding-top: 20px;\r\n    font-size: 12px;\r\n    padding: 40px 0;\r\n}\r\n\r\n\r\n.container[_ngcontent-%COMP%] {\r\n    max-width: 1100px;\r\n    margin: 0 auto;\r\n    display: block;\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n\r\n.split[_ngcontent-%COMP%] {\r\n    display: block;\r\n    float: left;\r\n    display: flex;\r\n    width: 42%;\r\n    -moz-flex-direction: row;\r\n    flex-direction: row;\r\n}\r\n\r\n\r\n.champion[_ngcontent-%COMP%] {\r\n    float: left;\r\n    display: block;\r\n    width: 16%;\r\n    flex-direction: row;\r\n    align-self: center;\r\n    margin-top: -15px;\r\n    text-align: center;\r\n    padding: 230px 0\\9;\r\n}\r\n\r\n\r\n.champion[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    color: #a0a6a8;\r\n    font-size: 45px;\r\n    padding: 10px 0;\r\n}\r\n\r\n\r\n.round[_ngcontent-%COMP%] {\r\n    display: block;\r\n    float: left;\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 95%;\r\n    width: 30.8333%\\9;\r\n}\r\n\r\n\r\n.split-two[_ngcontent-%COMP%] {}\r\n\r\n\r\n.split-one[_ngcontent-%COMP%]   .round[_ngcontent-%COMP%] {\r\n    margin: 0 2.5% 0 0;\r\n}\r\n\r\n\r\n.split-two[_ngcontent-%COMP%]   .round[_ngcontent-%COMP%] {\r\n    margin: 0 0 0 2.5%;\r\n}\r\n\r\n\r\n.matchup[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    width: 100%;\r\n    padding: 10px 0;\r\n    height: 60px;\r\n    transition: all 0.2s;\r\n}\r\n\r\n\r\n.score[_ngcontent-%COMP%] {\r\n    font-size: 11px;\r\n    text-transform: uppercase;\r\n    float: right;\r\n    color: #2C7399;\r\n    font-weight: bold;\r\n    font-family: 'Roboto Condensed', sans-serif;\r\n    position: absolute;\r\n    right: 5px;\r\n}\r\n\r\n\r\n.team[_ngcontent-%COMP%] {\r\n    padding: 0 5px;\r\n    margin: 3px 0;\r\n    height: 25px;\r\n    line-height: 25px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    position: relative;\r\n}\r\n\r\n\r\n.round-two[_ngcontent-%COMP%]   .matchup[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    height: 60px;\r\n    padding: 50px 0;\r\n}\r\n\r\n\r\n.round-three[_ngcontent-%COMP%]   .matchup[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    height: 60px;\r\n    padding: 130px 0;\r\n}\r\n\r\n\r\n.round-details[_ngcontent-%COMP%] {\r\n    font-family: 'Roboto Condensed', sans-serif;\r\n    font-size: 13px;\r\n    color: #2C7399;\r\n    text-transform: uppercase;\r\n    text-align: center;\r\n    height: 40px;\r\n}\r\n\r\n\r\n.champion[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .round[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    background-color: #fff;\r\n    box-shadow: none;\r\n    opacity: 0.45;\r\n}\r\n\r\n\r\n.current[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    opacity: 1;\r\n}\r\n\r\n\r\n.current[_ngcontent-%COMP%]   li.team[_ngcontent-%COMP%] {\r\n    background-color: #fff;\r\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);\r\n    opacity: 1;\r\n}\r\n\r\n\r\n.vote-options[_ngcontent-%COMP%] {\r\n    display: block;\r\n    height: 52px;\r\n}\r\n\r\n\r\n.share[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\r\n    margin: 0 auto;\r\n    text-align: center;\r\n}\r\n\r\n\r\n.share-icon[_ngcontent-%COMP%] {\r\n    font-size: 24px;\r\n    color: #fff;\r\n    padding: 25px;\r\n}\r\n\r\n\r\n.share-wrap[_ngcontent-%COMP%] {\r\n    max-width: 1100px;\r\n    text-align: center;\r\n    margin: 60px auto;\r\n}\r\n\r\n\r\n.final[_ngcontent-%COMP%] {\r\n    margin: 4.5em 0;\r\n}\r\n\r\n\r\n@-webkit-keyframes pulse {\r\n    0% {\r\n        transform: scale(1);\r\n    }\r\n\r\n    50% {\r\n        transform: scale(1.3);\r\n    }\r\n\r\n    100% {\r\n        transform: scale(1);\r\n    }\r\n}\r\n\r\n\r\n@keyframes pulse {\r\n    0% {\r\n        transform: scale(1);\r\n    }\r\n\r\n    50% {\r\n        transform: scale(1.3);\r\n    }\r\n\r\n    100% {\r\n        transform: scale(1);\r\n    }\r\n}\r\n\r\n\r\n.share-icon[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    opacity: 0.35;\r\n}\r\n\r\n\r\n.share-icon[_ngcontent-%COMP%]:hover {\r\n    opacity: 1;\r\n    -webkit-animation: pulse 0.5s;\r\n    animation: pulse 0.5s;\r\n}\r\n\r\n\r\n.date[_ngcontent-%COMP%] {\r\n    font-size: 10px;\r\n    font: bold;\r\n    letter-spacing: 2px;\r\n    font-family: 'Istok Web', sans-serif, ;\r\n    color: #0000FF;\r\n}\r\n\r\n\r\n@media screen and (min-width: 981px) and (max-width: 1099px) {\r\n    .container[_ngcontent-%COMP%] {\r\n        margin: 0 1%;\r\n    }\r\n\r\n    .champion[_ngcontent-%COMP%] {\r\n        width: 14%;\r\n    }\r\n\r\n    .split[_ngcontent-%COMP%] {\r\n        width: 43%;\r\n    }\r\n\r\n    .split-one[_ngcontent-%COMP%]   .vote-box[_ngcontent-%COMP%] {\r\n        margin-left: 138px;\r\n    }\r\n\r\n    .hero[_ngcontent-%COMP%]   p.intro[_ngcontent-%COMP%] {\r\n        font-size: 28px;\r\n    }\r\n\r\n    .hero[_ngcontent-%COMP%]   p.year[_ngcontent-%COMP%] {\r\n        margin: 5px 0 10px;\r\n    }\r\n\r\n}\r\n\r\n\r\n@media screen and (max-width: 980px) {\r\n    .container[_ngcontent-%COMP%] {\r\n        -moz-flex-direction: column;\r\n        flex-direction: column;\r\n    }\r\n\r\n    .split[_ngcontent-%COMP%], .champion[_ngcontent-%COMP%] {\r\n        width: 90%;\r\n        margin: 35px 5%;\r\n    }\r\n\r\n    .champion[_ngcontent-%COMP%] {\r\n        order: 3;\r\n    }\r\n\r\n    .split[_ngcontent-%COMP%] {\r\n        border-bottom: 1px solid #b6b6b6;\r\n        padding-bottom: 20px;\r\n    }\r\n\r\n    .hero[_ngcontent-%COMP%]   p.intro[_ngcontent-%COMP%] {\r\n        font-size: 24px;\r\n    }\r\n\r\n    .hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n        font-size: 3em;\r\n        margin: 15px 0;\r\n    }\r\n\r\n    .hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        font-size: 1em;\r\n    }\r\n}\r\n\r\n\r\n@media screen and (max-width: 400px) {\r\n\r\n    .split[_ngcontent-%COMP%] {\r\n        width: 95%;\r\n        margin: 25px 2.5%;\r\n    }\r\n\r\n    .round[_ngcontent-%COMP%] {\r\n        width: 21%;\r\n    }\r\n\r\n    .current[_ngcontent-%COMP%] {\r\n        -moz-flex-grow: 1;\r\n        flex-grow: 1;\r\n    }\r\n\r\n    .hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n        font-size: 2.15em;\r\n        letter-spacing: 0;\r\n        margin: 0;\r\n    }\r\n\r\n    .hero[_ngcontent-%COMP%]   p.intro[_ngcontent-%COMP%] {\r\n        font-size: 1.15em;\r\n        margin-bottom: -10px;\r\n    }\r\n\r\n    .round-details[_ngcontent-%COMP%] {\r\n        font-size: 90%;\r\n    }\r\n\r\n    .hero-wrap[_ngcontent-%COMP%] {\r\n        padding: 2.5em;\r\n    }\r\n\r\n    .hero[_ngcontent-%COMP%]   p.year[_ngcontent-%COMP%] {\r\n        margin: 5px 0 10px;\r\n        font-size: 18px;\r\n    }\r\n\r\n}\r\n\r\n\r\n.button[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    transition-duration: 1s;\r\n    color: white;\r\n    border-width: px;\r\n    border-radius: 10px;\r\n    transition-duration: 0.4s;\r\n    background-color: #2ECCFA;\r\n    text-align: center;\r\n    -moz-text-align-last: center;\r\n         text-align-last: center;\r\n    font-size: 20px;\r\n    font-family: \"Lucida Sans Unicode\";\r\n    font-weight: auto;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: auto;\r\n    margin-bottom: auto;\r\n}\r\n\r\n\r\n.button[_ngcontent-%COMP%]:hover {\r\n    color: black;\r\n    border-width: 2px;\r\n    border-radius: 10px;\r\n    transition-duration: 0.4s;\r\n    background-color: white;\r\n    text-align: center;\r\n    -moz-text-align-last: center;\r\n         text-align-last: center;\r\n    font-size: 20px;\r\n    font-family: \"Lucida Sans Unicode\";\r\n    font-weight: auto;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: auto;\r\n    margin-bottom: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG91cm5hbWVudC9kaWFtb25kcy10b3VybmFtZW50LXN0eWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQ0FBb0M7SUFDcEMsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsU0FBUztBQUNiOzs7QUFHQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0FBQ2I7OztBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsd0NBQXdDO0lBQ3hDLHlCQUF5QjtJQUN6QixvQkFBb0I7QUFDeEI7OztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLHdDQUF3QztJQUN4QyxnQkFBZ0I7QUFDcEI7OztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLDhCQUF5QztBQUM3Qzs7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLGNBQWM7QUFDbEI7OztBQUVBO0lBQ0ksV0FBVztJQUNYLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2Ysb0JBQW9CO0FBQ3hCOzs7QUFFQTtJQUNJLGVBQWU7SUFDZixzQkFBc0I7QUFDMUI7OztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QiwwQ0FBMEM7SUFDMUMsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixlQUFlO0FBQ25COzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsY0FBYztJQU1kLGFBQWE7SUFFYixtQkFBbUI7QUFDdkI7OztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFLWCxhQUFhO0lBQ2IsVUFBVTtJQUVWLHdCQUF3QjtJQUN4QixtQkFBbUI7QUFDdkI7OztBQUVBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxVQUFVO0lBRVYsbUJBQW1CO0lBRW5CLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGVBQWU7QUFDbkI7OztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFLWCxhQUFhO0lBRWIsc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixpQkFBaUI7QUFDckI7OztBQUVBLFlBQVk7OztBQUVaO0lBQ0ksa0JBQWtCO0FBQ3RCOzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsV0FBVztJQUNYLGVBQWU7SUFDZixZQUFZO0lBRVosb0JBQW9CO0FBQ3hCOzs7QUFFQTtJQUNJLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsMkNBQTJDO0lBQzNDLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7OztBQUVBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOzs7QUFFQTtJQUNJLFNBQVM7SUFDVCxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSwyQ0FBMkM7SUFDM0MsZUFBZTtJQUNmLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7OztBQUVBOztJQUVJLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjs7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7OztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHdDQUF3QztJQUN4QyxVQUFVO0FBQ2Q7OztBQUVBO0lBQ0ksY0FBYztJQUNkLFlBQVk7QUFDaEI7OztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLGFBQWE7QUFDakI7OztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7OztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7O0FBRUE7SUFDSTtRQUVJLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUVJLHFCQUFxQjtJQUN6Qjs7SUFFQTtRQUVJLG1CQUFtQjtJQUN2QjtBQUNKOzs7QUFFQTtJQUNJO1FBR0ksbUJBQW1CO0lBQ3ZCOztJQUVBO1FBR0kscUJBQXFCO0lBQ3pCOztJQUVBO1FBR0ksbUJBQW1CO0lBQ3ZCO0FBQ0o7OztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7QUFDakI7OztBQUVBO0lBQ0ksVUFBVTtJQUNWLDZCQUE2QjtJQUM3QixxQkFBcUI7QUFDekI7OztBQUVBO0lBQ0ksZUFBZTtJQUNmLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsc0NBQXNDO0lBQ3RDLGNBQWM7QUFDbEI7OztBQUlBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0ksa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0Qjs7QUFFSjs7O0FBRUE7SUFDSTtRQUVJLDJCQUEyQjtRQUMzQixzQkFBc0I7SUFDMUI7O0lBRUE7O1FBRUksVUFBVTtRQUNWLGVBQWU7SUFDbkI7O0lBRUE7UUFLSSxRQUFRO0lBQ1o7O0lBRUE7UUFDSSxnQ0FBZ0M7UUFDaEMsb0JBQW9CO0lBQ3hCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGNBQWM7UUFDZCxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksY0FBYztJQUNsQjtBQUNKOzs7QUFHQTs7SUFFSTtRQUNJLFVBQVU7UUFDVixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7O0lBRUE7UUFFSSxpQkFBaUI7UUFDakIsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDakIsU0FBUztJQUNiOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLG9CQUFvQjtJQUN4Qjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLGVBQWU7SUFDbkI7O0FBRUo7OztBQUVBO0lBQ0ksZUFBZTtJQUVmLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQiw0QkFBdUI7U0FBdkIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixrQ0FBa0M7SUFDbEMsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQiw0QkFBdUI7U0FBdkIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixrQ0FBa0M7SUFDbEMsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL3RvdXJuYW1lbnQvZGlhbW9uZHMtdG91cm5hbWVudC1zdHlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogJ0lzdG9rIFdlYicsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDBCRkZGO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcblxyXG5kaXYjbWFwX2NvbnRhaW5lcntcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6NTAwcHg7XHJcbn1cclxuXHJcblxyXG4uaGVybyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgY29sb3I6ICMwMEZGRkY7XHJcbn1cclxuXHJcbi5oZXJvIGgxIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnSG9sdHdvb2QgT25lIFNDJywgc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiA1LjRlbTtcclxuICAgIG1hcmdpbjogMCAwIDIwcHg7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDEycHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMXB4O1xyXG59XHJcblxyXG4uaGVybyBwIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQWJlbCcsIHNhbnMtc2VyaWY7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6ICM1Q0NBODc7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogNnB4O1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMCAxMnB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbn1cclxuXHJcbi5oZXJvLXdyYXAge1xyXG4gICAgcGFkZGluZzogMy41ZW0gMTBweDtcclxuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvZGlhbW9uZC5qcGcpO1xyXG59XHJcblxyXG4uaGVybyBwLmludHJvIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnSG9sdHdvb2QgT25lIFNDJywgc2VyaWY7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIGZvbnQtc2l6ZTogM2VtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTQwcHg7XHJcbiAgICBjb2xvcjogIzAxQTlEQjtcclxufVxyXG5cclxuLmhlcm8gcC55ZWFyIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDM0cHg7XHJcbiAgICBtYXJnaW46IC0yNXB4IDAgMjVweDtcclxufVxyXG5cclxuLmhlcm8gcC55ZWFyIGkge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuI2JyYWNrZXQge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMWUxZTE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNSwgMjI1LCAyMjUsIDAuOSk7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHBhZGRpbmc6IDQwcHggMDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDExMDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC1tb3otYm94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLnNwbGl0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC1tb3otYm94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDQyJTtcclxuICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIC1tb3otZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbi5jaGFtcGlvbiB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDE2JTtcclxuICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAtd2Via2l0LWFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IC0xNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMjMwcHggMFxcOTtcclxufVxyXG5cclxuLmNoYW1waW9uIGkge1xyXG4gICAgY29sb3I6ICNhMGE2YTg7XHJcbiAgICBmb250LXNpemU6IDQ1cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbn1cclxuXHJcbi5yb3VuZCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgd2lkdGg6IDMwLjgzMzMlXFw5O1xyXG59XHJcblxyXG4uc3BsaXQtdHdvIHt9XHJcblxyXG4uc3BsaXQtb25lIC5yb3VuZCB7XHJcbiAgICBtYXJnaW46IDAgMi41JSAwIDA7XHJcbn1cclxuXHJcbi5zcGxpdC10d28gLnJvdW5kIHtcclxuICAgIG1hcmdpbjogMCAwIDAgMi41JTtcclxufVxyXG5cclxuLm1hdGNodXAge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbn1cclxuXHJcbi5zY29yZSB7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgY29sb3I6ICMyQzczOTk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogNXB4O1xyXG59XHJcblxyXG4udGVhbSB7XHJcbiAgICBwYWRkaW5nOiAwIDVweDtcclxuICAgIG1hcmdpbjogM3B4IDA7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ucm91bmQtdHdvIC5tYXRjaHVwIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHBhZGRpbmc6IDUwcHggMDtcclxufVxyXG5cclxuLnJvdW5kLXRocmVlIC5tYXRjaHVwIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHBhZGRpbmc6IDEzMHB4IDA7XHJcbn1cclxuXHJcbi5yb3VuZC1kZXRhaWxzIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBjb2xvcjogIzJDNzM5OTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbi5jaGFtcGlvbiBsaSxcclxuLnJvdW5kIGxpIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgb3BhY2l0eTogMC40NTtcclxufVxyXG5cclxuLmN1cnJlbnQgbGkge1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLmN1cnJlbnQgbGkudGVhbSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi52b3RlLW9wdGlvbnMge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDUycHg7XHJcbn1cclxuXHJcbi5zaGFyZSAuY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc2hhcmUtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbn1cclxuXHJcbi5zaGFyZS13cmFwIHtcclxuICAgIG1heC13aWR0aDogMTEwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiA2MHB4IGF1dG87XHJcbn1cclxuXHJcbi5maW5hbCB7XHJcbiAgICBtYXJnaW46IDQuNWVtIDA7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBwdWxzZSB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB9XHJcblxyXG4gICAgNTAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4zKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XHJcbiAgICB9XHJcblxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcHVsc2Uge1xyXG4gICAgMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgfVxyXG5cclxuICAgIDUwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMyk7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4zKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XHJcbiAgICB9XHJcblxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zaGFyZS1pY29uIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgb3BhY2l0eTogMC4zNTtcclxufVxyXG5cclxuLnNoYXJlLWljb246aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBwdWxzZSAwLjVzO1xyXG4gICAgYW5pbWF0aW9uOiBwdWxzZSAwLjVzO1xyXG59XHJcblxyXG4uZGF0ZSB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBmb250OiBib2xkO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnSXN0b2sgV2ViJywgc2Fucy1zZXJpZiwgO1xyXG4gICAgY29sb3I6ICMwMDAwRkY7XHJcbn1cclxuXHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTgxcHgpIGFuZCAobWF4LXdpZHRoOiAxMDk5cHgpIHtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIG1hcmdpbjogMCAxJTtcclxuICAgIH1cclxuXHJcbiAgICAuY2hhbXBpb24ge1xyXG4gICAgICAgIHdpZHRoOiAxNCU7XHJcbiAgICB9XHJcblxyXG4gICAgLnNwbGl0IHtcclxuICAgICAgICB3aWR0aDogNDMlO1xyXG4gICAgfVxyXG5cclxuICAgIC5zcGxpdC1vbmUgLnZvdGUtYm94IHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTM4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmhlcm8gcC5pbnRybyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5oZXJvIHAueWVhciB7XHJcbiAgICAgICAgbWFyZ2luOiA1cHggMCAxMHB4O1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTgwcHgpIHtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAtbW96LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuXHJcbiAgICAuc3BsaXQsXHJcbiAgICAuY2hhbXBpb24ge1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgbWFyZ2luOiAzNXB4IDUlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jaGFtcGlvbiB7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtb3JkaW5hbC1ncm91cDogMztcclxuICAgICAgICAtbW96LWJveC1vcmRpbmFsLWdyb3VwOiAzO1xyXG4gICAgICAgIC1tcy1mbGV4LW9yZGVyOiAzO1xyXG4gICAgICAgIC13ZWJraXQtb3JkZXI6IDM7XHJcbiAgICAgICAgb3JkZXI6IDM7XHJcbiAgICB9XHJcblxyXG4gICAgLnNwbGl0IHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2I2YjZiNjtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAuaGVybyBwLmludHJvIHtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmhlcm8gaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogM2VtO1xyXG4gICAgICAgIG1hcmdpbjogMTVweCAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5oZXJvIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcclxuXHJcbiAgICAuc3BsaXQge1xyXG4gICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgbWFyZ2luOiAyNXB4IDIuNSU7XHJcbiAgICB9XHJcblxyXG4gICAgLnJvdW5kIHtcclxuICAgICAgICB3aWR0aDogMjElO1xyXG4gICAgfVxyXG5cclxuICAgIC5jdXJyZW50IHtcclxuICAgICAgICAtd2Via2l0LWZsZXgtZ3JvdzogMTtcclxuICAgICAgICAtbW96LWZsZXgtZ3JvdzogMTtcclxuICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgLmhlcm8gaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi4xNWVtO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuXHJcbiAgICAuaGVybyBwLmludHJvIHtcclxuICAgICAgICBmb250LXNpemU6IDEuMTVlbTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAtMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAucm91bmQtZGV0YWlscyB7XHJcbiAgICAgICAgZm9udC1zaXplOiA5MCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmhlcm8td3JhcCB7XHJcbiAgICAgICAgcGFkZGluZzogMi41ZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmhlcm8gcC55ZWFyIHtcclxuICAgICAgICBtYXJnaW46IDVweCAwIDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItd2lkdGg6IHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkVDQ0ZBO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbi1sYXN0OiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogXCJMdWNpZGEgU2FucyBVbmljb2RlXCI7XHJcbiAgICBmb250LXdlaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbn1cclxuXHJcbi5idXR0b246aG92ZXIge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbi1sYXN0OiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogXCJMdWNpZGEgU2FucyBVbmljb2RlXCI7XHJcbiAgICBmb250LXdlaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TournamentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'tournament',
          templateUrl: './tournament.component.html',
          styleUrls: ['./diamonds-tournament-style.component.css']
        }]
      }], function () {
        return [{
          type: _servicies_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"]
        }, {
          type: _servicies_tournament_service__WEBPACK_IMPORTED_MODULE_5__["TournamentService"]
        }, {
          type: _servicies_players_service__WEBPACK_IMPORTED_MODULE_6__["PlayersService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/updateMatch/updateMatch.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/updateMatch/updateMatch.component.ts ***!
    \******************************************************/

  /*! exports provided: UpdateMatchComponent */

  /***/
  function srcAppUpdateMatchUpdateMatchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateMatchComponent", function () {
      return UpdateMatchComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_play_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../models/play.model */
    "./src/app/models/play.model.ts");
    /* harmony import */


    var _servicies_match_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../_servicies/match.service */
    "./src/app/_servicies/match.service.ts");
    /* harmony import */


    var _servicies_tournament_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../_servicies/tournament.service */
    "./src/app/_servicies/tournament.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _servicies_teams_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../_servicies/teams.service */
    "./src/app/_servicies/teams.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var UpdateMatchComponent =
    /*#__PURE__*/
    function () {
      function UpdateMatchComponent(matchservice, tournamentservice, router, activatedRoute, teamsservice) {
        _classCallCheck(this, UpdateMatchComponent);

        this.matchservice = matchservice;
        this.tournamentservice = tournamentservice;
        this.router = router;
        this.teamsservice = teamsservice;
        this.play = new _models_play_model__WEBPACK_IMPORTED_MODULE_1__["Play"]();
        this.resultArray = new Array();
        this.idTournament = activatedRoute.snapshot.params['idTournament'];
        this.idPlay = activatedRoute.snapshot.params['pos'];
        this.id = new Array();
      }

      _createClass(UpdateMatchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this36 = this;

          this.resultArray[0] = new _servicies_match_service__WEBPACK_IMPORTED_MODULE_2__["resultBody"]();
          this.resultArray[1] = new _servicies_match_service__WEBPACK_IMPORTED_MODULE_2__["resultBody"]();
          this.tournamentservice.getPlays(this.idTournament).subscribe(function (response) {
            var data = response;
            _this36.play = data[_this36.idPlay - 1];
          }, function (error) {
            return console.error('Error finding plays' + error);
          });
        }
      }, {
        key: "updateGame",
        value: function updateGame() {
          var _this37 = this;

          this.matchservice.getGames(this.idTournament).subscribe(function (response) {
            var data = response;
            _this37.games = response;

            _this37.tournamentservice.getPlays(_this37.idTournament).subscribe(function (response) {
              var data = response;
              _this37.play = data[_this37.idPlay - 1];

              _this37.teamsservice.getTeambyName(_this37.play.name1).subscribe(function (response) {
                var data = response;
                _this37.team = data;
                _this37.id[0] = _this37.team.id;

                _this37.teamsservice.getTeambyName(_this37.play.name2).subscribe(function (response) {
                  var data = response;
                  _this37.team = data;
                  _this37.id[1] = _this37.team.id;

                  if (_this37.winnerName === _this37.play.name1) {
                    _this37.resultArray[0].winner = true;
                    _this37.resultArray[1].winner = false;
                  } else {
                    _this37.resultArray[0].winner = false;
                    _this37.resultArray[1].winner = true;
                  }

                  _this37.matchservice.updateMatch(_this37.games, _this37.idPlay, _this37.id, _this37.resultArray);

                  window.history.back();
                }, function (error) {
                  return console.error('Error finding team' + error);
                });
              });
            }, function (error) {
              return console.error('Error finding plays' + error);
            });
          }, function (error) {
            return console.error('Error finding plays' + error);
          });
        }
      }]);

      return UpdateMatchComponent;
    }();

    UpdateMatchComponent.ɵfac = function UpdateMatchComponent_Factory(t) {
      return new (t || UpdateMatchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servicies_match_service__WEBPACK_IMPORTED_MODULE_2__["MatchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servicies_tournament_service__WEBPACK_IMPORTED_MODULE_3__["TournamentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servicies_teams_service__WEBPACK_IMPORTED_MODULE_5__["TeamsService"]));
    };

    UpdateMatchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UpdateMatchComponent,
      selectors: [["updateMatch"]],
      decls: 45,
      vars: 9,
      consts: [["charset", "ISO-8859-1"], ["href", "https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css", "rel", "stylesheet"], ["href", "https://fonts.googleapis.com/css?family=Holtwood+One+SC", "rel", "stylesheet", "type", "text/css"], ["href", "https://fonts.googleapis.com/css?family=Kaushan+Script|Herr+Von+Muellerhoff", "rel", "stylesheet", "type", "text/css"], ["href", "https://fonts.googleapis.com/css?family=Abel", "rel", "stylesheet", "type", "text/css"], ["href", "https://fonts.googleapis.com/css?family=Istok+Web|Roboto+Condensed:700", "rel", "stylesheet", "type", "text/css"], ["href", "/css/Tournament/diamonds-tournament-style.css", "rel", "stylesheet", "type", "text/css"], ["href", "/core/bootstrap.min.css", "rel", "stylesheet"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-body"], [1, "container-fluid"], [1, "row", "align-items-center"], [1, "col-md-4", "ml-auto"], [1, "align-middle"], ["type", "hidden", "name", "team1Name", 3, "value"], ["type", "hidden", "name", "team2Name", 3, "value"], ["type", "number", "name", "puntuation1", "placeholder", "Team 1 result", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "puntuation2", "placeholder", "Team 2 result", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "winner", "placeholder", "Name of the winner team", 3, "ngModel", "ngModelChange"], ["type", "submit", "value", "Submit", 3, "click"]],
      template: function UpdateMatchComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "link", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "link", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "link", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "link", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "link", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "link", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "link", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Play page");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Mach is in progress");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Update game");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateMatchComponent_Template_input_ngModelChange_41_listener($event) {
            return ctx.resultArray[0].result = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateMatchComponent_Template_input_ngModelChange_42_listener($event) {
            return ctx.resultArray[1].result = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateMatchComponent_Template_input_ngModelChange_43_listener($event) {
            return ctx.winnerName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateMatchComponent_Template_input_click_44_listener() {
            return ctx.updateGame();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("NAME: ", ctx.play.name1, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("NAME: ", ctx.play.name2, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("ELO: ", ctx.play.elo1, "pt");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("ELO: ", ctx.play.elo2, "pt");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.play.name1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.play.name2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.resultArray[0].result);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.resultArray[1].result);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.winnerName);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdateMatchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'updateMatch',
          templateUrl: './updateMatch.component.html'
        }]
      }], function () {
        return [{
          type: _servicies_match_service__WEBPACK_IMPORTED_MODULE_2__["MatchService"]
        }, {
          type: _servicies_tournament_service__WEBPACK_IMPORTED_MODULE_3__["TournamentService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _servicies_teams_service__WEBPACK_IMPORTED_MODULE_5__["TeamsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/updateProfile/updateProfile.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/updateProfile/updateProfile.component.ts ***!
    \**********************************************************/

  /*! exports provided: UpdateProfileComponent */

  /***/
  function srcAppUpdateProfileUpdateProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateProfileComponent", function () {
      return UpdateProfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_upwrapper_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../models/upwrapper.model */
    "./src/app/models/upwrapper.model.ts");
    /* harmony import */


    var _servicies_players_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../_servicies/players.service */
    "./src/app/_servicies/players.service.ts");
    /* harmony import */


    var _servicies_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../_servicies/profile.service */
    "./src/app/_servicies/profile.service.ts");
    /* harmony import */


    var _servicies_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../_servicies/users.service */
    "./src/app/_servicies/users.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var UpdateProfileComponent =
    /*#__PURE__*/
    function () {
      function UpdateProfileComponent(playerService, profileService, usersService) {
        _classCallCheck(this, UpdateProfileComponent);

        this.playerService = playerService;
        this.profileService = profileService;
        this.usersService = usersService;
        this.wrapper = new _models_upwrapper_model__WEBPACK_IMPORTED_MODULE_1__["UserPlayerWrapper"]();
      }

      _createClass(UpdateProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this38 = this;

          this.username = this.usersService.getActualUserName();
          console.log(this.username);
          this.usersService.getUserByUserName(this.username).subscribe(function (usr) {
            _this38.user = usr;
            console.log(_this38.user.iduser);

            _this38.playerService.getPlayerByUserId(_this38.user.iduser).subscribe(function (plyr) {
              _this38.player = plyr;
            }, function (error) {
              console.error('Error finding player' + error);
            });
          }, function (error) {
            console.error('Error finding user' + error);
          });
        }
      }, {
        key: "upload",
        value: function upload() {
          var uploadData = new FormData();
          uploadData.append('image', this.selectedFile, this.selectedFile.name);
          this.profileService.uploadProfilePicture(uploadData, this.user.iduser).subscribe(function (error) {
            console.error('Error finding player' + error);
          });
        }
      }, {
        key: "onFileChanged",
        value: function onFileChanged(event) {
          this.selectedFile = event.target.files[0];
        }
      }, {
        key: "updateProfile",
        value: function updateProfile(name, username, description, pass) {
          this.wrapper.user = this.user;
          this.wrapper.description = this.player.description;

          if (name != "") {
            this.wrapper.user.name = name;
          }

          if (username != "") {
            this.wrapper.user.username = username;
          }

          if (description != "") {
            this.wrapper.description = description;
          }

          if (pass != "") {
            this.wrapper.user.password = pass;
          }

          if (this.selectedFile != null) {
            this.upload();
          }

          console.log(name);
          this.profileService.updateProfile(this.wrapper).subscribe(function (response) {
            window.history.back();
          }, function (error) {
            console.error("Error updating user");
          });
        }
      }]);

      return UpdateProfileComponent;
    }();

    UpdateProfileComponent.ɵfac = function UpdateProfileComponent_Factory(t) {
      return new (t || UpdateProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servicies_players_service__WEBPACK_IMPORTED_MODULE_2__["PlayersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servicies_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servicies_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"]));
    };

    UpdateProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UpdateProfileComponent,
      selectors: [["updateProfile"]],
      decls: 59,
      vars: 3,
      consts: [["lang", "en"], ["http-equiv", "Content-Type", "content", "text/html; charset=UTF-8"], ["name", "theme-color", "content", "#563d7c"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-md-8"], [1, "card"], [1, "card-body"], ["enctype", "multipart/form-data", 1, "form-horizontal"], [1, "form-group"], ["for", "name", 1, "cols-sm-2", "control-label"], [1, "cols-sm-10"], [1, "input-group"], [1, "input-group-addon"], ["aria-hidden", "true", 1, "fa", "fa-user", "fa"], ["type", "text", "name", "name", "id", "name", 1, "form-control", 3, "placeholder"], ["name", ""], ["for", "email", 1, "cols-sm-2", "control-label"], ["aria-hidden", "true", 1, "fa", "fa-envelope", "fa"], ["type", "text", "name", "description", 1, "form-control", 3, "placeholder"], ["desc", ""], ["for", "username", 1, "cols-sm-2", "control-label"], ["aria-hidden", "true", 1, "fa", "fa-users", "fa"], ["type", "text", "name", "username", "id", "username", 1, "form-control", 3, "placeholder"], ["username", ""], ["for", "password", 1, "cols-sm-2", "control-label"], ["aria-hidden", "true", 1, "fa", "fa-lock", "fa-lg"], ["type", "password", "name", "password", "id", "password", 1, "form-control"], ["pass", ""], ["type", "file", "name", "image", "accept", ".jpg, .jpeg", 2, "display", "none", 3, "change"], ["fileInput", ""], [3, "click"], [1, "btn", "btn-primary", "btn-lg", "btn-block", "login-button", 3, "click"]],
      template: function UpdateProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "eTorneos - Edit profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "meta", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "New name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 15, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Description ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 19, 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "New username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 23, 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "New password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 27, 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Foto:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "input", 29, 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UpdateProfileComponent_Template_input_change_52_listener($event) {
            return ctx.onFileChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateProfileComponent_Template_button_click_54_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

            var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](53);

            return _r37.click();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Select File");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateProfileComponent_Template_button_click_57_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

            var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);

            var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](39);

            var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30);

            var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](48);

            return ctx.updateProfile(_r33.value, _r35.value, _r34.value, _r36.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Confirm changes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.user.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.player.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.user.username);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"]],
      styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  padding-top: 40px;\r\n  padding-bottom: 40px;\r\n  background-color: #f5f5f5;\r\n}\r\n\r\n.form-signin[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  max-width: 330px;\r\n  padding: 15px;\r\n  margin: auto;\r\n}\r\n\r\n.form-signin[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%] {\r\n  font-weight: 400;\r\n}\r\n\r\n.form-signin[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  box-sizing: border-box;\r\n  height: auto;\r\n  padding: 10px;\r\n  font-size: 16px;\r\n}\r\n\r\n.form-control-wrong[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  box-sizing: border-box;\r\n  height: auto;\r\n  padding: 10px;\r\n  font-size: 16px;\r\n  background-color: red;\r\n}\r\n\r\n.form-signin[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\r\n  z-index: 2;\r\n}\r\n\r\n.form-signin[_ngcontent-%COMP%]   input[type=\"email\"][_ngcontent-%COMP%] {\r\n  margin-bottom: -1px;\r\n  border-bottom-right-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n\r\n.form-signin[_ngcontent-%COMP%]   input[type=\"password\"][_ngcontent-%COMP%] {\r\n  margin-bottom: 10px;\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\r\n}\r\n\r\n.button[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  transition-duration: 1s;\r\n  color: white;\r\n  border-width: 2px;\r\n  border-style: inset;\r\n  border-radius: 10px;\r\n  transition-duration: 0.4s;\r\n  background-color: #1E90FF;\r\n  text-align: center;\r\n  -moz-text-align-last: center;\r\n       text-align-last: center;\r\n  font-size: 20px;\r\n  font-family: \"Lucida Sans Unicode\";\r\n  font-weight: auto;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-top: 30px;\r\n  margin-bottom: auto;\r\n}\r\n\r\n.button[_ngcontent-%COMP%]:hover {\r\n  color: black;\r\n  border-width: 2px;\r\n  border-style: inset;\r\n  border-radius: 10px;\r\n  transition-duration: 0.4s;\r\n  background-color: #87CEFA;\r\n  text-align: center;\r\n  -moz-text-align-last: center;\r\n       text-align-last: center;\r\n  font-size: 20px;\r\n  font-family: \"Lucida Sans Unicode\";\r\n  font-weight: auto;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-top: 30px;\r\n  margin-bottom: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxZQUFZO0FBQ2Q7O0FBRUE7RUFFRSxhQUFhO0VBRWIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtFQUNmLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUNFLFVBQVU7QUFDWjs7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsNEJBQTRCO0FBQzlCOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxlQUFlO0VBRWYsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQiw0QkFBdUI7T0FBdkIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixrQ0FBa0M7RUFDbEMsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQiw0QkFBdUI7T0FBdkIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixrQ0FBa0M7RUFDbEMsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLFxyXG5ib2R5IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbn1cclxuXHJcbi5mb3JtLXNpZ25pbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAzMzBweDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG4uZm9ybS1zaWduaW4gLmNoZWNrYm94IHtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcbi5mb3JtLXNpZ25pbiAuZm9ybS1jb250cm9sIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLmZvcm0tY29udHJvbC13cm9uZyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufVxyXG4uZm9ybS1zaWduaW4gLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG4uZm9ybS1zaWduaW4gaW5wdXRbdHlwZT1cImVtYWlsXCJdIHtcclxuICBtYXJnaW4tYm90dG9tOiAtMXB4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbn1cclxuLmZvcm0tc2lnbmluIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBpbnNldDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFFOTBGRjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbi1sYXN0OiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcIjtcclxuICBmb250LXdlaWdodDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG59XHJcblxyXG4uYnV0dG9uOmhvdmVyIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBpbnNldDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg3Q0VGQTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbi1sYXN0OiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIkx1Y2lkYSBTYW5zIFVuaWNvZGVcIjtcclxuICBmb250LXdlaWdodDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdateProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'updateProfile',
          templateUrl: './updateProfile.component.html',
          styleUrls: ['../register/register.component.css']
        }]
      }], function () {
        return [{
          type: _servicies_players_service__WEBPACK_IMPORTED_MODULE_2__["PlayersService"]
        }, {
          type: _servicies_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"]
        }, {
          type: _servicies_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      apiUrl: "api/"
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Daniel\Documents\GitHub\webapp9\Angular\eTournaments\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map