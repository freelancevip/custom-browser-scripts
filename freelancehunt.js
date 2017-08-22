(function ($) {
    /**
     * Средняя ставка на проект в грн.
     * @returns {Number}
     */
    function getMiddleBid() {
        var course = 0.43,
            sum = 0,
            text,
            bid,
            rub = '₽',
            $bidLabels = $("[data-original-title^='Стоимость работы ']"),
            count = $bidLabels.length;
        if (0 === count) {
            return 0;
        }
        $bidLabels.each(function (i, el) {
            text = $(el).text();
            bid = parseInt(text);
            if (-1 !== text.indexOf(rub)) {
                bid *= course;
            }
            sum += bid;
        });

        return parseInt(sum / count);
    }

    /**
     * Добавить инфоблок со средней ставкой на проект
     * @param middle
     */
    function addInfoBlock(middle) {
        if (0 === middle) {
            return;
        }
        var html = $("<div class='well'><b>Средняя ставка: </b>" + middle + " грн.</div>");
        $(html).insertAfter(".well");
    }

    addInfoBlock(getMiddleBid());

})(jQuery);