$w.onReady(function () {
    const camposCMS = ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27'];
    const dbCMS = ['pb', 'caMax', 'caMin', 'p', 'se', 'mg', 's', 'cu', 'zn', 'mn', 'co', 'i', 'na', 'monensinaSodica', 'vita', 'vitD', 'vitE', 'biotina', 'flavomicina', 'narasina', 'ndt', 'fe', 'cr', 'bp', 'ndf', 'adf'];

    $w('#dynamicDataset').onReady(() => {
        const item = $w('#dynamicDataset').getCurrentItem();

        dbCMS.forEach((campoDB, index) => {
            const valor = item[campoDB];
            const elementoID = `#box${camposCMS[index]}`;
            const elemento = $w(elementoID);

            if (valor === 'N/A') {
                elemento.collapse();
            } else {
                elemento.text = valor;
            }
        });
    });
});