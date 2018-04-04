Feature: searching for Paxos via google search

  Scenario Outline: Paxos google search chrome
    Given chrome a web browser is at Google home page
    When the user enters "<searchText>" into the search bar
    Then links related to "<searchText>" are shown on the result page.
    Then application should closed

    Examples: 
      | searchText      |
      | Paxos Bankchain |
      | Some Text		|
      
Scenario Outline: Paxos google search firefox
    Given firefox a web browser is at Google home page
    When the user enters "<searchText>" into the search bar
    Then links related to "<searchText>" are shown on the result page.
    Then application should closed

    Examples: 
      | searchText      |
      | Paxos Bankchain |
      | Some Text		|
      