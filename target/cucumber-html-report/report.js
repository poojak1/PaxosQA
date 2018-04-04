$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/PaxosGoogleSearchScenarios.feature");
formatter.feature({
  "line": 1,
  "name": "searching for Paxos via google search",
  "description": "",
  "id": "searching-for-paxos-via-google-search",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Paxos google search chrome",
  "description": "",
  "id": "searching-for-paxos-via-google-search;paxos-google-search-chrome",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "chrome a web browser is at Google home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the user enters \"\u003csearchText\u003e\" into the search bar",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "links related to \"\u003csearchText\u003e\" are shown on the result page.",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "application should closed",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "searching-for-paxos-via-google-search;paxos-google-search-chrome;",
  "rows": [
    {
      "cells": [
        "searchText"
      ],
      "line": 10,
      "id": "searching-for-paxos-via-google-search;paxos-google-search-chrome;;1"
    },
    {
      "cells": [
        "Paxos Bankchain"
      ],
      "line": 11,
      "id": "searching-for-paxos-via-google-search;paxos-google-search-chrome;;2"
    },
    {
      "cells": [
        "Some Text"
      ],
      "line": 12,
      "id": "searching-for-paxos-via-google-search;paxos-google-search-chrome;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Paxos google search chrome",
  "description": "",
  "id": "searching-for-paxos-via-google-search;paxos-google-search-chrome;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "chrome a web browser is at Google home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the user enters \"Paxos Bankchain\" into the search bar",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "links related to \"Paxos Bankchain\" are shown on the result page.",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "application should closed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.chrome_a_web_browser_is_at_Google_home_page()"
});
formatter.result({
  "duration": 7023951084,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Paxos Bankchain",
      "offset": 17
    }
  ],
  "location": "StepDefinition.the_user_enters_into_the_search_bar(String)"
});
formatter.result({
  "duration": 1045422087,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Paxos Bankchain",
      "offset": 18
    }
  ],
  "location": "StepDefinition.links_related_to_are_shown_on_the_result_page(String)"
});
formatter.result({
  "duration": 559041305,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.application_should_closed()"
});
formatter.result({
  "duration": 77065718,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Paxos google search chrome",
  "description": "",
  "id": "searching-for-paxos-via-google-search;paxos-google-search-chrome;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "chrome a web browser is at Google home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the user enters \"Some Text\" into the search bar",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "links related to \"Some Text\" are shown on the result page.",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "application should closed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.chrome_a_web_browser_is_at_Google_home_page()"
});
formatter.result({
  "duration": 1741883611,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Some Text",
      "offset": 17
    }
  ],
  "location": "StepDefinition.the_user_enters_into_the_search_bar(String)"
});
formatter.result({
  "duration": 4205406617,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Some Text",
      "offset": 18
    }
  ],
  "location": "StepDefinition.links_related_to_are_shown_on_the_result_page(String)"
});
formatter.result({
  "duration": 596191996,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.application_should_closed()"
});
formatter.result({
  "duration": 77932877,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "Paxos google search firefox",
  "description": "",
  "id": "searching-for-paxos-via-google-search;paxos-google-search-firefox",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "firefox a web browser is at Google home page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "the user enters \"\u003csearchText\u003e\" into the search bar",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "links related to \"\u003csearchText\u003e\" are shown on the result page.",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "application should closed",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "searching-for-paxos-via-google-search;paxos-google-search-firefox;",
  "rows": [
    {
      "cells": [
        "searchText"
      ],
      "line": 21,
      "id": "searching-for-paxos-via-google-search;paxos-google-search-firefox;;1"
    },
    {
      "cells": [
        "Paxos Bankchain"
      ],
      "line": 22,
      "id": "searching-for-paxos-via-google-search;paxos-google-search-firefox;;2"
    },
    {
      "cells": [
        "Some Text"
      ],
      "line": 23,
      "id": "searching-for-paxos-via-google-search;paxos-google-search-firefox;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 22,
  "name": "Paxos google search firefox",
  "description": "",
  "id": "searching-for-paxos-via-google-search;paxos-google-search-firefox;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "firefox a web browser is at Google home page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "the user enters \"Paxos Bankchain\" into the search bar",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "links related to \"Paxos Bankchain\" are shown on the result page.",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "application should closed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.firefox_a_web_browser_is_at_Google_home_page()"
});
formatter.result({
  "duration": 4502916250,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Paxos Bankchain",
      "offset": 17
    }
  ],
  "location": "StepDefinition.the_user_enters_into_the_search_bar(String)"
});
formatter.result({
  "duration": 140625617,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Paxos Bankchain",
      "offset": 18
    }
  ],
  "location": "StepDefinition.links_related_to_are_shown_on_the_result_page(String)"
});
formatter.result({
  "duration": 1637643485,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.application_should_closed()"
});
formatter.result({
  "duration": 668725833,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Paxos google search firefox",
  "description": "",
  "id": "searching-for-paxos-via-google-search;paxos-google-search-firefox;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "firefox a web browser is at Google home page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "the user enters \"Some Text\" into the search bar",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "links related to \"Some Text\" are shown on the result page.",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "application should closed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.firefox_a_web_browser_is_at_Google_home_page()"
});
formatter.result({
  "duration": 4377544412,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Some Text",
      "offset": 17
    }
  ],
  "location": "StepDefinition.the_user_enters_into_the_search_bar(String)"
});
formatter.result({
  "duration": 98719844,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Some Text",
      "offset": 18
    }
  ],
  "location": "StepDefinition.links_related_to_are_shown_on_the_result_page(String)"
});
formatter.result({
  "duration": 1605470577,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.application_should_closed()"
});
formatter.result({
  "duration": 661012353,
  "status": "passed"
});
});