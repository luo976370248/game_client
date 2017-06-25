cc.Class({
    extends: cc.Component,

    properties: {
        tab_buttons: {
            default: [],
            type: cc.Button,
        },

        tab_content: {
            default: [],
            type: cc.Node,
        },
    },

    onLoad: function () {
        this.tab_button_com_set = [];
        for(var i = 0; i < this.tab_buttons.length; i ++) {
            var com = this.tab_buttons[i].getComponent("tab_button");
            this.tab_button_com_set.push(com);
        }
    },

    start: function() {
        this.on_tab_button_click(null, "0"); // 初始让它显示哪个tab
    },

    disable_tab: function(index) {
        this.tab_button_com_set[index].set_actived(false);
        this.tab_buttons[index].interactable = true;
        this.tab_content[index].active = false;
    },

    enable_tab: function(index) {
        this.tab_button_com_set[index].set_actived(true);
        this.tab_buttons[index].interactable = false;
        this.tab_content[index].active = true;
    },

    on_tab_button_click: function(e, index) {
        index = parseInt(index);
        for(var i = 0; i < this.tab_buttons.length; i ++) {
            if (i == index) {
                this.enable_tab(i);
            }
            else {
                this.disable_tab(i);
            }
        }
    },
});
