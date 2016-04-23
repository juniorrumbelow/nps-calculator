var app = angular.module('npsApp', ["firebase"]);


app.controller("npsController", function ($scope, $firebaseObject, $firebaseArray, $firebaseAuth) {
    
    
    
     // Working out the totals
    $scope.AddNumbers = function () {
        var zero = ($scope.zero.Zero || 0);
        var one = ($scope.one.One || 0);
        var two = ($scope.two.Two || 0);
        var three = ($scope.three.Three || 0);
        var four = ($scope.four.Four || 0);
        var five = ($scope.five.Five || 0);
        var six = ($scope.six.Six || 0);
        var seven = ($scope.seven.Seven || 0);
        var eight = ($scope.eight.Eight || 0);
        var nine = ($scope.nine.Nine || 0);
        var ten = ($scope.ten.Ten || 0);

        // Setting the values to the scopes
        $scope.totalRespondents = zero + one + two + three + four + five + six + seven + eight + nine + ten;
        $scope.totalDetractors = zero + one + two + three + four + five + six;
        $scope.totalNeutrals = seven + eight;
        $scope.totalPromoters = nine + ten;
        
        
        // Working out the percentage values
        var detractorsPercentageTotal =  Number(parseInt($scope.totalDetractors) / parseInt($scope.totalRespondents)) * 100;
        var neutralsPercentageTotal =  Number(parseInt($scope.totalNeutrals) / parseInt($scope.totalRespondents)) * 100;
        var promotersPercentageTotal =  Number(parseInt($scope.totalPromoters) / parseInt($scope.totalRespondents)) * 100;
        
        // Setting the values to the scopes
        $scope.detractorsPercentageSum.Detractors = parseFloat(detractorsPercentageTotal.toFixed(2));
        $scope.neutralsPercentageSum.Neutrals = parseFloat(neutralsPercentageTotal.toFixed(2));
        $scope.promotersPercentageSum.Promoters = parseFloat(promotersPercentageTotal.toFixed(2));
        
        // Working out NPS score
        var npsScoreTotal = parseFloat(($scope.promotersPercentageSum.Promoters)) - parseFloat(($scope.detractorsPercentageSum.Detractors));
        
        // Setting the values to the scope
        $scope.npsScore.NPS = parseFloat(npsScoreTotal.toFixed(0));
    };
    
    // creating new firebase ref for responses
    
    var ref = new Firebase("https://shining-torch-3939.firebaseio.com/nps/Response_Scores");
    
    var Zero = $firebaseObject(ref);
    var One = $firebaseObject(ref);
    var Two = $firebaseObject(ref);
    var Three = $firebaseObject(ref);
    var Four = $firebaseObject(ref);
    var Five = $firebaseObject(ref);
    var Six = $firebaseObject(ref);
    var Seven = $firebaseObject(ref);
    var Eight = $firebaseObject(ref);
    var Nine = $firebaseObject(ref);
    var Ten = $firebaseObject(ref);
        
    // setting the response objects to the scopes
    
    Zero.$bindTo($scope, "zero");
    One.$bindTo($scope, "one");
    Two.$bindTo($scope, "two");
    Three.$bindTo($scope, "three");
    Four.$bindTo($scope, "four");
    Five.$bindTo($scope, "five");
    Six.$bindTo($scope, "six");
    Seven.$bindTo($scope, "seven");
    Eight.$bindTo($scope, "eight");
    Nine.$bindTo($scope, "nine");
    Ten.$bindTo($scope, "ten");
    
    
    // creating new firebase refs for percentages
    
    var refn = new Firebase("https://shining-torch-3939.firebaseio.com/nps/Percentages/Neutrals");
    var refd = new Firebase("https://shining-torch-3939.firebaseio.com/nps/Percentages/Detractors");
    var refp = new Firebase("https://shining-torch-3939.firebaseio.com/nps/Percentages/Promoters");
    
    var N = $firebaseObject(refn);
    var D = $firebaseObject(refd);
    var P = $firebaseObject(refp);
    

    // setting the percentage objects to the scopes
    
    N.$bindTo($scope, "neutralsPercentageSum");
    D.$bindTo($scope, "detractorsPercentageSum");
    P.$bindTo($scope, "promotersPercentageSum");
    
    
    // creating new firebase ref for nps score
    
    var refscore = new Firebase("https://shining-torch-3939.firebaseio.com/nps/NPS_Score");
    
    var NPS = $firebaseObject(refscore);
    
    // setting the nps object to the scope
    
    NPS.$bindTo($scope, "npsScore");
        
        
   
    
    
    // Reset Values Button

    $scope.reset = function() {
        $scope.zero = null;
        $scope.one = null;
        $scope.two = null;
        $scope.three = null;
        $scope.four = null;
        $scope.five = null;
        $scope.six = null;
        $scope.seven = null;
        $scope.eight = null;
        $scope.nine = null;
        $scope.ten = null;
        $scope.totalRespondents = null;
        $scope.totalDetractors = null;
        $scope.totalNeutrals = null;
        $scope.totalPromoters = null;
        $scope.detractorsPercentageSum = null;
        $scope.neutralsPercentageSum = null;
        $scope.promotersPercentageSum = null;
        $scope.npsScore = null;
    };

    if ($scope.one !== undefined) {  
        $scope.one = '';
    }
        else {
            $scope.one = null;
        }

    if ($scope.seven !== undefined) {  
        $scope.seven = '';
    }
        else {
            $scope.seven = null;
        }

    if ($scope.ten !== undefined) {  
        $scope.ten = '';
    }
        else {
            $scope.ten = null;
        }
    
//    
//    
//    $("#fblogin").on("click", function() {
//    var ref = new Firebase("https://shining-torch-3939.firebaseio.com");
//        ref.authWithOAuthPopup("facebook", function(error, authData) {
//          if (error) {
//            console.log("Login Failed!", error);
//          } else {
//            remember: true;
//            console.log("Authenticated successfully with payload:", authData);
//
//            console.log(authData.facebook.displayName);
//            console.log(authData.facebook.email);
//            console.log(authData.facebook.picture);
//              
//            var userName = authData.facebook.displayName;
//            $scope.userNameFB = userName;
//           }
//       },
//           {
//            scope: "email,user_likes"
//            
//        } 
//                               
//        );
//         
//        $scope.userEmailFB = authData.facebook.email;
//        
//    });
    
    

    


$("#fblogin").on("click", function() {
var ref = new Firebase("https://shining-torch-3939.firebaseio.com");
ref.authWithOAuthPopup("facebook", function(error, authData) {
  if (error) {
    console.log("Login Failed!", error);
  } else {
    console.log("Authenticated successfully with payload:", authData);
  }
});
        
// Create a callback which logs the current auth state
function authDataCallback(authData) {
  if (authData) {
    console.log("User " + authData.uid + " is logged in with " + authData.provider);
  } else {
    console.log("User is logged out");
  }
}
// Register the callback to be fired every time auth state changes
var ref = new Firebase("https://shining-torch-3939.firebaseio.com");
ref.onAuth(authDataCallback);
        
    });
  
    
    
 });  

app.factory("Auth", ["$firebaseAuth",
  function($firebaseAuth) {
    var ref = new Firebase("https://shining-torch-3939.firebaseio.com");
    return $firebaseAuth(ref);
  }
]);

app.controller("facebookLogin", ["$scope", "Auth",
  function($scope, Auth) {
    $scope.auth = Auth;

    // any time auth status updates, add the user data to scope
    $scope.auth.$onAuth(function(authData) {
      $scope.authData = authData;
    });
  }
                                 
                                 
                                 
]);






    
    
//    $("#loginButton").on("click", function() {
//    var onSuccessCallback = function(data) {
//        $Scope.currentUserSignedIn = true;
//        $Scope.currentUser.emailLogin = data.emailLogin;
//    };
//    // Login function to the server comes here
//        
//    // login a user
//        ref.authWithPassword({
//          email    : $scope.emailLogin,
//          password : $scope.passwordLogin
//        }, function(error, authData) { 
//            if (error) {
//            console.log("Login Failed!", error);
//          } else {
//            console.log("Logged in successfully with payload:", authData);
//          }
//            }, {
//        });
//    });
//    
//    
//    
//    var ref = new Firebase("https://shining-torch-3939.firebaseio.com/user");
//    
//        // register a new user
//        $("#registerButton").on("click", function() {
//        ref.createUser({
//          email    : $scope.email,
//          password : $scope.password
//        }, function(error, userData) {
//            if (error) {
//                console.log("Error creating user:", error);
//            } else {
//                console.log("Successfully created user account with uid:", userData.uid);
//            }
//            
//             ref.authWithPassword({
//              email    : $scope.email,
//              password : $scope.password
//                }, function(error, authData) {
//              if (error) {
//                console.log("Login Failed!", error);
//              } else {
//                console.log("Logged in successfully with payload:", authData);
//              }
//        });
//        });
//     });
//    
//    
//    
//    
//    
//    
//    $scope.logOut = function(user) {
//    ref.unauth();
//  };
         
    
    
    
    
    
//  $scope.username = 'World';
//
//  $scope.sayHello = function() {
//    $scope.greeting = $scope.username;
//  };          
            
            
    
//        var ref = new Firebase("https://shining-torch-3939.firebaseio.com");
//ref.removeUser({
//  email    : "design@fuddledesign.co.uk",
//  password : "1234"
//}, function(error) {
//  if (error === null) {
//    console.log("User removed successfully");
//  } else {
//    console.log("Error removing user:", error);
//  }
//});
    

//    
//    
//    var ref = new Firebase("https://shining-torch-3939.firebaseio.com/users");
//    
//    $("#loginButton").on("click", function() {
//        ref.authWithPassword({
//          email    : $scope.emailLogin,
//          password : $scope.passwordLogin
//        }, function(error, authData) { 
//            if (error) {
//            console.log("Login Failed!", error);
//          } else {
//            console.log("Logged in successfully with payload:", authData);
//          }
//            }, {
//        });
//        
//    });
  
//});
    

    
    
//    
//    $("#registerButton").on("click", function() {
//        
//        ref.createUser({
//          email    : $scope.email,
//          password : $scope.password
//        }, function(error, userData) {
//          if (error) {
//            console.log("Error creating user:", error);
//          } else {
//            console.log("Successfully created user account with uid:", userData.uid);
//          }
//        });
//        
//        ref.authWithPassword({
//              email    : $scope.email,
//              password : $scope.password
//                }, function(error, authData) {
//              if (error) {
//                console.log("Login Failed!", error);
//              } else {
//                console.log("Logged in successfully with payload:", authData);
//              }
//        });
//        
//        
//    });
//    
//    
//    var ref = new Firebase("https://shining-torch-3939.firebaseio.com");
//    
//    $("#loginButton").on("click", function() {
//        ref.authWithPassword({
//          email    : $scope.emailLogin,
//          password : $scope.passwordLogin
//        }, function(error, authData) { 
//            if (error) {
//            console.log("Login Failed!", error);
//          } else {
//            console.log("Logged in successfully with payload:", authData);
//          }
//            }, {
//        });
//        
//    });
    
    
//    function($scope, $firebaseArray) {
//    var messagesRef = new Firebase("https://shining-torch-3939.firebaseio.com/messages");
//    // download the data from a Firebase reference into a (pseudo read-only) array
//    // all server changes are applied in realtime
//    $scope.messages = $firebaseArray(messagesRef);
//    // create a query for the most recent 25 messages on the server
//    var query = messagesRef.orderByChild("timestamp").limitToLast(25);
//    // the $firebaseArray service properly handles database queries as well
//    $scope.filteredMessages = $firebaseArray(query);
//  }
    
    
        
//    var ref = new Firebase("https://shining-torch-3939.firebaseio.com");
//ref.removeUser({
//  email    : "design@fuddledesign.co.uk",
//  password : "1234"
//}, function(error) {
//  if (error === null) {
//    console.log("User removed successfully");
//  } else {
//    console.log("Error removing user:", error);
//  }
//});
    
    
    
//});









//var app = angular.module("testApp", ["firebase"]);
//
//app.controller("testController", function($scope, $firebaseObject, $firebaseArray, $firebaseAuth) {
//    
//  var ref = new Firebase("https://shining-torch-3939.firebaseio.com/data");
//    
//  // download the data into a local object
//  var syncObject = $firebaseObject(ref);
//    
//  // synchronize the object with a three-way data binding
//  syncObject.$bindTo($scope, "data");
//    
//    
//    
//    
//  var ref = new Firebase("https://shining-torch-3939.firebaseio.com/messages");
//
//  // create a synchronized array
//    $scope.messages = $firebaseArray(ref);
//  // add new items to the array
//
//  // the message is automatically added to our Firebase database!
//    $scope.addMessage = function() {
//        $scope.messages.$add({
//        text: $scope.newMessageText
//        });
//    };
//    
//    
//    app.factory("Auth", ["$firebaseAuth",
//  function($firebaseAuth) {
//    var ref = new Firebase("https://docs-sandbox.firebaseio.com");
//    return $firebaseAuth(ref);
//  }
//]);
//
//// and use it in our controller
//app.controller("testController", ["$scope", "Auth",
//  function($scope, Auth) {
//    $scope.createUser = function() {
//      $scope.message = null;
//      $scope.error = null;
//
//      Auth.$createUser({
//        email: $scope.email,
//        password: $scope.password
//      }).then(function(userData) {
//        $scope.message = "User created with uid: " + userData.uid;
//      }).catch(function(error) {
//        $scope.error = error;
//      });
//    };
//
//    $scope.removeUser = function() {
//      $scope.message = null;
//      $scope.error = null;
//
//      Auth.$removeUser({
//        email: $scope.email,
//        password: $scope.password
//      }).then(function() {
//        $scope.message = "User removed";
//      }).catch(function(error) {
//        $scope.error = error;
//      });
//    };
//  }
//]);
//    
//});
    
//    var ref = new Firebase("https://shining-torch-3939.firebaseio.com");
//ref.authWithOAuthPopup("facebook", function(error, authData) {
//  if (error) {
//    console.log("Login Failed!", error);
//  } else {
//    console.log("Authenticated successfully with payload:", authData);
//  }
//});
//    
//    
//    
//app.factory("Auth", ["$firebaseAuth",
//  function($firebaseAuth) {
//    var ref = new Firebase("https://docs-sandbox.firebaseio.com", "example3");
//    return $firebaseAuth(ref);
//  }
//]);
//
//app.controller("testController", ["$scope", "Auth",
//  function($scope, Auth) {
//    $scope.auth = Auth;
//
//    // any time auth status updates, add the user data to scope
//    $scope.auth.$onAuth(function(authData) {
//      $scope.authData = authData;
//    });
//  }
//]);
    
    

    

//    
//    var ref = new Firebase("https://docs-sandbox.firebaseio.com");
//    auth = $firebaseAuth(ref);
//
//    $scope.login = function() {
//      $scope.authData = null;
//      $scope.error = null;
//
//      auth.$authAnonymously().then(function(authData) {
//        $scope.authData = authData;
//      }).catch(function(error) {
//        $scope.error = error;
//      });
//    };
//    
    

        
//      $scope.removeUser = function() {
//      $scope.message = null;
//      $scope.error = null;
//
//      Auth.$removeUser({
//        email: $scope.email,
//        password: $scope.password
//      }).then(function() {
//        $scope.message = "User removed";
//      }).catch(function(error) {
//        $scope.error = error;
//      });
//    };
//})
  
    
    
//    
//    var ref = new Firebase("https://shining-torch-3939.firebaseio.com");
//ref.removeUser({
//  email    : "junior@totaldesignprint.co.uk",
//  password : "123egg"
//}, function(error) {
//  if (error === null) {
//    console.log("User removed successfully");
//  } else {
//    console.log("Error removing user:", error);
//  }
//});
    
    

//var ref = new Firebase("https://shining-torch-3939.firebaseio.com");
//    ref.createUser({
//      email    : $scope.email,
//      password : $scope.password
//    }, function(error, userData) {
//      if (error) {
//        console.log("Error creating user:", error);
//      } else {
//        console.log("Successfully created user account with uid:", userData.uid);
//      }
//    });
    
    
//    var ref = new Firebase("https://shining-torch-3939.firebaseio.com");
//    ref.authWithPassword({
//      email    : "junior@totaldesignprint.co.uk",
//      password : "123egg"
//    }, function(error, authData) { 
//        if (error) {
//        console.log("Login Failed!", error);
//      } else {
//        console.log("Logged in successfully with payload:", authData);
//      }
//        }, {
//    });
  
    

    
    









