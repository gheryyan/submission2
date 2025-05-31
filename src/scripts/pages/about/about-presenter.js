class AboutPresenter {
    #view;
    #model;

    constructor({ view, model }) {
        this.#view = view;
        this.#model = model;
    }

    async getAboutData() {
        this.#view.showLoading();
        try {
            const aboutData = {
                title: 'Submission II Dicoding',
                description: `Ini adalah lanjutan dari submission sebelumnya. Anda ditugaskan untuk melanjutkan pengembangan aplikasi sebelumnya dengan menerapkan seluruh materi-materi baru yang telah diperoleh. Jika berhasil menyelesaikannya dengan memenuhi seluruh ketentuan yang berlaku, Anda akan dinyatakan lolos dari kelas ini.`,
                features: [
                    'Mempertahankan Seluruh Kriteria Wajib Submission Sebelumnya',
                    'Menerapkan Push Notification',
                    'Mengadopsi PWA (Installable & Offline)',
                    'Manfaatkan IndexedDB untuk Menyimpan Data',
                    'Distribusikan secara Publik(Github)'
                ],
                
            };

            this.#view.displayAboutData(aboutData);
        } catch (error) {
            console.error('getAboutData: error:', error);
            this.#view.showError(error.message);
        } finally {
            this.#view.hideLoading();
        }
    }
}

export default AboutPresenter;