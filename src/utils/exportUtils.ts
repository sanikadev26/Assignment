import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const exportAsPDF = (element: HTMLElement) => {
  html2canvas(element).then((canvas: HTMLCanvasElement) => {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF();

    // pdf.addImage(imgData, 'PNG', 0, 0);
    pdf.save('download.pdf');
  });
};
