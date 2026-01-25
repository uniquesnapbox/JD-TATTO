import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

export default function BookingModal({ isOpen, onClose }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (!isOpen) reset();
  }, [isOpen, reset]);

  const onSubmit = (values) => {
    const message = `Hi JD Tattoos, I want to book an appointment.\nName: ${values.name}\nPhone: ${values.phone}\nDate: ${values.date}\nTime: ${values.time}\nService: ${values.service}`;
    const whatsappUrl = `https://wa.me/917099725127?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    onClose?.();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/80 backdrop-blur-sm px-4" onClick={onClose}>
      <div
        className="bg-carbon/95 border border-orange/30 shadow-2xl shadow-orange/20 max-w-lg w-full p-6 md:p-8 relative rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-orange text-3xl font-bold hover:text-white transition-colors"
          aria-label="Close modal"
        >
          ×
        </button>
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-orange">Book Your Appointment</h2>
          <p className="text-white/70 text-sm mt-2">Schedule your tattoo session with JD Tattoos Studio</p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm text-white/70 font-medium">Name</label>
              <input
                className="w-full rounded-lg bg-white/5 border border-white/20 px-4 py-3 focus:border-orange focus:outline-none focus:ring-1 focus:ring-orange transition-all"
                {...register('name', { required: true })}
                placeholder="Your Name"
              />
              {errors.name && <p className="text-xs text-red-400">Required</p>}
            </div>
            <div className="space-y-2">
              <label className="text-sm text-white/70 font-medium">Phone</label>
              <input
                className="w-full rounded-lg bg-white/5 border border-white/20 px-4 py-3 focus:border-orange focus:outline-none focus:ring-1 focus:ring-orange transition-all"
                {...register('phone', { required: true })}
                placeholder="Phone Number"
              />
              {errors.phone && <p className="text-xs text-red-400">Required</p>}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm text-white/70 font-medium">Date</label>
              <input
                type="date"
                className="w-full rounded-lg bg-white/5 border border-white/20 px-4 py-3 focus:border-orange focus:outline-none focus:ring-1 focus:ring-orange transition-all"
                {...register('date', { required: true })}
              />
              {errors.date && <p className="text-xs text-red-400">Required</p>}
            </div>
            <div className="space-y-2">
              <label className="text-sm text-white/70 font-medium">Time</label>
              <input
                type="time"
                className="w-full rounded-lg bg-white/5 border border-white/20 px-4 py-3 focus:border-orange focus:outline-none focus:ring-1 focus:ring-orange transition-all"
                {...register('time', { required: true })}
              />
              {errors.time && <p className="text-xs text-red-400">Required</p>}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm text-white/70 font-medium">Service</label>
            <select
              className="w-full rounded-lg bg-white/5 border border-white/20 px-4 py-3 focus:border-orange focus:outline-none focus:ring-1 focus:ring-orange transition-all"
              {...register('service', { required: true })}
            >
              <option value="">Select Service</option>
              <option value="Tattoo">Tattoo</option>
              <option value="Piercing">Piercing</option>
              <option value="PMU">PMU</option>
              <option value="Other">Other</option>
            </select>
            {errors.service && <p className="text-xs text-red-400">Required</p>}
          </div>

          <button type="submit" className="btn-orange w-full text-lg py-4 mt-6">SUBMIT BOOKING</button>
        </form>
      </div>
    </div>
  );
}
