cc.Class({
    extends: cc.Component,

    properties: {
        icon_normal: {
            default: null,
            type: cc.SpriteFrame,
        },

        icon_seleced: {
            default: null,
            type: cc.SpriteFrame,
        },
    },

    onLoad() {
        this.icon = this.node.getChildByName("icon").getComponent(cc.Sprite);
        this.label = this.node.getChildByName("name")
        this.is_active = false;
    },

    set_actived(is_active) {
        this.is_active = is_active;
        if (this.is_active) {
            this.icon.spriteFrame = this.icon_seleced;
            this.label.color = new cc.Color(64, 155, 226, 255);
        } else {
            this.icon.spriteFrame = this.icon_normal;
            this.label.color = new cc.Color(118, 118, 118, 255);
        }
    },
});
