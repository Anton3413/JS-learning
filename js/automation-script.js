function sendMessageToUsers() {
    const messageButtons = document.querySelectorAll('div[data-chatmemberid]');

    function sendAutomatedMessage(button, memberId) {
        button.click();

        setTimeout(() => {
            const form = document.getElementById(`chatSendMessage${memberId}`);
            const textarea = form.querySelector('textarea[name="message"]');
            const sendButton = form.querySelector('button[type="button"]');

            if (textarea && sendButton) {
                textarea.value = 'Привет';
                sendButton.click();
            }
        }, 3000);
    }

    function processMessagesSequentially(index = 0) {
        if (index >= messageButtons.length) return;

        const button = messageButtons[index];
        const memberId = button.getAttribute('data-chatmemberid');

        if (memberId) {
            sendAutomatedMessage(button, memberId);
            setTimeout(() => {
                processMessagesSequentially(index + 1);
            }, 10000); // 10 секунд задержка перед отправкой следующего сообщения
        }
    }

    processMessagesSequentially();
}

sendMessageToUsers();