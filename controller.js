function main($scope, $mdBottomSheet, $mdDialog, $mdToast) {
    addFormats($scope)
    window.$mdToast = $mdToast
    window.$mdBottomSheet = $mdBottomSheet
    window.$mdDialog = $mdDialog

    $scope.openAccount = function () {
        openAccount()
    }

    var domain = getParam("domain")

    function init() {
        loadProfile()
    }

    function loadProfile() {
        postContract("wallet", "api/profile.php", {
            domain: domain,
            address: wallet.address(),
        }, function (response) {
            $scope.token = response
            $scope.$apply()
        })
    }

    init()
}