/**
 * Created by plter on 6/21/16.
 */

(function () {

    function Man(name) {
        return {
            __proto__: new ucai.Human(name),

            failInLoveWith: function (woman) {
                console.log(this.name + " love " + woman.name);
            }
        };
    }

    ucai.Man = Man;

})();