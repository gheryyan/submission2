/**
 * Utilitas untuk menangani View Transition API
 */

const ViewTransition = {
  /**
   * @param {Function} updateCallback - Fungsi yang akan dijalankan saat transisi
   */
  apply: async (updateCallback) => {
   
    if (!document.startViewTransition) {
      g
      updateCallback();
      return;
    }

    try {
      // Jalankan transisi dengan View Transition API
      const transition = document.startViewTransition(() => {
        // Jalankan callback untuk memperbarui DOM
        updateCallback();
      });

      // Tunggu hingga transisi selesai
      await transition.finished;
    } catch (error) {
      console.error('Error saat menerapkan transisi:', error);

      updateCallback();
    }
  }
};

export default ViewTransition;