var iter = (function () {
    var data = [1, 2, 3, 4,5,6,7,8,9,10],
        index = data.length;

    return {
        next: function () {
            var element;
            if (!this.hasNext()) {
                return null;
            }
            element = data[index];
            index = index - 1;
            return element;
        },
        hasNext: function () {
            return index > -1;
        },
        rewind: function () {
            index = data.length;
        }
    };
}());

while (iter.hasNext()) {
    console.log(iter.next());
}
   