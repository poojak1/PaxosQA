Feature: searching for Paxos via google search

  Scenario Outline: Paxos google search chrome
    Given a web browser is at Google home page
    When the user enters "<searchtext>" into the search bar
    Then links related to "text" are shown on the result page.
    Then application should closed

    Examples: 
      | searchtext      |
      | Paxos Bankchain |
      | bankchain paxos |
      
  