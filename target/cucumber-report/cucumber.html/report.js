$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("computer.feature");
formatter.feature({
  "line": 2,
  "name": "Computer Page Test",
  "description": "As a user I want to build my own computer \u0026 add to cart",
  "id": "computer-page-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 19,
  "name": "verify That User Should Build Your Own Computer And Add To Cart Successfully",
  "description": "",
  "id": "computer-page-test;verify-that-user-should-build-your-own-computer-and-add-to-cart-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I click on Coputers",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I click on Desktops",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select product \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select processoe \"\u003cprocessor\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select RAM \"\u003cram\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select HDD \"\u003chdd\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select OS \"\u003cos\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select Software \"\u003csoftware\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on Add to Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I can add product to cart successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "computer-page-test;verify-that-user-should-build-your-own-computer-and-add-to-cart-successfully;",
  "rows": [
    {
      "cells": [
        "processor",
        "ram",
        "hdd",
        "os",
        "software"
      ],
      "line": 32,
      "id": "computer-page-test;verify-that-user-should-build-your-own-computer-and-add-to-cart-successfully;;1"
    },
    {
      "cells": [
        "2.2 GHz Intel Pentium Dual-Core E2200",
        "2 GB",
        "320 GB",
        "Vista Home [+$50.00]",
        "Microsoft Office [+$50.00]"
      ],
      "line": 33,
      "id": "computer-page-test;verify-that-user-should-build-your-own-computer-and-add-to-cart-successfully;;2"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "4GB [+$20.00]",
        "400 GB [+$100.00]",
        "Vista Premium [+$60.00]",
        "Acrobat Reader [+$10.00]"
      ],
      "line": 34,
      "id": "computer-page-test;verify-that-user-should-build-your-own-computer-and-add-to-cart-successfully;;3"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "8GB [+$60.00]",
        "320 GB",
        "Vista  Home [+$50.00]",
        "Total Commander [+$5.00]"
      ],
      "line": 35,
      "id": "computer-page-test;verify-that-user-should-build-your-own-computer-and-add-to-cart-successfully;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6055223100,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "verify That User Should Build Your Own Computer And Add To Cart Successfully",
  "description": "",
  "id": "computer-page-test;verify-that-user-should-build-your-own-computer-and-add-to-cart-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I click on Coputers",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I click on Desktops",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select product \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select processoe \"2.2 GHz Intel Pentium Dual-Core E2200\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select RAM \"2 GB\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select HDD \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select OS \"Vista Home [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select Software \"Microsoft Office [+$50.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on Add to Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I can add product to cart successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 106503400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iClickOnCoputers()"
});
formatter.result({
  "duration": 3564853100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iClickOnDesktops()"
});
formatter.result({
  "duration": 2783350300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 18
    }
  ],
  "location": "ComputerPageSteps.iSelectProduct(String)"
});
formatter.result({
  "duration": 2926556000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.2 GHz Intel Pentium Dual-Core E2200",
      "offset": 20
    }
  ],
  "location": "ComputerPageSteps.iSelectProcessoe(String)"
});
formatter.result({
  "duration": 89387600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2 GB",
      "offset": 14
    }
  ],
  "location": "ComputerPageSteps.iSelectRAM(String)"
});
formatter.result({
  "duration": 82464400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 14
    }
  ],
  "location": "ComputerPageSteps.iSelectHDD(String)"
});
formatter.result({
  "duration": 57481900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 13
    }
  ],
  "location": "ComputerPageSteps.iSelectOS(String)"
});
formatter.result({
  "duration": 54624000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Microsoft Office [+$50.00]",
      "offset": 19
    }
  ],
  "location": "ComputerPageSteps.iSelectSoftware(String)"
});
formatter.result({
  "duration": 56053800,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 41798100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iCanAddProductToCartSuccessfully()"
});
formatter.result({
  "duration": 956755600,
  "status": "passed"
});
formatter.after({
  "duration": 699155600,
  "status": "passed"
});
formatter.before({
  "duration": 3450379600,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "verify That User Should Build Your Own Computer And Add To Cart Successfully",
  "description": "",
  "id": "computer-page-test;verify-that-user-should-build-your-own-computer-and-add-to-cart-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I click on Coputers",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I click on Desktops",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select product \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select processoe \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select RAM \"4GB [+$20.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select HDD \"400 GB [+$100.00]\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select OS \"Vista Premium [+$60.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select Software \"Acrobat Reader [+$10.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on Add to Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I can add product to cart successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 24300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iClickOnCoputers()"
});
formatter.result({
  "duration": 5414735500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iClickOnDesktops()"
});
formatter.result({
  "duration": 1640663200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 18
    }
  ],
  "location": "ComputerPageSteps.iSelectProduct(String)"
});
formatter.result({
  "duration": 2059049200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 20
    }
  ],
  "location": "ComputerPageSteps.iSelectProcessoe(String)"
});
formatter.result({
  "duration": 58312600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4GB [+$20.00]",
      "offset": 14
    }
  ],
  "location": "ComputerPageSteps.iSelectRAM(String)"
});
formatter.result({
  "duration": 77691400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400 GB [+$100.00]",
      "offset": 14
    }
  ],
  "location": "ComputerPageSteps.iSelectHDD(String)"
});
formatter.result({
  "duration": 67771000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Premium [+$60.00]",
      "offset": 13
    }
  ],
  "location": "ComputerPageSteps.iSelectOS(String)"
});
formatter.result({
  "duration": 87256700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Acrobat Reader [+$10.00]",
      "offset": 19
    }
  ],
  "location": "ComputerPageSteps.iSelectSoftware(String)"
});
formatter.result({
  "duration": 61227200,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 40956500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iCanAddProductToCartSuccessfully()"
});
formatter.result({
  "duration": 404786800,
  "status": "passed"
});
formatter.after({
  "duration": 675421700,
  "status": "passed"
});
formatter.before({
  "duration": 5188831600,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "verify That User Should Build Your Own Computer And Add To Cart Successfully",
  "description": "",
  "id": "computer-page-test;verify-that-user-should-build-your-own-computer-and-add-to-cart-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I click on Coputers",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I click on Desktops",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select product \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select processoe \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select RAM \"8GB [+$60.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select HDD \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select OS \"Vista  Home [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select Software \"Total Commander [+$5.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on Add to Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I can add product to cart successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 29700,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iClickOnCoputers()"
});
formatter.result({
  "duration": 3996791500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iClickOnDesktops()"
});
formatter.result({
  "duration": 944147500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 18
    }
  ],
  "location": "ComputerPageSteps.iSelectProduct(String)"
});
formatter.result({
  "duration": 1483497700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 20
    }
  ],
  "location": "ComputerPageSteps.iSelectProcessoe(String)"
});
formatter.result({
  "duration": 55003400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8GB [+$60.00]",
      "offset": 14
    }
  ],
  "location": "ComputerPageSteps.iSelectRAM(String)"
});
formatter.result({
  "duration": 76122500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 14
    }
  ],
  "location": "ComputerPageSteps.iSelectHDD(String)"
});
formatter.result({
  "duration": 56127500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista  Home [+$50.00]",
      "offset": 13
    }
  ],
  "location": "ComputerPageSteps.iSelectOS(String)"
});
formatter.result({
  "duration": 33641200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Total Commander [+$5.00]",
      "offset": 19
    }
  ],
  "location": "ComputerPageSteps.iSelectSoftware(String)"
});
formatter.result({
  "duration": 74134300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 55892400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iCanAddProductToCartSuccessfully()"
});
formatter.result({
  "duration": 398086800,
  "status": "passed"
});
formatter.after({
  "duration": 664907700,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "Login Test",
  "description": "As user I want to login into nop commerce website",
  "id": "login-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 21,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I enter email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I should see the error message \"\u003cerrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "errorMessage"
      ],
      "line": 29,
      "id": "login-test;verify-the-error-message-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "abcd123@gmail.com",
        "xyz123",
        "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found"
      ],
      "line": 30,
      "id": "login-test;verify-the-error-message-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "xyz123@gmail.com",
        "abc123",
        "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found"
      ],
      "line": 31,
      "id": "login-test;verify-the-error-message-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "adfafasd@gmail.com",
        "xyz123",
        "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found"
      ],
      "line": 32,
      "id": "login-test;verify-the-error-message-with-invalid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3037502700,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I enter email \"abcd123@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter password \"xyz123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I should see the error message \"Login was unsuccessful. Please correct the errors and try again.\nNo customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 18000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1060010600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd123@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 68217800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz123",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 58082500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 409578600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found",
      "offset": 32
    }
  ],
  "location": "LoginSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 27138200,
  "status": "passed"
});
formatter.after({
  "duration": 659896600,
  "status": "passed"
});
formatter.before({
  "duration": 3614589000,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I enter email \"xyz123@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter password \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I should see the error message \"Login was unsuccessful. Please correct the errors and try again.\nNo customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 18100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 791283700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz123@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 61425000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 55658700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 828093200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found",
      "offset": 32
    }
  ],
  "location": "LoginSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 22792300,
  "status": "passed"
});
formatter.after({
  "duration": 651380600,
  "status": "passed"
});
formatter.before({
  "duration": 2387233000,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@smoke"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I enter email \"adfafasd@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter password \"xyz123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I should see the error message \"Login was unsuccessful. Please correct the errors and try again.\nNo customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 19200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1139166200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adfafasd@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 70201500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz123",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 58626300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 392830100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found",
      "offset": 32
    }
  ],
  "location": "LoginSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 30627000,
  "status": "passed"
});
formatter.after({
  "duration": 663718700,
  "status": "passed"
});
formatter.before({
  "duration": 3123143500,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Verify the user should logout successfully",
  "description": "",
  "id": "login-test;verify-the-user-should-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 35,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "I enter email \"Sundarram104@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I enter password \"abc123\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I click on logout button",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I should logout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 15700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1560679000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sundarram104@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 65484300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 56335600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 516976900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLogoutButton()"
});
formatter.result({
  "duration": 20021888000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldLogoutSuccessfully()"
});
formatter.result({
  "duration": 13000,
  "status": "passed"
});
formatter.after({
  "duration": 714851800,
  "status": "passed"
});
formatter.uri("register.feature");
formatter.feature({
  "line": 2,
  "name": "Register Test",
  "description": "As user I want to register on nop commerce website",
  "id": "register-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "duration": 2615109500,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "User should create account successfully",
  "description": "",
  "id": "register-test;user-should-create-account-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I click on female radio Button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter first name \"Sundar\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter last name \"Ram\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select date of birth \"22\",\"January\",\"1980\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter emailid \"Sundarram104@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter password1 \"abc123\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter confirm password \"abc123\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "registration successful",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 14500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 1158846400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnFemaleRadioButton()"
});
formatter.result({
  "duration": 63844000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sundar",
      "offset": 20
    }
  ],
  "location": "RegisterSteps.iEnterFirstName(String)"
});
formatter.result({
  "duration": 57197100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ram",
      "offset": 19
    }
  ],
  "location": "RegisterSteps.iEnterLastName(String)"
});
formatter.result({
  "duration": 61085100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "22",
      "offset": 24
    },
    {
      "val": "January",
      "offset": 29
    },
    {
      "val": "1980",
      "offset": 39
    }
  ],
  "location": "RegisterSteps.iSelectDateOfBirth(String,String,String)"
});
formatter.result({
  "duration": 225062600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sundarram104@gmail.com",
      "offset": 17
    }
  ],
  "location": "RegisterSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 73215900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 19
    }
  ],
  "location": "RegisterSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 62635700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 26
    }
  ],
  "location": "RegisterSteps.iEnterConfirmPassword(String)"
});
formatter.result({
  "duration": 58719100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 711491700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.registrationSuccessful()"
});
formatter.result({
  "duration": 25921000,
  "status": "passed"
});
formatter.after({
  "duration": 695209600,
  "status": "passed"
});
});