$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/PaxosGoogleSearchScenario.feature");
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
  "name": "a web browser is at Google home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the user enters \"\u003csearchtext\u003e\" into the search bar",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "links related to \"text\" are shown on the result page.",
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
        "searchtext"
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
        "bankchain paxos"
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
  "name": "a web browser is at Google home page",
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
  "name": "links related to \"text\" are shown on the result page.",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "application should closed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.a_web_browser_is_at_Google_home_page()"
});
formatter.result({
  "duration": 3006206213,
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
  "duration": 4179652163,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "text",
      "offset": 18
    }
  ],
  "location": "StepDefinition.links_related_to_are_shown_on_the_result_page(String)"
});
formatter.result({
  "duration": 755882118,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.application_should_closed()"
});
formatter.result({
  "duration": 87209410,
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
  "name": "a web browser is at Google home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the user enters \"bankchain paxos\" into the search bar",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "links related to \"text\" are shown on the result page.",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "application should closed",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.a_web_browser_is_at_Google_home_page()"
});
formatter.result({
  "duration": 3848207672,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bankchain paxos",
      "offset": 17
    }
  ],
  "location": "StepDefinition.the_user_enters_into_the_search_bar(String)"
});
formatter.result({
  "duration": 694336000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "text",
      "offset": 18
    }
  ],
  "location": "StepDefinition.links_related_to_are_shown_on_the_result_page(String)"
});
formatter.result({
  "duration": 746874286,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.application_should_closed()"
});
formatter.result({
  "duration": 84249528,
  "status": "passed"
});
});