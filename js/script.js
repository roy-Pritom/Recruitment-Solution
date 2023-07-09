// script.js
var candidatesData = [
    { name: 'Pritom', jobTitle: 'Software Engineer', location: 'New York' },
    { name: 'Gourav', jobTitle: 'UX Designer', location: 'San Francisco' },
    { name: 'Rafi', jobTitle: 'Web Developer', location: 'San Francisco' },
    { name: 'Abir', jobTitle: 'Frontend Developer', location: 'San Francisco' },
    { name: 'Moon', jobTitle: 'UX Designer', location: 'San Francisco' },
    { name: 'Rakib', jobTitle: 'Frontend Developer', location: 'Dhaka' },
    { name: 'Prosenjit', jobTitle: 'Software Engineer', location: 'Dhaka' },
    { name: 'Rony', jobTitle: 'Backend Developer', location: 'Haldia' },
    { name: 'Tony', jobTitle: 'Backend Developer', location: 'Haldia' },
    { name: 'Rana', jobTitle: 'UX Designer', location: 'Kolkata' },
    { name: 'Joy', jobTitle: 'Backend Developer', location: 'Kolkata' },
    { name: 'Avishek', jobTitle: 'Web Developer', location: 'Kolkata' },
    // Add more candidate data as needed
  ];
  
  function searchCandidates(event) {
    event.preventDefault()
    var locationFilter = document.getElementById('location').value.toLowerCase();
    var jobRoleFilter = document.getElementById('job-role').value.toLowerCase();
  
    var filteredCandidates = candidatesData.filter(function(candidate) {
      var candidateLocation = candidate.location.toLowerCase();
      var candidateJobRole = candidate.jobTitle.toLowerCase();
  
      return (
        candidateLocation.includes(locationFilter) &&
        candidateJobRole.includes(jobRoleFilter)
      );
    });
  
    renderCandidates(filteredCandidates);
  }
  
  function renderCandidates(candidates) {
    var candidatesList = document.getElementById('candidates');
    candidatesList.innerHTML = '';
  
    candidates.forEach(function(candidate) {
      var listItem = document.createElement('li');
      listItem.innerHTML = `<strong>${candidate.name}</strong> - ${candidate.jobTitle} - ${candidate.location}`;
      listItem.onclick = function() {
        addCandidateToEvaluation(candidate);
      };
  
      candidatesList.appendChild(listItem);
    });
  }
  
  var selectedCandidates = [];
  
  function addCandidateToEvaluation(candidate) {
    selectedCandidates.push(candidate);
  
    var evaluationList = document.getElementById('evaluation-list');
    var listItem = document.createElement('li');
    listItem.innerHTML = `<strong>${candidate.name}</strong> - ${candidate.jobTitle} - ${candidate.location}`;
  
    evaluationList.appendChild(listItem);
  }
  
  function rankCandidates() {

    selectedCandidates = [];
  }
  