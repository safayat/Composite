var myApp = angular.module('myApp', []);

myApp.controller('MyController', function MyController($scope) {

    $scope.formData = {};
    $scope.formData.generalInfo = {
        firstName : '',
        lastName : '',
        middleName : '',
        gender : '',
        validate : function(){

            if(this.firstName == ''){
                return {error : 'true', msg : 'first name is empty'};
            }

            if(this.lastName == ''){
                return {error : 'true', msg : 'last name is empty'};
            }

            if(this.middleName == ''){
                return {error : 'true', msg : 'middle name is empty'};
            }

            if(this.gender == ''){
                return {error : 'true', msg : 'gender is empty'};
            }

            return {ok:true};

        }
    };

    $scope.formData.address = {
        permanentAddress : '',
        temporaryAddress : '',
        validate : function(){

            if(this.permanentAddress == ''){
                return {error : 'true', msg : 'permanent address is empty'};
            }

            if(this.temporaryAddress == ''){
                return {error : 'true', msg : 'temporary address is empty'};
            }

            return {ok:true};

        }
    };

    $scope.formData.eInfo = {
        email : '',
        website : '',
        validate : function(){

            if(this.email == ''){
                return {error : 'true', msg : 'email is empty'};
            }

            if(this.website == ''){
                return {error : 'true', msg : 'website is empty'};
            }

            return {ok:true};

        }
    };

    $scope.formData.validate = function(){
        $scope.successMessage = undefined;
        $scope.errorMessage = undefined;
        var result = this.generalInfo.validate();
        if(result.ok){
            result = this.address.validate();
            if(result.ok){
                result = this.eInfo.validate();

            }
        }

        if(result.ok){
            $scope.successMessage = "Validated Successfully";
        }else{
            $scope.errorMessage = result.msg;
        }
    };


    $scope.formValidate = function(){
        $scope.formData.validate();
    }
});

