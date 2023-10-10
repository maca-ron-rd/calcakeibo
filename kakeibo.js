const kakeibo= new Vue({
    el: "#app",
    data: {
      newItemDate: null,
      newItemName: "",
      newItemPrice: 0,
      items: []
    },
    methods: {
      /**
       * 日付と項目の入力チェック結果を取得
       * @returns {boolean}
       */
      checkNewItem: function () {
        return this.newItemDate && this.newItemName ? true : false;
      },
      /**
       * エラーメッセージを取得
       * @returns {string} エラーメッセージ
       */
      getErrorMessage: function () {
        let message = "";
        if (!this.newItemDate) {
          message += "日付を入力してください\n";
        }
        if (!this.newItemName) {
          message += "項目を入力してください\n";
        }
        return message;
      },
      /**
       * 入力フォームを初期化
       */
      clearNewItem: function () {
        this.newItemDate = null;
        this.newItemName = "";
        this.newItemPrice = 0;
      },
      /**
       * 入力フォームからアイテムを取得
       * @returns {Object} アイテム
       */
      getNewItem: function () {
        return {
          date: this.newItemDate,
          name: this.newItemName,
          price: this.newItemPrice
        };
      },
      /**
       * アイテムをリストに追加
       */
      addNewItem: function () {
        if (!this.checkNewItem()) {
          let message = this.getErrorMessage();
          if (message) alert(message);
          return;
        }
        this.items.push(this.getNewItem());
        this.clearNewItem();
      },
      /**
       * アイテムリスト内の合計金額を取得
       * @returns {number} アイテムリスト内の合計金額
       */
      getItemTotalPrice: function () {
        let total = 0;
        for (let item of this.items) {
          total += Number(item.price);
        }
        return total;
      },
      /**
       * アイテムをリストから削除
       */
      deleteItem: function (index) {
        this.items.splice(index, 1);
      }
    }
  });
