(function (main, $) {

  main.initialize = function () {
    ko.applyBindings(vm);
    vm.loadGenres();

    $(".genre-menu").on("click", ".genre-menu-item", function (e) {
      var genre = $(this).text();
      vm.genre(genre);
      vm.currentPage(1);
      vm.loadGenre();
      e.preventDefault();
      return true;
    });

    $("#nextButton").on("click", function (e) {
      if (!$(this).parent().hasClass("disabled")) {
        vm.currentPage(vm.currentPage() + 1);
        vm.loadGenre();
      }
      e.preventDefault();
      return false;
    });

    $("#prevButton").on("click", function (e) {
      if (!$(this).parent().hasClass("disabled")) {
        vm.currentPage(vm.currentPage() - 1);
        vm.loadGenre();
      }
      e.preventDefault();
      return false;
    });

    $("#firstButton").on("click", function (e) {
      if (!$(this).parent().hasClass("disabled")) {
        vm.currentPage(1);
        vm.loadGenre();
      }
      e.preventDefault();
      return false;
    });

    $("#lastButton").on("click", function (e) {
      if (!$(this).parent().hasClass("disabled")) {
        vm.currentPage(vm.totalPages());
        vm.loadGenre();
      }
      e.preventDefault();
      return false;
    });
  };

  main.showError = function (error) {
    $("#errorAlert").show();
    $("#errorText").text(error);
  };


  $(document).ready(function () {
    main.initialize();
  });

}(window.main = window.main || {}, jQuery));
