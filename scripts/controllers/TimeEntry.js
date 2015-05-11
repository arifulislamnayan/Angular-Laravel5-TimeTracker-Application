    
(function() {
    
    'use strict';

    angular
        .module('timeTracker')
        .controller('TimeEntry', TimeEntry);

        function TimeEntry(time) {

            // vm is our capture variable
            var vm = this;

            vm.timeentries = [];
        
            vm.totalTime = {};

            // Fetches the time entries from the static JSON file
            // and puts the results on the vm.timeentries array
            time.getTime().then(function(results) {
                vm.timeentries = results;
                updateTotalTime(vm.timeentries);            
            }, function(error) { // Check for errors
                console.log(error);
            });

            // Updates the values in the total time box by calling the
            // getTotalTime method on the time service
            function updateTotalTime(timeentries) {
                vm.totalTime = time.getTotalTime(timeentries);
            }
        }
    
})();


