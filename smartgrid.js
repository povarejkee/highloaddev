const smartgrid = require('smart-grid');
const settings = {
    columns: 12,
    offset: '20px',
    container: {
        maxWidth: '1280px',
        fields: '20px'
    },
    oldSizeStyle: false,
    breakPoints: {
        bl1280: {
            width: '1280px',
            fields: '20px'
        },

        bl960: {
            width: '960px',
            fields: '20px'
        },
        bl768: {
            width: '768px',
            fields: '20px'
        },
        bl667: {
            width: '667px',
            fields: '15px'
        },
        bl568: {
            width: '568px',
            fields: '15px'
        },
        bl414: {
            width: '414px',
            fields: '10px'
        },
        bl375: {
            width: '375px',
            fields: '10px'
        },
        bl320: {
            width: '320px',
            fields: '10px'
        }
    }
};

smartgrid('./src/precss', settings);