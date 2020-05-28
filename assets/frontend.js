Validation.addAllThese([
    ['validate-length', 'Text length does not satisfy specified text range.', function (v, elm) {
        var reMax = new RegExp(/^maximum-length-[0-9]+$/);
        var reMin = new RegExp(/^minimum-length-[0-9]+$/);
        var result = true;
        var self = this;
        $w(elm.className).each(function(name, index) {
            if (name.match(reMax) && result) {
                var length = name.split('-')[2];
                result = (v.length <= length);
                if(!result){
                    self.error = "Max Length is "+length+" symbols";
                }
            }
            if (name.match(reMin) && result && !Validation.get('IsEmpty').test(v)) {
                var length = name.split('-')[2];
                result = (v.length >= length);
                if(!result){
                    self.error = "Min Length is "+length+" symbols";
                }
            }
        });
        return result;
    }]
]);