var state = {
    interval: 0,
    key: '',
    callbacks: [updateInputs],
    updateInterval: function(interval) {
        this.interval = interval
        for (const callback of this.callbacks) {
            callback(this.interval, this.key)
        }
    },
    updateKey: function(key) {
        if (key === null)
            key = ''
        this.key = key.toUpperCase()
        for (const callback of this.callbacks) {
            callback(this.interval, this.key)
        }
    }
}

window.onload = function() {
    let inputInterval = document.getElementById('transpose-interval')
    inputInterval.innerHTML = ''
    inputInterval.onchange = onSelectInputChange
    for (const i of Array(12).keys()) {
        let option = document.createElement("option")
        option.text = `+${i}`
        inputInterval.add(option)
    }

    let inputKey = document.getElementById('transpose-key')
    inputKey.innerHTML = ''
    inputKey.onchange = onSelectInputChange
    inputKey.setAttribute('disabled', '')

    let inputText = document.getElementById('chords-source')
    inputText.oninput = onTextInputChange
}

function onSelectInputChange() {
    let index = this.selectedIndex
    let options = this.options
    let value = options[index].value.replace('+', '')
    let interval = Number(value)
    state.updateInterval(interval)
    console.log(`Value: ${state.interval}`)
    // this.selectedIndex = (this.selectedIndex + 2) % 12
}

function onTextInputChange() {
    let text = this.value
    let match = text.match(/[a-hA-H]/)
    if (!match) {
        // pass
    }
    else {
        console.log(match)
    }
}

function updateInputs(interval, key) {
    let inputInterval = document.getElementById('transpose-interval')
    let inputKey = document.getElementById('transpose-key')

    inputInterval.selectedIndex = interval
    inputKey.selectedIndex = interval

    if (key === '' && !inputKey.hasAttribute('disabled')) {
        inputKey.setAttribute('disabled', '')
        inputKey.innerHTML = ''
    }
    else {
        inputKey.removeAttribute('disabled')
    }
}