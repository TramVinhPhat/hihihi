var appComment = new Vue({
    el: '#moduleComment',
    data: {
        prevHits: 0,
        commentList: [],
        productId: '',
        commentFormData: {
            fullname: "",
            email: "",
            phone: "",
            content: "",
            subContent: "",
        },
        pageUrl: '',
        parentId: '',
        isErrorGGCapcha: false,
        total: 0,
        last_record: [],

    },
    methods: {
        setCookie: function(cname, cvalue, exdays) {
            const d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            let expires = "expires=" + d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        },

        getCookie: function(cname) {
            let name = cname + "=";
            // let ca = document.cookie.split(';');
            let decodedCookie = decodeURIComponent(document.cookie);
            let ca = decodedCookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        },

        defaultValue: function(myVar, defaultVal) {
            if (!myVar) myVar = defaultVal;
            return myVar;
        },

        handleOpenModal: function(className = '') {
            if (!validate(className)) return
            jQuery(`#comment-module-modal`).modal('show')
        },
        handleSpinComment: function() {
            return;
        },
        handleSaveCommentParentId(parentId) {
            this.parentId = parentId
            setTimeout(() => {
                let hash = document.querySelector(`#text-area-${parentId}`)
                jQuery('html, body').animate({
                    scrollTop: jQuery(hash).offset().top - (jQuery('.cps-navbar__box-main').height() + jQuery('.block-breadcrumbs').height())
                }, 500);
            }, 100)
        },
        sendComment: async function(type = "1", productUrl = '', productName = '', pageUrl = '') {
            event.preventDefault();
            if (!validate('error-text-comment-info')) return
            let recaptcha_response_value = _.get(event, 'target.g-recaptcha-response.value', '')
            let formData = new FormData()
            const url = 'https://customer.cps.onl/comments-api/'
            const { fullname, email, phone, content, subContent } = this.commentFormData
            this.setCookie('cps_name', fullname, 30)
            this.setCookie('cps_phone', phone, 30)
            this.setCookie('cps_email', email, 30)
            formData.append('is_admin', '0')
            formData.append('sent_from', 'cellphones')
            formData.append('fullname', fullname)
            formData.append('email', email)
            formData.append('phone', phone)
            if (type == "1") {
                formData.append('product_id', this.productId)
                formData.append('product_url', productUrl)
                formData.append('page_name', productName)
            }
            if (type == "2") {
                formData.append('page_url', pageUrl)
                formData.append('page_name', productName)
            }
            if (recaptcha_response_value) {
                formData.append('g-recaptcha-response', recaptcha_response_value)
            }
            if (this.parentId !== '') {
                formData.append('parent_id', this.parentId)
                formData.append('content', subContent)
            } else {
                formData.append('content', content)
            }
            try {
                jQuery('#page_loader').show()
                const result = await axios({
                    method: 'post',
                    url,
                    data: formData,
                    headers: {
                        "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiYjNmNjNkZWFjZmEzYTNiODcyNmQzN2ZjOTRjYmJhZTFhNjg3OTQwMDNlMDMzYTI3OWFkYzU0OWVjNjFlNjBkNzkwNWUzYWE4NzU3NWE5ZmIiLCJpYXQiOjE2MzY0NzIzOTIuODIzNDM1LCJuYmYiOjE2MzY0NzIzOTIuODIzNDQzLCJleHAiOjQ3OTIxNDU5OTIuODE5MTg2LCJzdWIiOiIiLCJzY29wZXMiOlsiY29tbWVudF9nZXQiLCJyZXZpZXdfZ2V0Il19.A492jiothIY_0a6rg3wgiEnP2-jb1PV90Gctwzm_6yPXNBeTK_iDaKZdXzCpLXp3c4QVhZppNY0R1mXfIHiVZatNBIBgRjYVbVD31EjM5VfUoN6S7igRv7foZhl1vxW5OaOsKkmXf1BKP02ciQGhKG82Nsx7p4iq-JZroJwWBV2D8O3719TE2y-hMjgc3l2Dov4Rnz-59V3DqNgb351mka11u7togtTVB8IotIlGjZPtXKHYpJeJubsnlmBkSbQ3az04rscJgsQLOdP2Tqzx_g1fy8MmEtZpJl18bPZoY-14duKdDtPYzQ144QCy22g9Om36lpcyyAoVtftuRheF3QsRV7LbCvAMQWe5AK_xZ1RoaZHj6hjuvwWOFCusU5NFkssLbEnSylACNWdWorrwmUPcv06g3COVYpWKwtouM_55TYLrvj9NxRQP4kjOZlawWWHEDpvDfmV0vhQ2L7hQpi14SH0W4lksFVof84nezQE_j1uue0C7YLVmUA8FgH8WSJbS6Z-6HjqZELBuqSBrPDA363uvYyuavy81HajxXwotOiEgK5Q6Pr6WbGE4_AIFPwIWaL5uBLjmVE3yAtFD0YLW9lg5tzEROOL_8a0X3mPgh2tokgliN6egHxIQS0swObsyHz02LSlCaE3bsH2Ho13A9zHCctEecXfBe1HKBqE",
                        'X-Requested-With': 'XMLHttpRequest'
                    },
                    processData: false,
                    mimeType: "multipart/form-data",
                    contentType: false,
                })
                if (result.status === 200) {
                    document.querySelector(`#comment-module-modal .close`).click()
                    setTimeout(function() {
                        location.reload()
                    }, 1500);
                }
            } catch (error) {
                if (error.response.status === 429) {
                    this.isErrorGGCapcha = true
                    jQuery('#page_loader').hide();
                }
            }


        },
        getComments: async function(type = 1, product_id, page_url = '') {
            const url = 'https://customer.cps.onl/comments-api/elastic/filter'
            let params = (type === 1) ? {
                product_id: product_id
            } : {
                page_url: page_url
            }
            if (this.pidId) {
                params = {
                    ...params,
                    'last_hit[pit]': this.pidId,
                    'last_hit[search_after]': JSON.stringify(this.last_record)
                }
            }
            try {
                const result = await axios({
                    method: 'GET',
                    url,
                    params,
                    headers: {
                        'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI1IiwianRpIjoiYjNmNjNkZWFjZmEzYTNiODcyNmQzN2ZjOTRjYmJhZTFhNjg3OTQwMDNlMDMzYTI3OWFkYzU0OWVjNjFlNjBkNzkwNWUzYWE4NzU3NWE5ZmIiLCJpYXQiOjE2MzY0NzIzOTIuODIzNDM1LCJuYmYiOjE2MzY0NzIzOTIuODIzNDQzLCJleHAiOjQ3OTIxNDU5OTIuODE5MTg2LCJzdWIiOiIiLCJzY29wZXMiOlsiY29tbWVudF9nZXQiLCJyZXZpZXdfZ2V0Il19.A492jiothIY_0a6rg3wgiEnP2-jb1PV90Gctwzm_6yPXNBeTK_iDaKZdXzCpLXp3c4QVhZppNY0R1mXfIHiVZatNBIBgRjYVbVD31EjM5VfUoN6S7igRv7foZhl1vxW5OaOsKkmXf1BKP02ciQGhKG82Nsx7p4iq-JZroJwWBV2D8O3719TE2y-hMjgc3l2Dov4Rnz-59V3DqNgb351mka11u7togtTVB8IotIlGjZPtXKHYpJeJubsnlmBkSbQ3az04rscJgsQLOdP2Tqzx_g1fy8MmEtZpJl18bPZoY-14duKdDtPYzQ144QCy22g9Om36lpcyyAoVtftuRheF3QsRV7LbCvAMQWe5AK_xZ1RoaZHj6hjuvwWOFCusU5NFkssLbEnSylACNWdWorrwmUPcv06g3COVYpWKwtouM_55TYLrvj9NxRQP4kjOZlawWWHEDpvDfmV0vhQ2L7hQpi14SH0W4lksFVof84nezQE_j1uue0C7YLVmUA8FgH8WSJbS6Z-6HjqZELBuqSBrPDA363uvYyuavy81HajxXwotOiEgK5Q6Pr6WbGE4_AIFPwIWaL5uBLjmVE3yAtFD0YLW9lg5tzEROOL_8a0X3mPgh2tokgliN6egHxIQS0swObsyHz02LSlCaE3bsH2Ho13A9zHCctEecXfBe1HKBqE"
                    }
                })
                if (result.status === 200) {
                    const { data } = _.get(result, 'data', {})
                    const { matches, total } = data
                    this.commentList = [...this.commentList, ...matches]
                    this.total = total
                    this.pidId = _.get(data, 'pit_id', '')
                    this.prevHits += matches.length || 0
                    this.last_record = _.get(data, 'last_record', [])
                }
            } catch (error) {
                console.error(error)
            }
        }
    },
    created: function() {
        let fullname = this.getCookie("cps_name");
        let email = this.getCookie("cps_email");
        let phone = this.getCookie("cps_phone");
        this.commentFormData.fullname = this.defaultValue(fullname, '')
        this.commentFormData.phone = this.defaultValue(phone, '')
        this.commentFormData.email = this.defaultValue(email, '')
    },
    mounted: function() {
        if (jQuery('#moduleComment').css('display') == 'none') jQuery('#moduleComment').css("display", "block");
        const pageType = document.getElementById('moduleComment').dataset.pagetype
        if (pageType == 1) {
            const ProductID = document.getElementById('moduleComment').dataset.productid
            if (ProductID) {
                this.productId = ProductID
                this.getComments(1, ProductID)
            }
        }
        if (pageType == 2) {
            const PageURL = document.getElementById('moduleComment').dataset.pageurl
            if (PageURL) {
                this.pageUrl = PageURL
                this.getComments(2, '', PageURL)
            }
        }
    }
})